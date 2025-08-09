
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
    }
];