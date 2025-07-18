import { genotypeMap, grey, darkgrey, silverblack, silvercreamblack, lighterbeige, black, greybrown, darkbrown, almostblack } from "./horse_colors.js";
import { horseBaseCoords, maneCoords, frontLockCoords, maneStripeCoords, dappleCoords, tobianoCoords } from "./horse_coords.js";

//voikko + hopea + hallakko + ruunikkopohjalla on vähän hassu väriyhdistelmä
//hiirakko on turhan vaalea, ainakin verrattuna hiirakko + voikkoon?
document.addEventListener("DOMContentLoaded", () => {
    const damForm = document.getElementById("genotype-form-dam");
    damForm.addEventListener("change", updateDamGenotype);

    const sireForm = document.getElementById("genotype-form-sire");
    sireForm.addEventListener("change", updateSireGenotype);

    const generateButton = document.getElementById("generate-btn");
    generateButton.addEventListener("click", generateFoal);
});

const board = JXG.JSXGraph.initBoard('box', {
    boundingbox: [-15, 16.25, 15, -16.25],
    axis: false,
    showCopyright: false,
    zoom: {
        enabled: false
    },
    showNavigation: false

});

const mane1Points = [], frontLock1Points = [], tobiano1Points = [], horse1Points = [], dapple1Points = [], stripe1Points = [];
const mane2Points = [], frontLock2Points = [], tobiano2Points = [], horse2Points = [], dapple2Points = [], stripe2Points = [];
const mane3Points = [], frontLock3Points = [], tobiano3Points = [], horse3Points = [], dapple3Points = [], stripe3Points = [];

function addMirroredPoints(coords, offsetX, offsetY, arr1, arr2, arr3) {
    coords.forEach(([x, y]) => {
        arr1.push(board.create('point', [x - offsetX, y + offsetY], { visible: false, opacity: 0 }));
        arr2.push(board.create('point', [x + offsetX, y + offsetY], { visible: false, opacity: 0 }));
        arr3.push(board.create('point', [x, y - offsetY], { visible: false, opacity: 0 }));
    });
}

addMirroredPoints(maneCoords, 7.5, 7.5, mane1Points, mane2Points, mane3Points);
addMirroredPoints(frontLockCoords, 7.5, 7.5, frontLock1Points, frontLock2Points, frontLock3Points);
addMirroredPoints(tobianoCoords, 7.5, 7.5, tobiano1Points, tobiano2Points, tobiano3Points);
addMirroredPoints(horseBaseCoords, 7.5, 7.5, horse1Points, horse2Points, horse3Points);
addMirroredPoints(maneStripeCoords, 7.5, 7.5, stripe1Points, stripe2Points, stripe3Points);


function createFlatPolygon(points, fillColor) {
    return board.create('polygon', [...points], {
        fillColor,
        fillOpacity: 1,
        highlight: false,
        borders: { visible: false }
    });
}
function createDapples(points, color) {
    points.forEach((point, i) =>
        point.setAttribute({ visible: false, color: 'white', size: 6 - (i % 5), layer: 3, fillOpacity: 0.3, strokeOpacity: 0 })
    )
}

addMirroredPoints(dappleCoords, 7.5, 7.5, dapple1Points, dapple2Points, dapple3Points);
const horse1Shape = createFlatPolygon(horse1Points, 'white');
createDapples(dapple1Points, 'white');
const tobiano1Shape = createFlatPolygon(tobiano1Points, 'white');
const mane1Shape = createFlatPolygon(mane1Points, 'white');
const frontLock1Shape = createFlatPolygon(frontLock1Points, 'white');
const stripe1Shape = createFlatPolygon(stripe1Points, 'white');

const horse2Shape = createFlatPolygon(horse2Points, 'white');
createDapples(dapple2Points, 'white');
const tobiano2Shape = createFlatPolygon(tobiano2Points, 'white');
const mane2Shape = createFlatPolygon(mane2Points, 'white');
const frontLock2Shape = createFlatPolygon(frontLock2Points, 'white');
const stripe2Shape = createFlatPolygon(stripe2Points, 'white');

const horse3Shape = createFlatPolygon(horse3Points, 'white');
createDapples(dapple3Points, 'white');
const tobiano3Shape = createFlatPolygon(tobiano3Points, 'white');
const mane3Shape = createFlatPolygon(mane3Points, 'white');
const frontLock3Shape = createFlatPolygon(frontLock3Points, 'white');
const stripe3Shape = createFlatPolygon(stripe3Points, 'white');

//"family tree" lines
const leftTop = board.create('point', [-7.5, 1], { visible: false });
const leftBottom = board.create('point', [-7.5, -0.5], { visible: false });
const rightTop = board.create('point', [7.5, 1], { visible: false });
const rightBottom = board.create('point', [7.5, -0.5], { visible: false });
const center = board.create('point', [0, -0.5], { visible: false });
const centerBottom = board.create('point', [0, -1.5], { visible: false });

board.create('line', [leftTop, leftBottom], { straightFirst: false, straightLast: false, strokeColor: 'grey', strokeWidth: 1 })
board.create('line', [rightTop, rightBottom], { straightFirst: false, straightLast: false, strokeColor: 'grey', strokeWidth: 1 })
board.create('line', [leftBottom, rightBottom], { straightFirst: false, straightLast: false, strokeColor: 'grey', strokeWidth: 1 })
board.create('line', [center, centerBottom], { straightFirst: false, straightLast: false, strokeColor: 'grey', strokeWidth: 1 })


const defaultGenotype = {
    eLocus: 'EE',
    aLocus: 'AA',
    cLocus: 'cc',
    gLocus: 'gg',
    toLocus: 'tt',
    zLocus: 'zz',
    dLocus: 'dd',
};

let selectedHorseGenotype = { ...defaultGenotype };
let foalGenotype = { ...defaultGenotype };
let damGenotype = { ...defaultGenotype };
let sireGenotype = { ...defaultGenotype };

const alleleMap = {
    c: 'C',
    C: 'Cr',
    T: 'TO',
    t: 'to',
};

function expandAllelePair(pair) {
    return pair
        .split('')
        .map(allele => alleleMap[allele] || allele)
        .join('');
}

function toggleDapples(points, dapplesOn) {
    points.forEach((point, i) => {
        point.setAttribute({ visible: dapplesOn });
    })
};

function updateDamGenotype() {
    selectedHorseGenotype.eLocus = document.querySelector('input[name="E"]:checked')?.value || '';
    selectedHorseGenotype.aLocus = document.querySelector('input[name="A"]:checked')?.value || '';
    selectedHorseGenotype.cLocus = document.querySelector('input[name="C"]:checked')?.value || '';
    selectedHorseGenotype.gLocus = document.querySelector('input[name="G"]:checked')?.value || '';
    selectedHorseGenotype.toLocus = document.querySelector('input[name="TO"]:checked')?.value || '';
    selectedHorseGenotype.zLocus = document.querySelector('input[name="Z"]:checked')?.value || '';
    selectedHorseGenotype.dLocus = document.querySelector('input[name="D"]:checked')?.value || '';
    updateHorse1Color();
}
function updateSireGenotype() {
    selectedHorseGenotype.eLocus = document.querySelector('input[name="Es"]:checked')?.value || '';
    selectedHorseGenotype.aLocus = document.querySelector('input[name="As"]:checked')?.value || '';
    selectedHorseGenotype.cLocus = document.querySelector('input[name="Cs"]:checked')?.value || '';
    selectedHorseGenotype.gLocus = document.querySelector('input[name="Gs"]:checked')?.value || '';
    selectedHorseGenotype.toLocus = document.querySelector('input[name="TOs"]:checked')?.value || '';
    selectedHorseGenotype.zLocus = document.querySelector('input[name="Zs"]:checked')?.value || '';
    selectedHorseGenotype.dLocus = document.querySelector('input[name="Ds"]:checked')?.value || '';
    updateHorse2Color();
}

function genotypeToString(genotype) {
    return genotype.eLocus + genotype.aLocus + genotype.cLocus + genotype.dLocus;
}

function updateHorseColor(genotype, baseShape, maneShape, frontLockShape, tobianoShape, stripeShape, dapplePoints, id, text) {
    const genotypeCopy = { ...genotype };
    const string = genotypeToString(genotypeCopy);
    const colorObject = genotypeMap[string];
    console.log(string, colorObject);

    let baseColor = colorObject.baseColor;
    let maneColor = colorObject.maneColor;
    let description = colorObject.desc;

    if (genotypeCopy.zLocus != 'zz' && baseColor == almostblack) {
        baseColor = silverblack;
        description = "hopeanmusta";
        if (genotypeCopy.dLocus != 'dd') {
            baseColor = grey;
            description = "hopeanmusta + hallakko";
        }
    }
    if (genotypeCopy.zLocus != 'zz' && (baseColor == greybrown || baseColor == darkbrown)) {
        baseColor = silvercreamblack;
        description = "hopeanmusta + mustanvoikko";
        if (genotypeCopy.dLocus != 'dd') {
            baseColor = grey;
            description = "hopeanmusta + mustanvoikko + hallakko";
        }
    }

    if (genotypeCopy.zLocus != 'zz' && [black, almostblack, darkgrey, darkbrown].includes(maneColor)) {
        maneColor = lighterbeige;
        
    }
    if (genotypeCopy.zLocus != 'zz' && !description.includes("hopea") && !description.includes("valkovoikko") && genotypeCopy.eLocus != 'ee') {
            description = description + ", hopeageeni";
        }

    if (genotypeCopy.gLocus != 'gg') {
        baseColor = grey;
        maneColor = darkgrey;
        description = "kimo";
    }

    baseShape.setAttribute({ fillColor: baseColor });
    maneShape.setAttribute({ fillColor: maneColor });
    frontLockShape.setAttribute({ fillColor: maneColor });

    tobianoShape.setAttribute({ visible: (genotypeCopy.toLocus != 'tt') });
    if (genotypeCopy.toLocus != 'tt') {
            description = description + ", tobiano";
        }
    stripeShape.setAttribute({
        visible: (genotypeCopy.dLocus != 'dd' && genotypeCopy.gLocus == 'gg'),
        color: baseColor
    });

    const showDapples = genotypeCopy.gLocus != 'gg' ||
        (genotypeCopy.zLocus != 'zz' &&
            genotypeCopy.aLocus == 'aa' &&
            genotypeCopy.eLocus != 'ee' &&
            genotypeCopy.cLocus != 'CC' &&
            genotypeCopy.dLocus == 'dd');

    toggleDapples(dapplePoints, showDapples);




    document.getElementById(id).textContent = text + description;
}

function updateHorse1Color() {
    damGenotype = { ...selectedHorseGenotype };
    updateHorseColor(damGenotype, horse1Shape, mane1Shape, frontLock1Shape, tobiano1Shape, stripe1Shape, dapple1Points, 'dam-color-display', "Emän väri: ");
}
function updateHorse2Color() {
    sireGenotype = { ...selectedHorseGenotype };
    updateHorseColor(sireGenotype, horse2Shape, mane2Shape, frontLock2Shape, tobiano2Shape, stripe2Shape, dapple2Points, 'sire-color-display', "Isän väri: ");
}
function updateHorse3Color() {
    updateHorseColor(foalGenotype, horse3Shape, mane3Shape, frontLock3Shape, tobiano3Shape, stripe3Shape, dapple3Points, 'foal-color-display', "Varsan väri: ");
}

function updateFoalGenotypeDisplay() {
    const display = document.getElementById('foal-genotype-display');
    const expanded = Object.values(foalGenotype).map(expandAllelePair);
    display.textContent = "Varsan genotyyppi: " + expanded.join(' ');
}

function generateFoal() {
    for (const locus in damGenotype) {
        const damAllele = damGenotype[locus][Math.random() > 0.5 ? 0 : 1];
        const sireAllele = sireGenotype[locus][Math.random() > 0.5 ? 0 : 1]
        foalGenotype[locus] = [damAllele, sireAllele].sort().join('');
    }
    //console.log(damGenotype, sireGenotype, foalGenotype);
    updateHorse3Color();
    updateFoalGenotypeDisplay();
    const sex = Math.random() > 0.5 ? 'Tamma' : 'Ori';
    document.getElementById('foal-sex-display').textContent = 'Sukupuoli: ' + sex;

}

updateHorse1Color();
updateHorse2Color();




// const eye1 = board.create('point', [-2.05, 2.10], { color: 'black', size: 4});
// const eyeHL1 = board.create('point', [-1.92, 2.2], { color: 'white', size: 0.1});

// const moveable = [];
// maneStripeCoords.forEach(p => {
//     const point = board.create('point', [p[0], p[1]], { visible: true, size: 1 });
//     moveable.push(point);
// })
// const newhorse1Shape = board.create('polygon', [...moveable], {
//     fillColor: 'white',
//     strokeColor: 'black',
//     strokeWidth: 2,
//     fillOpacity: 0.8
// });
// const horseNewShape = board.create('polygon', [...maneCoords], {
//     fillColor: 'grey',
//     strokeColor: 'black',
//     vertices: { visible: false },
//     strokeWidth: 2
// });

// function logCoordsAsArray() {
//     const coords = moveable.map(p => {
//         const [x, y] = p.coords.usrCoords.slice(1);
//         return [Number(x.toFixed(3)), Number(y.toFixed(3))];
//     });
//     console.log(JSON.stringify(coords));
// }

