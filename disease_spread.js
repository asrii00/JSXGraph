//sometimes proximity detection doesn't seem to work bilaterally..? check if that's true and fix, 
//maybe it was due to the other point being infected already
const board = JXG.JSXGraph.initBoard('box', {
    boundingbox: [-1, 30, 30, -1],
    axis: false
});
const g = board.create('grid', [], {});

const pointMap = new Map();
const occupied = new Set();

let flag = true;
const points = [];
const startingPoints = [];
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i< 20; i++){
    const x= randomInt(1, 29);
    const y= randomInt(1, 29);
    startingPoints.push([x, y]);

}
startingPoints.forEach(i => {
    const x = i[0];
    const y = i[1];
    createPoint(x, y);
});

function getGridKey(x, y) {
    return `${Math.round(x)},${Math.round(y)}`;
}
function createPoint(x, y) {
    const id = pointMap.size + 1;
    const point = board.create('point', [x, y], {
        name: id,
        fixed: true,
        size: 5,
        color: 'blue'
    });

    point.customState = 'clean';
    point.gridX = x;
    point.gridY = y;
    
    point.id = id;
    const key = `${point.gridX},${point.gridY}`;
    pointMap.set(id, point);
    occupied.add(key);
}


function movePointRandomly(point) {
    const x = point.gridX;
    const y = point.gridY;
    let newX = x;
    let newY = y;

    const direction = Math.floor(Math.random() * 4);

    if (direction === 0 && y < 29) newY += 1;        // up
    else if (direction === 1 && y > 1) newY -= 1;    // down
    else if (direction === 2 && x > 1) newX -= 1;    // left
    else if (direction === 3 && x < 29) newX += 1;   // right
    const key = `${newX},${newY}`;

    if (!occupied.has(key)) { //could add check if the position even changed
        point.moveTo([newX, newY], 200);
        occupied.delete(`${x},${y}`);
        occupied.add(key);
        point.gridX = newX;
        point.gridY = newY;
        board.update();
    }


}



function updateContactState(point) {
    if (point.customState == "clean") {
        const x = point.gridX;
        const y = point.gridY;

        const neighbors = [
            [x + 1, y],
            [x - 1, y],
            [x, y + 1],
            [x, y - 1],
            [x + 1, y + 1],
            [x - 1, y + 1],
            [x - 1, y - 1],
            [x - 1, y - 1],
        ];

        let inContact = false;
        for (const [nx, ny] of neighbors) {
            if (occupied.has(`${nx},${ny}`)) {
                inContact = true;
                break;
            }
        }

        if (inContact) {
            // Now find which point(s) are adjacent
            for (const [otherId, otherPoint] of pointMap) {
                if (otherId === point.id) continue; // skip self
                const dx = Math.abs(otherPoint.gridX - x);
                
                const dy = Math.abs(otherPoint.gridY - y);
                if ((dx <= 1 && dy <= 1) && !(dx === 0 && dy === 0)) {
                    //console.log(`Point ${point.id} has neighbor ${otherId}`);
                    if (otherPoint.customState == 'infected') {
                        point.customState = 'infected';
                        point.setAttribute({ color: 'red' });
                    }
                }
            }
        }
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function move() {
    while (flag) {
        await sleep(200);
        for (const point of pointMap.values()) {
            updateContactState(point);
        }
        pointMap.forEach((value, key) => {
            movePointRandomly(value);
        })
        board.update();
    }
}

move();
const firstPoint = pointMap.get(1);
firstPoint.customState = 'infected';
firstPoint.setAttribute({ color: 'red' })

