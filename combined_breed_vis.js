//TODO: fix.
const board = JXG.JSXGraph.initBoard('box', {
    boundingbox: [-10, 5.5, 100, -0.75],
    axis: true,
    withLabel: false,
    showNavigation: false,
    showCopyright: false,
    defaultAxes: {
        x: {
            ticks: {
                ticksDistance: 250,  //hide ticks
                minorTicks: 0,
                drawLabels: false, //hide numbers along x axis
                majorHeight: 0 //hide vertical grid lines
            }
        }
    }
});

board.create('text', [-5, 3, 'Arvio'], { fontSize: 14, anchorX: 'middle', anchorY: 'middle', rotate: -90 });
board.create('text', [45, -0.5, 'Luonteenpiirre'], { anchorX: 'middle', anchorY: 'middle' });

const board2 = JXG.JSXGraph.initBoard('box2', {
    boundingbox: [-5, 50, 15, -5],
    axis: true,
    withLabel: false,
    showNavigation: false,
    showCopyright: false,
    defaultAxes: {
        x: {
            ticks: {
                ticksDistance: 250,  //hide ticks
                minorTicks: 0,
                drawLabels: false, //hide numbers along x axis
                majorHeight: 0 //hide vertical grid lines
            }
        }
    }
});

const femaleWeightLabel = board2.create('text', [5, 0, 'Nartut'], { anchorX: 'middle', anchorY: 'middle' });
const maleWeightLabel = board2.create('text', [10, 0, 'Urokset'], { anchorX: 'middle', anchorY: 'middle' });
const weightAxisLabel = board2.create('text', [-3, 25, 'Paino (kg)'], {
    anchorX: 'middle',
    anchorY: 'middle',
    cssStyle: 'transform: rotate(-90deg); transform-origin: center center;',
});

const board3 = JXG.JSXGraph.initBoard('box3', {
    boundingbox: [-30, 15, 30, -15],
    axis: false,
    withLabel: false,
    showNavigation: false,
    showCopyright: false,
});

const traits = [
    "Playful_dogs",
    "Anxious",
    "Fearful_dogs",
    "Impulsive",
    "avg_aggression",
    "Erratic",
    "Obedient",
    "Calm",
    "Insecure",
    "Prey_driven_chase",
    "Energetic",
    "Provocative",
    "Active",
    "Vocal",
    "Willing_to_learn"
];

const labels = [
    "Leikkisä",
    "Ahdistunut",
    "Pelokas",
    "Impulsiivinen",
    "Aggressiivinen",
    "Arvaamaton",
    "Tottelevainen",
    "Rauhallinen",
    "Epävarma",
    "Jahtiviettinen",
    "Energinen",
    "Provosoiva",
    "Aktiivinen",
    "Äänekäs",
    "Oppimishaluinen"
];

const exerciseLabels = {
    "under_1_hour": "Alle tunti",
    "1-2_hours": "1–2 tuntia",
    "2-3_hours": "2–3 tuntia",
    "over_3_hours": "Yli 3 tuntia"
};

const hobbyHomeLabels = {
    "never_no_hobby": "Ei koskaan",
    "infrequent": "Harvoin",
    "active": "Säännöllisesti"
};

const hobbyOutLabels = {
    "never_no_hobby": "Ei koskaan",
    "infrequent": "Harvoin",
    "active": "Säännöllisesti"
};

const aloneTimeLabels = {
    "under_1_hour": "Alle tunti",
    "1-3_hours": "1–3 tuntia",
    "3-6_hours": "3–6 tuntia",
    "6-8_hours": "6–8 tuntia",
    "over_8_hours": "Yli 8 tuntia"
};

const categoricalFields = [
    "daily_exercise",
    "hobby_frequency_home",
    "hobby_frequency_out",
    "alone_time"
];

const breeds = {
    sighthound: {
        title: "Eurooppalaisten vinttikoirarotujen luonteenpiirteet (n=123)",
        box1_caption: "Taulukko 1. Skaalalla 1-5 arvioidut luonteenpiirteet. Punainen piste kuvaa keskiarvoa. <br><br>",
        box2_caption: "Taulukko 2. Paino jaoteltuna sukupuolen mukaan. <br><br>",
        box3_caption: "Taulukko 3. Vinttikoirien elämäntyyli. <br><br>",
        task: `Tehtäviä:<br>
               1. Kuvaile tyypillistä eurooppalaista vinttikoiraa. Mainitse ainakin 6 luonteenpiirrettä, jotka ovat tässä rodussa erityisen yleisiä (//vahvoja) tai harvinaisia (//heikkoja).<br>
               <a href="https://figshare.com/articles/dataset/Salonen_et_al_Reliability_and_Validity_of_a_Dog_Personality_and_Unwanted_Behavior_Survey/14479152/1?file=27715521">Datan lähde</a>`,
        data: sighthoundsData,
        weightLabels: { femaleY: -1, maleY: -1, axisY: 25 }, 
        boundingBox: [-5, 50, 15, -2],
    },
    whiteshep: {
        title: "Valkoistenpaimenkoirien luonteenpiirteet (n=97)",
        box1_caption: "Taulukko 1. Skaalalla 1-5 arvioidut luonteenpiirteet. Punainen piste kuvaa keskiarvoa. <br><br>",
        box2_caption: "Taulukko 2. Paino jaoteltuna sukupuolen mukaan. <br><br>",
        box3_caption: "Taulukko 3. Valkoistenpaimenkoirien elämäntyyli. <br><br>",
        task: `Tehtäviä:<br>
               1. Kuvaile tyypillistä valkoistapaimenkoiraa. Mainitse ainakin 6 luonteenpiirrettä, jotka ovat tässä rodussa erityisen yleisiä (//vahvoja) tai harvinaisia (//heikkoja).<br>
               <a href="https://figshare.com/articles/dataset/Salonen_et_al_Reliability_and_Validity_of_a_Dog_Personality_and_Unwanted_Behavior_Survey/14479152/1?file=27715521">Datan lähde</a>`,
        data: whiteShepsData,
        weightLabels: { femaleY: 17.5, maleY: 17.5, axisY: 30 }, 
        boundingBox:  [-5, 50, 15, 15]
    },
    sheltie: {
        title: "Shetlanninlammaskoirien luonteenpiirteet (n=216)",
        box1_caption: "Taulukko 1. Skaalalla 1-5 arvioidut luonteenpiirteet. Punainen piste kuvaa keskiarvoa. <br><br>",
        box2_caption: "Taulukko 2. Paino jaoteltuna sukupuolen mukaan. <br><br>",
        box3_caption: "Taulukko 3. Shetlanninlammaskoirien elämäntyyli. <br><br>",
        task: `Tehtäviä:<br>
        1. Kuvaile tyypillistä shetlanninlammaskoiraa. Mainitse ainakin 6 luonteenpiirrettä, jotka ovat tässä rodussa erityisen yleisiä (//vahvoja) tai harvinaisia (//heikkoja).<br>
        2. Onko shelttien luonteenpiirteissä paljon vaihtelua? Minkä luonteenpiirteen suhteen shetlanninlammaskoirat vaikuttavat erityisen yhtenäisiltä?<br>
        3. Onko narttujen ja urosten välillä eroa? <br>
        4. Millainen on tyypillisen sheltin "elämäntapa" ulkoilun, harrastusten ja yksinolon määrän osalta?<br>
        5. Pekka haluaa rauhallisen, hiljaisen ja tottelevaisen koiran, joka ei ole pelokas eikä epävarma. Kannattaako hänen ottaa shetlanninlammaskoira? Miksi/miksi ei?<br>
        6. Maija haluaa tottelevaisen, oppimishaluisen ja ei-aggressiivisen koiran. Kannattaako hänen ottaa shetlanninlammaskoira? Miksi/miksi ei? <br>
        7. Jos Maija ottaa shetlanninlammaskoiran, 
        suosittelisitko hänelle narttu- vai urospentua, vai onko sukupuolella väliä?<br><br>

        <a href="https://figshare.com/articles/dataset/Salonen_et_al_Reliability_and_Validity_of_a_Dog_Personality_and_Unwanted_Behavior_Survey/14479152/1?file=27715521">Datan lähde</a>
`,
        data: sheltieData,
        weightLabels: { femaleY: -0.5, maleY: -0.5, axisY: 11 }, 
        boundingBox: [-5, 22, 15, -0.75]
    }
};


const boxWidth = 3;

let boxPlotObjs = [];
const malePoints = [], femalePoints = [];
const weightObjs = [];
const pieObjs = [];

let categoricalCounts = {};


let currentBreed = "sheltie";


let currentBreedData;
function quantiles(arr) {
    const sorted = arr.slice().sort((a, b) => a - b);
    const q = p => {
        const pos = (sorted.length - 1) * p;
        const base = Math.floor(pos);
        const rest = pos - base;
        if (sorted[base + 1] !== undefined) {
            return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
        } else {
            return sorted[base];
        }
    };
    return {
        min: sorted[0],
        q1: q(0.25),
        median: q(0.5),
        q3: q(0.75),
        max: sorted[sorted.length - 1]
    };
}

function drawBoxes(binnedData) {
    binnedData.forEach((bin, i) => {
        const { values } = bin;
        const q = quantiles(values);
        const mean = values.reduce((a, b) => a + b, 0) / values.length;
        const x = i * 6 + 5;

        const box = board.create('polygon', [
            [x - boxWidth / 2, q.q1],
            [x + boxWidth / 2, q.q1],
            [x + boxWidth / 2, q.q3],
            [x - boxWidth / 2, q.q3]
        ], {
            fillColor: 'lightblue',
            strokeColor: 'blue',
            fillOpacity: 0.5,
            fixed: true,
            vertices: { visible: false }
        });

        const median = board.create('line', [
            [x - boxWidth / 2, q.median],
            [x + boxWidth / 2, q.median]
        ], {
            straightFirst: false,
            straightLast: false,
            strokeColor: 'black',
            fixed: true
        });

        const whiskerLow = board.create('line', [[x, q.min], [x, q.q1]], {
            strokeColor: 'blue',
            fixed: true,
            straightFirst: false,
            straightLast: false
        });

        const whiskerHigh = board.create('line', [[x, q.q3], [x, q.max]], {
            strokeColor: 'blue',
            fixed: true,
            straightFirst: false,
            straightLast: false
        });

        const meanDot = board.create('point', [x, mean], {
            size: 2,
            color: 'red',
            fixed: true,
            name: '',
            showInfobox: false
        });

        const label = board.create('text', [x, -0.2, `${labels[i]}`], {
            anchorX: 'middle',
            anchorY: 'top',
            fixed: true,
            fontSize: 10,
            color: 'grey'
        });

        boxPlotObjs.push(box, median, whiskerLow, whiskerHigh, meanDot, label);
    });

}

function preProcessBreed(breedData) {
    let processedData = {};
    const objFemale = preFilterDogs(breedData, "female");
    processedData.females = objFemale.binned;
    const objMale = preFilterDogs(breedData, "male");
    processedData.males = objMale.binned;
    const objBoth = preFilterDogs(breedData, "both");
    processedData.both = objBoth.binned;
    processedData.weights = objBoth.weights;
    processedData.categorical = objBoth.categorical;
    return processedData;
}

function preFilterDogs(data, selectedSex) {
    //could be more efficient 
    let newBins = traits.map(trait => ({
        trait,
        values: []
    }));
    let femaleWeights = [];
    let maleWeights = [];

    const categoricalCounts = Object.fromEntries(categoricalFields.map(f => [f, {}]));
    const filteredDogs = [];
    data.forEach(dog => {
        const isFemale = dog.sex === 'female';
        const isMale = dog.sex === 'male';
        if (isFemale && typeof dog.weight === 'number') femaleWeights.push(dog.weight);
        if (isMale && typeof dog.weight === 'number') maleWeights.push(dog.weight);
        if (selectedSex === "female" && isFemale) filteredDogs.push(dog)
        else if (selectedSex === "male" && isMale) filteredDogs.push(dog)
        else if (selectedSex === "both") filteredDogs.push(dog)
    });

    const weights = { females: femaleWeights, males: maleWeights }

    filteredDogs.forEach(dog => {
        newBins.forEach(bin => {

            const val = dog[bin.trait];

            if (typeof val === 'number') bin["values"].push(val);
        });

        categoricalFields.forEach(field => {
            const value = dog[field];
            if (value) {
                categoricalCounts[field][value] = (categoricalCounts[field][value] || 0) + 1;
            }
        });
    });
    return { binned: newBins, categorical: categoricalCounts, weights: weights };

}


function plotData(data=currentBreedData, chosen=currentBreed, shouldUpdateTab = false) {
    currentBreed=chosen;
    currentBreedData=data;
    console.log("chosen:", chosen)

    board.suspendUpdate();

    // reset
    boxPlotObjs.forEach(obj => board.removeObject(obj));
    boxPlotObjs = [];

    const selectedSex = document.querySelector('input[name="sex"]:checked').value;

    let boxData;
    if (selectedSex === "females") {
        boxData = data.females;
    }
    if (selectedSex === "males") {
        boxData = data.males;
    }
    if (selectedSex === "both") {
        boxData = data.both;
    }

    drawBoxes(boxData);
    plotWeights(breeds[chosen].weightLabels, data.weights.females, data.weights.males, breeds[chosen].boundingBox);
    //drawPies(data.categorical);

    if (shouldUpdateTab){
        updateTab(currentBreed);
    }

    board.unsuspendUpdate();
}

// ////////////////////////////////////////////////////


function plotWeights(weightLabelPos, femaleWeights, maleWeights, boundingBox) {
    let sets = [[femaleWeights, femalePoints, 5], [maleWeights, malePoints, 10]]

    function equalize(weights, boxPlotObjs, x) {
        const difference = weights.length - boxPlotObjs.length;
        if (difference > 0) { // not enough boxPlotObjs
            for (let i = 0; i < difference; i++) {
                const dot = board2.create('point', [x, 10], {
                    size: 2,
                    color: 'red',
                    fixed: true,
                    name: '',
                    showInfobox: false,
                    opacity: 0.3
                });
                boxPlotObjs.push(dot);
            }
        } else if (difference < 0) {
            for (let i = 0; i > difference; i--) {
                board2.removeObject(boxPlotObjs.pop());
            }
        }
    }
    sets.forEach(set => {
        equalize(...set);
    });


    //move
    femalePoints.forEach((dot, i) => {
        dot.moveTo([5, femaleWeights[i]]);
    });
    malePoints.forEach((dot, i) => {
        dot.moveTo([10, maleWeights[i]]);
        dot.setAttribute({ color: 'blue', })
    });

    //move
    femaleWeightLabel.moveTo([5, weightLabelPos.femaleY])
    maleWeightLabel.moveTo([10, weightLabelPos.maleY])
    weightAxisLabel.moveTo([-3, weightLabelPos.axisY])

    board2.setBoundingBox(boundingBox);
}


///////////////////////////////////////////////////////

function drawPies(categoricalCounts) {

    pieObjs.forEach(obj => { obj.remove(); });
    pieObjs.length = 0;

    const exerciseValues = Object.values(categoricalCounts.daily_exercise);
    const exerciseKeys = Object.keys(categoricalCounts.daily_exercise);

    const hobbyInValues = Object.values(categoricalCounts.hobby_frequency_home);
    const hobbyInKeys = Object.keys(categoricalCounts.hobby_frequency_home);

    const hobbyOutValues = Object.values(categoricalCounts.hobby_frequency_out);
    const hobbyOutKeys = Object.keys(categoricalCounts.hobby_frequency_out);

    const aloneValues = Object.values(categoricalCounts.alone_time);
    const aloneKeys = Object.keys(categoricalCounts.alone_time);

    // translate
    const exerciseTranslatedLabels = exerciseKeys.map(k => exerciseLabels[k] ?? k);
    const hobbyInTranslatedLabels = hobbyInKeys.map(k => hobbyHomeLabels[k] ?? k);
    const hobbyOutTranslatedLabels = hobbyOutKeys.map(k => hobbyOutLabels[k] ?? k);
    const aloneTranslatedLabels = aloneKeys.map(k => aloneTimeLabels[k] ?? k);


    const xPositions = [
        { x: -22.5, array: exerciseValues, label: 'Liikunta (tuntia päivässä)', labels: exerciseTranslatedLabels },
        { x: -7.5, array: hobbyInValues, label: 'Harrastaminen kotona', labels: hobbyInTranslatedLabels },
        { x: 7.5, array: hobbyOutValues, label: 'Harrastaminen muualla', labels: hobbyOutTranslatedLabels },
        { x: 22.5, array: aloneValues, label: 'Yksinolo (tuntia päivässä)', labels: aloneTranslatedLabels }
    ];

    for (const item of xPositions) {
        const pie = board3.create('chart', [item.array], {
            chartStyle: 'pie',
            colors: ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99', '#cc99ff', '#ffb366'],
            center: [item.x, 0],
            radius: 5,
            strokeColor: '#000'
        });
        pieObjs.push(...pie[0]["sectors"], pie[0]["midpoint"], ...pie[0]["sectors"]);
        const text = board3.create('text', [item.x, -10, item.label], { anchorX: 'middle', fontSize: 14 });
        pieObjs.push(text);

        let angle = 0;
        const total = item.array.reduce((a, b) => a + b, 0);

        item.array.forEach((value, i) => {
            const midAngle = angle + (value / total) * Math.PI;
            const labelX = item.x + 6 * Math.cos(midAngle);
            const labelY = 6 * Math.sin(midAngle);
            const text = board3.create('text', [labelX, labelY, item.labels[i]], {
                anchorX: 'middle',
                anchorY: 'middle',
                fontSize: 12
            });
            pieObjs.push(text);
            angle += (value / total) * 2 * Math.PI;
        });
    }
}

function updateTabStyles(active) {
    document.querySelectorAll('#tabs button').forEach(btn => btn.classList.remove('tab-active'));
    document.getElementById(`tab-${active}`).classList.add('tab-active');
}

function updateTab(breedKey) {
    const config = breeds[breedKey];
    updateTabStyles(breedKey);

    document.getElementById("title").innerHTML = config.title;
    document.getElementById("box1-caption").innerHTML = config.box1_caption;
    document.getElementById("box2-caption").innerHTML = config.box2_caption;
    document.getElementById("box3-caption").innerHTML = config.box3_caption;
    document.getElementById("task").innerHTML = config.task;

}

document.querySelectorAll('input[name="sex"]').forEach(radio =>
    radio.addEventListener('change', () => {
        plotData();
    })
);


const sheltiesProcessed = preProcessBreed(sheltieData);
const whiteShepsProcessed = preProcessBreed(whiteShepsData);
const sighthoundsProcessed = preProcessBreed(sighthoundsData);
console.log("Done preprocessing")
plotData(sheltiesProcessed, "sheltie", true);
currentBreedData=sheltiesProcessed;

document.getElementById("tab-sighthound").addEventListener("click", () => plotData(sighthoundsProcessed, "sighthound", true));
document.getElementById("tab-whiteshep").addEventListener("click", () => plotData(whiteShepsProcessed, "whiteshep", true));
document.getElementById("tab-sheltie").addEventListener("click", () => plotData(sheltiesProcessed, "sheltie", true));


