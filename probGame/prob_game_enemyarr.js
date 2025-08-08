export const possibleEnemies = [
            ["Örkki", 0.9, 120, 'hotti.png'],
            ["Mörkki", 0.5, 200, 'otti.png'],
            ["Hörkki", 0.1, 1000, 'motti.png'],
            ["Öttiäinen", 0.05, 5000, 'motti.png'],
            ["Möttiäinen", 0.75, 100, 'otti.png'],
            ["Höttiäinen", 1, 70, 'hotti.png'],
        ];

 export const possibleEnemies2 = [
    {
        name: "Örkki",
        winChance: 0.9,
        rewardDistribution: { type: "uniform", a: 80, b: 160 },
        image: "hotti.png"
    },
    {
        name: "Mörkki",
        winChance: 0.5,
        rewardDistribution: { type: "normal", mean: 200, stddev: 30 },
        image: "otti.png"
    },
    {
        name: "Hörkki",
        winChance: 0.1,
        rewardDistribution: { type: "normal", mean: 1000, stddev: 150 },
        image: "motti.png"
    },
    {
        name: "Öttiäinen",
        winChance: 0.05,
        rewardDistribution: { type: "binomial", n: 10, p: 0.5, multiplier: 100 },
        image: "motti.png"
    },
    {
        name: "Möttiäinen",
        winChance: 0.75,
        rewardDistribution: { type: "uniform", a: 50, b: 150 },
        image: "otti.png"
    },
    {
        name: "Höttiäinen",
        winChance: 1,
        rewardDistribution: { type: "binomial", n: 2, p: 0.8, multiplier: 35 },
        image: "hotti.png"
    },
    {
        name: "Hötö",
        winChance: 0.6,
        rewardDistribution: { type: "normal", mean: 100, stddev: 60 },
        image: "hotti.png"
    },
    {
        name: "Ötö",
        winChance: 0.25,
        rewardDistribution: { type: "uniform", a: 200, b: 500 },
        image: "otti.png"
    }
];