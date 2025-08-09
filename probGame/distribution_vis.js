// ---------- Shared Custom Y-Axis Helper ----------
function createCustomYAxis(board, minY, maxY, posX) {
    const yAxisLine = board.create('line', [[posX, minY], [posX, maxY]], {
        strokeColor: '#888', strokeWidth: 1, straightFirst: false, straightLast: false
    });
    const ticks = board.create('ticks', [yAxisLine, 1], { strokeColor: '#888', label: { strokeColor: '#888' } });
    return { yAxisLine, ticks };
}

function updateCustomYAxis(board, customAxisRef, minX, maxX, minY, maxY) {
    if (customAxisRef.axis) {
        board.removeObject(customAxisRef.axis);
    }
    if (0 >= minX && 0 <= maxX) {
        customAxisRef.axis = null;
        return;
    }
    const difference = maxX - minX;


    customAxisRef.axis = board.create('axis', [
        [minX + difference * 0.05, minY], [minX + difference * 0.05, maxY]
    ], {
        strokeColor: 'gray',
        strokeWidth: 1,
        ticks: {
            strokeColor: 'gray',
            label: {
                strokeColor: 'gray'
            }
        }
    });
}


// ---------- Normal distribution ----------
function normalPDF(x, mean, stddev) {
    const coeff = 1 / (stddev * Math.sqrt(2 * Math.PI));
    const exponent = -((x - mean) ** 2) / (2 * stddev ** 2);
    return coeff * Math.exp(exponent);
}

function getNormalPDFData(mean, stddev, numPoints = 100) {
    const x = [];
    const y = [];
    const minX = mean - 4 * stddev;
    const maxX = mean + 4 * stddev;
    const step = (maxX - minX) / (numPoints - 1);

    for (let i = 0; i < numPoints; i++) {
        const xi = minX + i * step;
        x.push(xi);
        y.push(normalPDF(xi, mean, stddev));
    }
    return [x, y];
}

function calcBoundingBoxNormal(mean, stddev) {
    const k = 4;
    const minX = mean - k * stddev;
    const maxX = mean + k * stddev;
    const peakHeight = 1 / (stddev * Math.sqrt(2 * Math.PI));
    const maxY = 1.5 * peakHeight;
    const minY = -0.05 * peakHeight;
    return [minX, maxY, maxX, minY];
}

let mean = parseFloat(document.getElementById('mean').value);
let stddev = parseFloat(document.getElementById('stddev').value);

let board = JXG.JSXGraph.initBoard('box', {
    boundingbox: calcBoundingBoxNormal(mean, stddev),
    axis: true,
    showCopyright: false,
    showNavigation: false
});
let [xVals, yVals] = getNormalPDFData(mean, stddev);
let curve = board.create('curve', [xVals, yVals], { strokeWidth: 2 });
let normalAxis = createCustomYAxis(board, board.getBoundingBox()[3], board.getBoundingBox()[1], board.getBoundingBox()[0]);

function updateNormal() {
    mean = parseFloat(document.getElementById('mean').value);
    stddev = parseFloat(document.getElementById('stddev').value);

    const bb = calcBoundingBoxNormal(mean, stddev);
    board.setBoundingBox(bb);
    [xVals, yVals] = getNormalPDFData(mean, stddev);
    curve.dataX = xVals;
    curve.dataY = yVals;
    updateCustomYAxis(board, normalAxis, bb[0], bb[2], bb[3], bb[1]);
    board.update();
}

document.getElementById('mean').addEventListener('input', updateNormal);
document.getElementById('stddev').addEventListener('input', updateNormal);

// ---------- Binomial distribution ----------
function binomialCoeff(n, k) {
    if (k < 0 || k > n) return 0;
    let res = 1;
    for (let i = 1; i <= k; i++) {
        res *= (n - i + 1) / i;
    }
    return res;
}

function binomialPMF(n, p, k) {
    return binomialCoeff(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
}

function getBinomialData(n, p) {
    const x = [];
    const y = [];
    for (let k = 0; k <= n; k++) {
        x.push(k);
        y.push(binomialPMF(n, p, k));
    }
    return [x, y];
}

function calcBoundingBoxBinomial(n, p) {
    const [x, y] = getBinomialData(n, p);
    const maxY = Math.max(...y) * 1.2;
    return [-1, maxY, n + 1, -0.05 * maxY];
}

let nVal = parseInt(document.getElementById('n').value);
let pVal = parseFloat(document.getElementById('p').value);

let board2 = JXG.JSXGraph.initBoard('box2', {
    boundingbox: calcBoundingBoxBinomial(nVal, pVal),
    axis: true,
    showCopyright: false,
    showNavigation: false
});
let [bxVals, byVals] = getBinomialData(nVal, pVal);
let bars = [];
for (let i = 0; i < bxVals.length; i++) {
    bars.push(board2.create('segment', [[bxVals[i], 0], [bxVals[i], byVals[i]]], { strokeWidth: 4 }));
}
let binomAxis = createCustomYAxis(board2, board2.getBoundingBox()[3], board2.getBoundingBox()[1], board2.getBoundingBox()[0]);

function updateBinomial() {
    nVal = parseInt(document.getElementById('n').value);
    pVal = parseFloat(document.getElementById('p').value);

    const bb = calcBoundingBoxBinomial(nVal, pVal);
    board2.setBoundingBox(bb);

    [bxVals, byVals] = getBinomialData(nVal, pVal);
    for (let i = 0; i < bars.length; i++) {
        board2.removeObject(bars[i]);
    }
    bars = [];
    for (let i = 0; i < bxVals.length; i++) {
        bars.push(board2.create('segment', [[bxVals[i], 0], [bxVals[i], byVals[i]]], { strokeWidth: 4 }));
    }
    updateCustomYAxis(board2, binomAxis, bb[0], bb[2], bb[3], bb[1]);
    board2.update();
}

document.getElementById('n').addEventListener('input', updateBinomial);
document.getElementById('p').addEventListener('input', updateBinomial);

// ---------- Uniform distribution ----------
function getUniformData(a, b) {
    const height = 1 / (b - a);
    const x = [a, a, b, b];
    const y = [0, height, height, 0];
    return [x, y, height];
}

function calcBoundingBoxUniform(a, b) {
    const height = 1 / (b - a);
    return [a - (b-a)*0.2, height * 1.5, b + (b-a)*0.2, -0.05 * height];
}

let aVal = parseFloat(document.getElementById('a').value);
let bVal = parseFloat(document.getElementById('b').value);

let board3 = JXG.JSXGraph.initBoard('box3', {
    boundingbox: calcBoundingBoxUniform(aVal, bVal),
    axis: true,
    showCopyright: false,
    showNavigation: false
});
let [uxVals, uyVals] = getUniformData(aVal, bVal);
let ucurve = board3.create('curve', [uxVals, uyVals], { strokeWidth: 2 });
let uniformAxis = createCustomYAxis(board3, board3.getBoundingBox()[3], board3.getBoundingBox()[1], board3.getBoundingBox()[0]);

function updateUniform() {
    aVal = parseFloat(document.getElementById('a').value);
    bVal = parseFloat(document.getElementById('b').value);

    const bb = calcBoundingBoxUniform(aVal, bVal);
    board3.setBoundingBox(bb);

    [uxVals, uyVals] = getUniformData(aVal, bVal);
    ucurve.dataX = uxVals;
    ucurve.dataY = uyVals;
    updateCustomYAxis(board3, uniformAxis, bb[0], bb[2], bb[3], bb[1]);
    board3.update();
}

document.getElementById('a').addEventListener('input', updateUniform);
document.getElementById('b').addEventListener('input', updateUniform);