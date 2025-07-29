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

const categoricalFields = [
    "daily_exercise",
    "hobby_frequency_home",
    "hobby_frequency_out",
    "alone_time"
];

const categories = [
    {
        key: 'daily_exercise',
        x: -22.5,
        label: 'Liikunta (tuntia päivässä)',
        labelsMap: {
            "under_1_hour": "Alle tunti",
            "1-2_hours": "1–2 tuntia",
            "2-3_hours": "2–3 tuntia",
            "over_3_hours": "Yli 3 tuntia"
        }
    },
    {
        key: 'hobby_frequency_home',
        x: -7.5,
        label: 'Harrastaminen kotona',
        labelsMap: {
            "never_no_hobby": "Ei koskaan",
            "infrequent": "Harvoin",
            "active": "Säännöllisesti"
        }
    },
    {
        key: 'hobby_frequency_out',
        x: 7.5,
        label: 'Harrastaminen muualla',
        labelsMap: {
            "never_no_hobby": "Ei koskaan",
            "infrequent": "Harvoin",
            "active": "Säännöllisesti"
        }
    },
    {
        key: 'alone_time',
        x: 22.5,
        label: 'Yksinolo (tuntia päivässä)',
        labelsMap: {
            "under_1_hour": "Alle tunti",
            "1-3_hours": "1–3 tuntia",
            "3-6_hours": "3–6 tuntia",
            "6-8_hours": "6–8 tuntia",
            "over_8_hours": "Yli 8 tuntia"
        }
    }
];

const breeds = {
    sighthound: {
        title: "Eurooppalaisten vinttikoirarotujen luonteenpiirteet (n=123)",
        box1_caption: "Taulukko 1. Skaalalla 1-5 arvioidut luonteenpiirteet. Punainen piste kuvaa keskiarvoa. <br><br>",
        box2_caption: "Taulukko 2. Paino jaoteltuna sukupuolen mukaan. <br><br>",
        box3_caption: "Taulukko 3. Vinttikoirien elämäntyyli. <br><br>",
        task: `Sisällytetyt rodut: Venäjänvinttikoira, Englanninvinttikoira, Unkarinvinttikoira, Irlanninsusikoira, Skotlanninhirvikoira, Italianvinttikoira, Puolanvinttikoira, Silkkivinttikoira, Espanjanvinttikoira.<br>
        Tehtäviä:<br>
               1. Kuvaile tyypillistä eurooppalaista vinttikoiraa. Mainitse ainakin 6 luonteenpiirrettä, jotka ovat näissä roduissa erityisen yleisiä (//vahvoja) tai harvinaisia (//heikkoja).<br> <br>
               <a href="https://figshare.com/articles/dataset/Salonen_et_al_Reliability_and_Validity_of_a_Dog_Personality_and_Unwanted_Behavior_Survey/14479152/1?file=27715521">Datan lähde</a>`,
        data: sighthoundsData,
        weightLabels: { femaleY: -2.5, maleY: -2.5, axisY: 25 },
        boundingBox: [-5, 50, 15, -5],
    },
    whiteshep: {
        title: "Valkoistenpaimenkoirien luonteenpiirteet (n=97)",
        box1_caption: "Taulukko 1. Skaalalla 1-5 arvioidut luonteenpiirteet. Punainen piste kuvaa keskiarvoa. <br><br>",
        box2_caption: "Taulukko 2. Paino jaoteltuna sukupuolen mukaan. <br><br>",
        box3_caption: "Taulukko 3. Valkoistenpaimenkoirien elämäntyyli. <br><br>",
        task: `Tehtäviä:<br>
               1. Kuvaile tyypillistä valkoistapaimenkoiraa. Mainitse ainakin 6 luonteenpiirrettä, jotka ovat tässä rodussa erityisen yleisiä (//vahvoja) tai harvinaisia (//heikkoja). <br>
               2. Mikä on valkoistenpaimenkoirien painon vaihteluväli a) narttujen suhteen, b) urosten suhteen? <br> <br>
               <a href="https://figshare.com/articles/dataset/Salonen_et_al_Reliability_and_Validity_of_a_Dog_Personality_and_Unwanted_Behavior_Survey/14479152/1?file=27715521">Datan lähde</a>`,
        data: whiteShepsData,
        weightLabels: { femaleY: 17.5, maleY: 17.5, axisY: 30 },
        boundingBox: [-5, 50, 15, 15]
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
        weightLabels: { femaleY: -1, maleY: -1, axisY: 11 },
        boundingBox: [-5, 22, 15, -2]
    },
    sledDog: {
        title: "Rekikoirarotujen luonteenpiirteet (n=75)",
        box1_caption: "Taulukko 1. Skaalalla 1-5 arvioidut luonteenpiirteet. Punainen piste kuvaa keskiarvoa. <br><br>",
        box2_caption: "Taulukko 2. Paino jaoteltuna sukupuolen mukaan. <br><br>",
        box3_caption: "Taulukko 3. Rekikoirien elämäntyyli. <br><br>",
        task: `Sisällytetyt rodut: Alaskanhusky, Alaskanmalamuutti, Gröönlanninkoira, Samojedi, Siperianhusky, Jakutianlaika, Tšukotkanrekikoira. <br>

        Tehtäviä:<br>
        1. Kuvaile tyypillistä rekikoiraa. Mainitse ainakin 6 luonteenpiirrettä, jotka ovat näissä roduissa erityisen yleisiä (//vahvoja) tai harvinaisia (//heikkoja).<br>
        <br><br>

        <a href="https://figshare.com/articles/dataset/Salonen_et_al_Reliability_and_Validity_of_a_Dog_Personality_and_Unwanted_Behavior_Survey/14479152/1?file=27715521">Datan lähde</a>
`,
        data: sledDogsData,
        weightLabels: { femaleY: 12.5, maleY: 12.5, axisY: 35 },
        boundingBox: [-5, 57.5, 15, 10]
    },
    pointer: {
        title: "Pointterirotujen luonteenpiirteet (n=178)",
        box1_caption: "Taulukko 1. Skaalalla 1-5 arvioidut luonteenpiirteet. Punainen piste kuvaa keskiarvoa. <br><br>",
        box2_caption: "Taulukko 2. Paino jaoteltuna sukupuolen mukaan. <br><br>",
        box3_caption: "Taulukko 3. Pointterien elämäntyyli. <br><br>",
        task: `Sisällytetyt rodut: Picardienspanieli, Bourbonnaisinseisoja, Bretoni, Saksanseisoja, Pointteri, Englantinsetteri, Gordoninsetteri, Punavalkoinen irlanninsetteri, Punainen irlanninsetteri, Münsterinseisoja, Vanhatanskankanakoira, Pont-audemerinspanieli, Portugalinseisoja, Spinone, Stabijhoun, Unkarinvizsla, Weimarinseisoja. <br>

        Tehtäviä:<br>
        1. Kuvaile tyypillistä pointteria. Mainitse ainakin 6 luonteenpiirrettä, jotka ovat näissä roduissa erityisen yleisiä (//vahvoja) tai harvinaisia (//heikkoja).<br>
        <br><br>

        <a href="https://figshare.com/articles/dataset/Salonen_et_al_Reliability_and_Validity_of_a_Dog_Personality_and_Unwanted_Behavior_Survey/14479152/1?file=27715521">Datan lähde</a>
`,
        data: pointersData,
        weightLabels: { femaleY: 7.5, maleY: 7.5, axisY: 25 },
        boundingBox: [-5, 45, 15, 5]
    },
    spitz: {
        title: "Saksalaisten pystykorvien ja läheisten rotujen luonteenpiirteet (n=220)",
        box1_caption: "Taulukko 1. Skaalalla 1-5 arvioidut luonteenpiirteet. Punainen piste kuvaa keskiarvoa. <br><br>",
        box2_caption: "Taulukko 2. Paino jaoteltuna sukupuolen mukaan. <br><br>",
        box3_caption: "Taulukko 3. Elämäntyyli. <br><br>",
        task: `Sisällytetyt rodut:  Saksanpystykorvat (kaikki koot), Eurasier, Japaninpystykorva, Italianpystykorva.<br>

        Tehtäviä:<br>
        1. Kuvaile tyypillistä tämän roturyhmän edustajaa. Mainitse ainakin 6 luonteenpiirrettä, jotka ovat näissä roduissa erityisen yleisiä (//vahvoja) tai harvinaisia (//heikkoja).<br>
        <br><br>

        <a href="https://figshare.com/articles/dataset/Salonen_et_al_Reliability_and_Validity_of_a_Dog_Personality_and_Unwanted_Behavior_Survey/14479152/1?file=27715521">Datan lähde</a>
`,
        data: spitzData,
        weightLabels: { femaleY: -1, maleY: -1, axisY: 20 },
        boundingBox: [-5, 42.5, 15, -2]
    },
    asian: {
        title: "Aasialaisten alkuperäisrotujen luonteenpiirteet (n=126)",
        box1_caption: "Taulukko 1. Skaalalla 1-5 arvioidut luonteenpiirteet. Punainen piste kuvaa keskiarvoa. <br><br>",
        box2_caption: "Taulukko 2. Paino jaoteltuna sukupuolen mukaan. <br><br>",
        box3_caption: "Taulukko 3. Elämäntyyli. <br><br>",
        task: `Sisällytetyt rodut:  Akita, Amerikanakita, Chow Chow, Hokkaidonkoira, Kainkoira, Kishunkoira, Koreanjindonkoira, Shar Pei, Shiba, Shikokunkoira, Tosa <br>

        Tehtäviä:<br>
        1. Kuvaile tyypillistä tämän roturyhmän edustajaa. Mainitse ainakin 6 luonteenpiirrettä, jotka ovat näissä roduissa erityisen yleisiä (//vahvoja) tai harvinaisia (//heikkoja).<br>
        <br><br>

        <a href="https://figshare.com/articles/dataset/Salonen_et_al_Reliability_and_Validity_of_a_Dog_Personality_and_Unwanted_Behavior_Survey/14479152/1?file=27715521">Datan lähde</a>
`,
        data: asianPrimitivesData,
        weightLabels: { femaleY: 2.5, maleY: 2.5, axisY: 30 },
        boundingBox: [-5, 67.5, 15, -2 ]
    },
};

const boxWidth = 3;

//pies
const radius = 5;
const labelDistance = 6;
const pieColors = ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99', '#cc99ff', '#ffb366'];

const boxPlotObjs = [];
const malePoints = [], femalePoints = [];
const weightObjs = [];
const pieObjs = [];

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


function plotData(data = currentBreedData, chosen = currentBreed, shouldUpdateTab = false) {
    currentBreed = chosen; //stores last selection here; if no breed is given to this function, it's restored from here
    currentBreedData = data;

    board.suspendUpdate();
    // reset
    boxPlotObjs.forEach(obj => board.removeObject(obj));
    boxPlotObjs.length = 0;

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
    if (shouldUpdateTab) drawPies(data.categorical);

    if (shouldUpdateTab) {
        updateTab(currentBreed);
    }

    board.unsuspendUpdate();
}

//////////////////////////////////////////////////////

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

    //move dots 
    femalePoints.forEach((dot, i) => {
        dot.moveTo([5, femaleWeights[i]]);
    });
    malePoints.forEach((dot, i) => {
        dot.moveTo([10, maleWeights[i]]);
        dot.setAttribute({ color: 'blue', })
    });

    //move labels
    femaleWeightLabel.moveTo([5, weightLabelPos.femaleY])
    maleWeightLabel.moveTo([10, weightLabelPos.maleY])
    weightAxisLabel.moveTo([-3, weightLabelPos.axisY])

    board2.setBoundingBox(boundingBox);
}


///////////////////////////////////////////////////////

function drawPies(categoricalCounts) {
    pieObjs.forEach(obj => obj.remove());
    pieObjs.length = 0;

    for (const cat of categories) {
        const values = Object.values(categoricalCounts[cat.key]);
        const keys = Object.keys(categoricalCounts[cat.key]);
        const translatedLabels = keys.map(k => cat.labelsMap[k] ?? k);
        const total = values.reduce((a, b) => a + b, 0);

        const pie = board3.create('chart', [values], {
            chartStyle: 'pie',
            center: [cat.x, 0],
            radius: radius,
            colors: pieColors,
            strokeColor: '#000'
        });

        pieObjs.push(...pie[0].sectors, pie[0].midpoint, ...pie[0].points);

        const titleText = board3.create('text', [cat.x, -10, cat.label], {
            anchorX: 'middle',
            fontSize: 14
        });
        pieObjs.push(titleText);

        let angle = 0;
        for (let i = 0; i < values.length; i++) {
            const portion = values[i] / total;
            const midAngle = angle + portion * Math.PI;
            const labelX = cat.x + labelDistance * Math.cos(midAngle);
            const labelY = labelDistance * Math.sin(midAngle);

            const label = board3.create('text', [labelX, labelY, translatedLabels[i]], {
                anchorX: 'middle',
                anchorY: 'middle',
                fontSize: 12
            });

            pieObjs.push(label);
            angle += portion * 2 * Math.PI;
        }
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
const sledDogsProcessed = preProcessBreed(sledDogsData);
const pointersProcessed = preProcessBreed(pointersData);
const spitzesProcessed = preProcessBreed(spitzData);
const asianProcessed = preProcessBreed(asianPrimitivesData);
console.log("Done preprocessing")
plotData(sheltiesProcessed, "sheltie", true);

document.getElementById("tab-sighthound").addEventListener("click", () => plotData(sighthoundsProcessed, "sighthound", true));
document.getElementById("tab-whiteshep").addEventListener("click", () => plotData(whiteShepsProcessed, "whiteshep", true));
document.getElementById("tab-sheltie").addEventListener("click", () => plotData(sheltiesProcessed, "sheltie", true));
document.getElementById("tab-sledDog").addEventListener("click", () => plotData(sledDogsProcessed, "sledDog", true));
document.getElementById("tab-pointer").addEventListener("click", () => plotData(pointersProcessed, "pointer", true));
document.getElementById("tab-spitz").addEventListener("click", () => plotData(spitzesProcessed, "spitz", true));
document.getElementById("tab-asian").addEventListener("click", () => plotData(asianProcessed, "asian", true));


