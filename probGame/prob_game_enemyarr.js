
export const possibleEnemies2 = [
    {
        name: "Örkki",
        defeatProb: 0.9,
        rewardDistribution: { type: "uniform", a: 80, b: 160 },
        rewardText: 'Tasajakautunut<br> välillä 80 - 160',
        filename: "hotti.png",
        canInfect: false,
        infectionChance: 0
    },
    {
        name: "Mörkki",
        defeatProb: 0.5,
        rewardDistribution: { type: "normal", mean: 200, stddev: 30 },
        rewardText: 'Normaalijakautunut, <br> keskiarvo: 200, keskihajonta: 160',
        filename: "otti.png",
        canInfect: false,
        infectionChance: 0
    },
    {
        name: "Hörkki",
        defeatProb: 0.1,
        rewardDistribution: { type: "normal", mean: 1000, stddev: 150 },
        rewardText: 'Normaalijakautunut, <br> keskiarvo: 1000, keskihajonta: 150',
        filename: "motti.png",
        canInfect: false,
        infectionChance: 0
    },
    {
        name: "Öttiäinen",
        defeatProb: 0.05,
        rewardDistribution: { type: "binomial", n: 10, p: 0.5, multiplier: 100 },
        rewardText: 'Binomiaalijakautunut,<br> n = 10 , p: 0.5, x 100 kolikkoa',
        filename: "motti.png",
        canInfect: false,
        infectionChance: 0
    },
    {
        name: "Möttiäinen",
        defeatProb: 0.75,
        rewardDistribution: { type: "uniform", a: 50, b: 150 },
        rewardText: 'Tasajakautunut <br> välillä 50 - 150',
        filename: "otti.png",
        canInfect: false,
        infectionChance: 0
    },
    {
        name: "Höttiäinen",
        defeatProb: 1,
        rewardDistribution: { type: "binomial", n: 2, p: 0.8, multiplier: 35 },
        rewardText: 'Binomiaalijakautunut,<br> n = 2 , p: 0.8, x 35 kolikkoa',
        filename: "hotti.png",
        canInfect: false,
        infectionChance: 0
    },
    {
        name: "Hötö",
        defeatProb: 0.6,
        rewardDistribution: { type: "normal", mean: 100, stddev: 60 },
        rewardText: 'Normaalijakautunut, <br> keskiarvo: 100, keskihajonta: 60',
        filename: "hotti.png",
        canInfect: false,
        infectionChance: 0
    },
    {
        name: "Ötö",
        defeatProb: 0.25,
        rewardDistribution: { type: "uniform", a: 200, b: 500 },
        rewardText: 'Tasajakautunut<br> välillä 200 - 500',
        filename: "otti.png",
        canInfect: false,
        infectionChance: 0
    },
    {
        name: "Mätämöttiäinen",
        defeatProb: 0.7,
        rewardDistribution: { type: "normal", mean: 400, stddev: 130 },
        rewardText: 'Normaalijakautunut, <br> keskiarvo: 400, keskihajonta: 130',
        filename: "mataorkki.png",
        canInfect: true,
        infectionChance: 0.5
    },
    {
        name: "Mätäörkki",
        defeatProb: 0.25,
        rewardDistribution: { type: "uniform", a: 500, b: 1500 },
        rewardText: 'Tasajakautunut<br> välillä 500 - 1500',
        filename: "mataorkki.png",
        canInfect: true,
        infectionChance: 0.25
    },
    {
        name: "Mätäötti",
        defeatProb: 0.50,
        rewardDistribution: { type: "uniform", a: 200, b: 500 },
        rewardText: 'Tasajakautunut<br> välillä 200 - 500',
        filename: "mataorkki.png",
        canInfect: true,
        infectionChance: 0.30
    },
    {
        name: "Ölliäinen",
        defeatProb: 0.85, 
        rewardDistribution: { type: "uniform", a: 1, b: 300 },
        rewardText: 'Tasajakautunut<br> välillä 1 - 300',
        filename: "otti.png",
        canInfect: false,
        infectionChance: 0
    },
    {
        name: "Kömpiäinen",
        defeatProb: 0.15,
        rewardDistribution: { type: "normal", mean: 200, stddev: 40 },
        rewardText: 'Normaalijakautunut, <br> keskiarvo: 200, keskihajonta: 40',
        filename: "motti.png",
        canInfect: false,
        infectionChance: 0
    },
    {
        name: "Hörri",
        defeatProb: 0.75,
        rewardDistribution: { type: "binomial", n: 5, p: 0.5, multiplier: 70 },
        rewardText: 'Binomiaalijakautunut,<br> n = 5 , p: 0.5, x 70 kolikkoa',
        filename: "hotti.png",
        canInfect: false,
        infectionChance: 0
    },
    {
        name: "Mätäötiö",
        defeatProb: 0.15,
        rewardDistribution: { type: "uniform", a: 600, b: 1200 },
        rewardText: 'Tasajakautunut<br> välillä 600 - 1200',
        filename: "mataorkki.png",
        canInfect: true,
        infectionChance: 0.45
    },
    {
        name: "Höötiäinen",
        defeatProb: 0.25,
        rewardDistribution: { type: "normal", mean: 600, stddev: 150 },
        rewardText: 'Normaalijakautunut, <br> keskiarvo: 600, keskihajonta: 150',
        filename: "motti.png",
        canInfect: false,
        infectionChance: 0
    },
    {
        name: "Iku-ötti",
        defeatProb: 0.5,
        rewardDistribution: { type: "uniform", a: 100, b: 200 },
        rewardText: 'Tasajakautunut<br> välillä 100 - 200',
        filename: "otti.png",
        canInfect: false,
        infectionChance: 0
    },
    {
        name: "Mätä-mötiäinen",
        defeatProb: 0.45,
        rewardDistribution: { type: "binomial", n: 8, p: 0.3, multiplier: 100 },
        rewardText: 'Binomiaalijakautunut,<br> n = 8 , p: 0.3, x 100 kolikkoa',
        filename: "mataorkki.png",
        canInfect: true,
        infectionChance: 0.35
    },
    {
        name: "Hötöläinen",
        defeatProb: 0.35,
        rewardDistribution: { type: "uniform", a: 40, b: 80 },
        rewardText: 'Tasajakautunut<br> välillä 40 - 80',
        filename: "otti.png",
        canInfect: false,
        infectionChance: 0
    },
    {
        name: "Mörö",
        defeatProb: 0.4,
        rewardDistribution: { type: "normal", mean: 400, stddev: 60 },
        rewardText: 'Normaalijakautunut, <br> keskiarvo: 400, keskihajonta: 60',
        filename: "hotti.png",
        canInfect: false,
        infectionChance: 0
    },
    {
        name: "Ötökki",
        defeatProb: 0.7,
        rewardDistribution: { type: "uniform", a: 300, b: 600 },
        rewardText: 'Tasajakautunut<br> välillä 300 - 600',
        filename: "hotti.png",
        canInfect: false,
        infectionChance: 0
    },
    {
        name: "Mätähötökki",
        defeatProb: 0.3,
        rewardDistribution: { type: "normal", mean: 700, stddev: 200 },
        rewardText: 'Normaalijakautunut, <br> keskiarvo: 700, keskihajonta: 200',
        filename: "mataorkki.png",
        canInfect: true,
        infectionChance: 0.4
    },
    {
        name: "Mökötin",
        defeatProb: 0.65,
        rewardDistribution: { type: "binomial", n: 15, p: 0.6, multiplier: 5 },
        rewardText: 'Binomiaalijakautunut,<br> n = 15 , p: 0.6, x 5 kolikkoa',
        filename: "otti.png",
        canInfect: false,
        infectionChance: 0
    },
    {
        name: "Ötymöttiäinen",
        defeatProb: 0.35,
        rewardDistribution: { type: "uniform", a: 500, b: 900 },
        rewardText: 'Tasajakautunut<br> välillä 500 - 900',
        filename: "motti.png",
        canInfect: false,
        infectionChance: 0
    },
    {
        name: "Mötiötti",
        defeatProb: 0.55,
        rewardDistribution: { type: "normal", mean: 250, stddev: 100 },
        rewardText: 'Normaalijakautunut, <br> keskiarvo: 250, keskihajonta: 100',
        filename: "mataorkki.png",
        canInfect: true,
        infectionChance: 0.3
    },
    {
        name: "Hötsi",
        defeatProb: 0.05,
        rewardDistribution: { type: "uniform", a: 800, b: 2500 },
        rewardText: 'Tasajakautunut<br> välillä 800 - 2500',
        filename: "motti.png",
        canInfect: false,
        infectionChance: 0
    },
    {
        name: "Ötsi",
        defeatProb: 0.8,
        rewardDistribution: { type: "normal", mean: 70, stddev: 15 },
        rewardText: 'Normaalijakautunut, <br> keskiarvo: 70, keskihajonta: 15',
        filename: "hotti.png",
        canInfect: false,
        infectionChance: 0
    },
    {
        name: "Kökötti",
        defeatProb: 0.2,
        rewardDistribution: { type: "binomial", n: 8, p: 0.25, multiplier: 150 },
        rewardText: 'Binomiaalijakautunut,<br> n = 8 , p: 0.25, x 150 kolikkoa',
        filename: "motti.png",
        canInfect: false,
        infectionChance: 0
    },
    {
        name: "Mätäöty",
        defeatProb: 0.15,
        rewardDistribution: { type: "uniform", a: 40, b: 400 },
        rewardText: 'Tasajakautunut<br> välillä 40 - 400',
        filename: "mataorkki.png",
        canInfect: true,
        infectionChance: 0.2
    },
    {
        name: "Möttiläinen",
        defeatProb: 0.2,
        rewardDistribution: { type: "uniform", a: 150, b: 250 },
        rewardText: 'Tasajakautunut<br> välillä 150 - 250',
        filename: "otti.png",
        canInfect: false,
        infectionChance: 0
    },
    {
        name: "Pikkuötti",
        defeatProb: 1,
        rewardDistribution: { type: "binomial", n: 20, p: 0.25, multiplier: 5 },
        rewardText: 'Binomiaalijakautunut,<br> n = 20 , p: 0.25, x 5 kolikkoa',
        filename: "pikkuotti.png",
        canInfect: false,
        infectionChance: 0
    },
    {
        name: "Pikkuhötöläinen",
        defeatProb: 0.96,
        rewardDistribution: { type: "uniform", a: 1, b: 25 },
        rewardText: 'Tasajakautunut<br> välillä 1 - 25',
        filename: "pikkuotti.png",
        canInfect: false,
        infectionChance: 0
    },
    {
        name: "Pikkumöttiäinen",
        defeatProb: 0.99,
        rewardDistribution: { type: "normal", mean: 10, stddev: 5 },
        rewardText: 'Normaalijakautunut, <br> keskiarvo: 10, keskihajonta: 5',
        filename: "pikkuotti.png",
        canInfect: false,
        infectionChance: 0
    }
];