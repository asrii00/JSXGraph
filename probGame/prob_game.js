import { possibleEnemies2, } from "./prob_game_enemyarr.js"
import { sampleBinomial, sampleUniform, sampleNormal } from "./prob_game_distribs.js";

const possibleEnemies = possibleEnemies2;
const board = JXG.JSXGraph.initBoard('box', {
    boundingbox: [-15, 10, 15, -10],
    axis: false,
    showCopyright: false,
    showNavigation: false
});


const Player = {
    gold: 0,
    tools: [],
    baseStrength: 1.0,
    hasAntidoteInInventory: false,
    activeEffects: {
        safetyNetOn: false,
        reverseCardOn: false
    },
    negativeEffects: {
        brainRot: false
    },

    canAfford(cost) {
        return this.gold >= cost;
    },

    buyTool(tool) {
        //add check to prevent buying the same item twice?
        if (this.canAfford(tool.cost)) {
            this.gold -= tool.cost;
            tool.purchased = true;
            this.tools.push(tool);
            tool.applyEffect(this);  // pass player object to allow tool to modify it
            return { success: true };
        } else {
            return { success: false, message: "Ei tarpeeksi kolikoita!" };
        }
    },

    infect() {
        if (!this.tools.includes(brainRotObj)) {
            this.negativeEffects.brainRot = true;
            this.baseStrength *= 0.75;
            this.tools.push(brainRotObj);
            renderPlayerTools(this.tools);
        }
    },

    removeBrainRot() {
        this.baseStrength = 1.0;
        this.tools = this.tools.filter(tool => tool !== brainRotObj);
        renderPlayerTools(this.tools);
    },

    infectionCheck(infectionChance) {
        console.log(infectionChance);
        if (Math.random() < infectionChance) {
            console.log("infected")
            this.infect();
            return true;
        } else {
            console.log("not infected")
            return false;
        }
    }
};

let currentStep = 0;

let activeEnemies = [];
const merchantVisualParts = [];
const toolRowVisualParts = [];

const inset = 1;
const fontSize = 18;

/////////BOARD OBJECTS
const messagePolygon = board.create('polygon', [
    [-15 + inset, 10 - inset],
    [15 - inset, 10 - inset],
    [15 - inset, -10 + inset],
    [-15 + inset, -10 + inset]
], {
    fillColor: '#cfeecf',          // light pastel green
    highlight: false,
    fixed: true,
    fillOpacity: 1,
    visible: false,
    vertices: { visible: false },
    layer: 20,
    borders: {
        strokeColor: '#d4e6d4',    // faint, near-matching border
        strokeWidth: 1
    },
});

const styling = {
    anchorX: 'middle',
    anchorY: 'middle',
    fontSize: fontSize,
    fixed: true,
    highlight: false,
    visible: false,
    cssStyle: ` padding: 4px; border-radius: 4px;`
}

//win/lose text
const messageText1 = board.create('text', [0, 0, `Voitit! `], styling);
const messageText2 = board.create('text', [0, -1, `Palkintosi: 5 kolikkoa `], styling);
const continueBtn = board.create('button', [0, -2.5, 'Jatka', () => nextScene()], {
    anchorX: 'middle',
    anchorY: 'middle',
    fontSize: fontSize - 2,
    visible: false,
    fixed: true,
    cssStyle: `background-color: rgba(255, 255, 255, 0.8); padding: 4px; border-radius: 4px;`
});
const infectionText = board.create('text', [0, -4, `Sait aivomätätartunnan.`], {
    anchorX: 'middle',
    anchorY: 'middle',
    fontSize: fontSize - 2,
    visible: false,
    fixed: true,
    highlight: false,
    cssStyle: `background-color: rgba(254, 157, 157, 1); padding: 4px; border-radius: 4px;`
});

//choose your opponent text
const fightText = board.create('text', [0, 8, `Valitse vastustajasi!`], styling);
const goldText = board.create('text', [11, 9.5, () => { return `Kultakolikkoja: ${Player.gold}` }], styling);
goldText.setAttribute({ visible: true, fontSize: fontSize - 2, cssStyle: `background-color: rgba(248, 203, 112, 0.8); padding: 4px; border-radius: 4px;` });

//skip merchant btn
const skipMerchantBtn = board.create('button', [10, -8.5, 'Jatka =>', () => nextScene()], {
    anchorX: 'middle',
    anchorY: 'middle',
    fontSize: fontSize - 2,
    visible: false,
    fixed: true,
    cssStyle: `background-color: rgba(182, 226, 143, 0.8); padding: 4px; border-radius: 4px;`
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//////////CLASSES

function Tool(name, cost, iconPath, description, textImgPath, isTall = false, negative = false) {
    this.name = name;
    this.cost = cost;
    this.iconPath = iconPath;
    this.description = description;
    this.purchased = false;
    this.isNegative = negative;
    this.textImgPath = textImgPath;
    this.isTallTooltip = isTall;

    this.purchase = function () {
        if (Player.gold >= this.cost) {
            this.purchased = true;
            return { success: true, goldLeft: Player.gold - this.cost };
        }
        return { success: false, goldLeft: Player.gold };
    };

}

function Sword() {
    Tool.call(this, "Miekka", 500, "sword.png", "Lisää voittamisen <br> todennäköisyyttä<br> 5 prosentilla.", "swordText.png", false);
}
Sword.prototype = Object.create(Tool.prototype);
Sword.prototype.constructor = Sword;
Sword.prototype.applyEffect = function (player) {
    player.baseStrength *= 1.05; 
};

function Net() {
    Tool.call(this, "Turvaverkko", 800, "net.png", "Et menetä kulta-<br>kolikoita, jos häviät.", "netText.png", false);
}
Net.prototype = Object.create(Tool.prototype);
Net.prototype.constructor = Net;
Net.prototype.applyEffect = function (player) {
    player.activeEffects.safetyNetOn = true;
};

function ReverseCard() {
    Tool.call(this, "Käänteiskortti", 2000, "reversecard.png", "Jos häviät, sinulla<br> on 25% mahdollisuus<br> kääntää se voitoksi.<br> Silloin voittoraha<br>kuitenkin puolittuu.", "cardText.png", true);
}
ReverseCard.prototype = Object.create(Tool.prototype);
ReverseCard.prototype.constructor = ReverseCard;
ReverseCard.prototype.applyEffect = function (player) {
    player.activeEffects.reverseCardOn = true;
};

function RotPotion() {
    Tool.call(this, "Parantava taikajuoma", 900, "rotPotion.png", "Parantaa aivomädän.", "rotPotionText.png", false);
}
RotPotion.prototype = Object.create(Tool.prototype);
RotPotion.prototype.constructor = RotPotion;
RotPotion.prototype.applyEffect = function (player) {
    if (player.negativeEffects.brainRot == true) {
        console.log("removing disease")
        player.negativeEffects.brainRot = false;
        player.removeBrainRot();
    }
    player.hasAntidoteInInventory = true;

};

// function BraveryPotion() {
//     Tool.call(this, "Rohkeusjuoma", 500, "rotPotion.png", "Lisää voittomahdollisuuksia,<br> mutta loukkaannut 20% todennäköisyydellä.", "rotPotionText.png", false);
// }
// BraveryPotion.prototype = Object.create(Tool.prototype);
// BraveryPotion.prototype.constructor = BraveryPotion;
// BraveryPotion.prototype.applyEffect = function (player) {
    

// };

function BrainRot() {
    Tool.call(this, "Aivomätä", 0, "brainrot.png", "Heikentää voitto-<br>mahdollisuuksiasi 25%.", "brainrotText.png", false);
}
BrainRot.prototype = Object.create(Tool.prototype);
BrainRot.prototype.constructor = BrainRot;
BrainRot.prototype.applyEffect = function (player) {
    player.infect();
};

function Enemy(enemy, side) {
    this.name = enemy.name;
    this.defeatProb = enemy.defeatProb;
    this.rewardDistribution = enemy.rewardDistribution;
    this.rewardText = enemy.rewardText;
    this.canInfect = enemy.canInfect;
    this.infectionChance = enemy.infectionChance;
    this.centerPos = (side === 'left') ? { y: -2, x: -6 } : { y: -2, x: 6 };
    this.visualParts = [];
    const imgWidth = 8;   // board units
    const imgHeight = 10;  // board units
    const imgCenterY = 3;

    // jsxgraph positions from lower left corner
    const lowerLeftX = this.centerPos.x - imgWidth / 2;
    const lowerLeftY = imgCenterY - imgHeight / 2;

    this.visualParts.push(board.create('image', [
        enemy.filename,
        [lowerLeftX, lowerLeftY],
        [imgWidth, imgHeight]
    ], {
        fixed: true,
        highlight: false
    }));
    this.draw = function () {
        this.visualParts.push(board.create('text', [this.centerPos.x, this.centerPos.y + 1.5, this.name], {
            anchorX: 'middle',
            anchorY: 'middle',
            fontSize: fontSize,
            fixed: true,
            highlight: false,
            layer: 8,
            cssStyle: `background-color: rgba(182, 226, 143, 0.8); padding: 4px; border-radius: 4px;`
        }));
        this.visualParts.push(board.create('text', [this.centerPos.x, this.centerPos.y + 0.5, `Voiton todennäköisyys: ${this.defeatProb.toFixed(2)}`], {
            anchorX: 'middle',
            anchorY: 'middle',
            fontSize: fontSize - 2,
            fixed: true,
            highlight: false,
            layer: 8,
            cssStyle: ` background-color: rgba(182, 226, 143, 0.8); padding: 4px; border-radius: 4px;`
        }));
        this.visualParts.push(board.create('text', [this.centerPos.x, this.centerPos.y - 0.75, `Palkinto, jos voitat: ${this.rewardText}`], {
            anchorX: 'middle',
            anchorY: 'middle',
            fontSize: fontSize - 2,
            fixed: true,
            highlight: false,
            layer: 8,
            cssStyle: ` background-color: rgba(182, 226, 143, 0.8); padding: 4px; border-radius: 4px; text-align: center;`
        }));
        this.visualParts.push(board.create('button', [this.centerPos.x, this.centerPos.y - 2.25, 'Valitse', () => handleFight(this)], {
            anchorX: 'middle',
            anchorY: 'middle',
            fontSize: fontSize - 2,
            fixed: true,
            highlight: false,
            layer: 8,
            cssStyle: `background-color: rgba(182, 226, 143, 0.8); padding: 4px; border-radius: 4px;`
        }));
        if (this.canInfect) {
            this.visualParts.push(board.create('text', [this.centerPos.x + 3, this.centerPos.y + 7.5, `Aivomätätartunnan <br> mahdollisuus: ${this.infectionChance}`], {
                anchorX: 'middle',
                anchorY: 'middle',
                fontSize: fontSize - 4,
                fixed: true,
                highlight: false,
                layer: 8,
                cssStyle: ` background-color: rgba(239, 156, 156, 0.8); padding: 4px; border-radius: 4px; text-align: center; white-space: pre-wrap; `
            }));
        }
    }

    this.fight = () => {
        let wasReversed = false;
        let gotInfected = false;
        if (this.canInfect && !Player.hasAntidoteInInventory) {
            console.log("checking infection")
            if (Player.infectionCheck(this.infectionChance)) {
                gotInfected = true;
            };
        }

        const adjustedProb = Math.min(1.0, this.defeatProb * Player.baseStrength); //clamp 
        console.log("odds", adjustedProb);
        let win = Math.random() < adjustedProb;
        if (!win && Player.activeEffects.reverseCardOn) {
            if (Math.random() < 0.25) {
                console.log("reversed!")
                win = true;
                wasReversed = true;
            } else { console.log("not reversed") }
        }
        let reward = 0;
        if (this.rewardDistribution.type == 'uniform') {
            reward = sampleUniform(this.rewardDistribution.a, this.rewardDistribution.b);
        }
        else if (this.rewardDistribution.type == 'normal') {
            do { //prevent negative
                reward = sampleNormal(this.rewardDistribution.mean, this.rewardDistribution.stddev);
            } while (reward < 0);
        }
        if (this.rewardDistribution.type == 'binomial') {
            reward = sampleBinomial(this.rewardDistribution.n, this.rewardDistribution.p, this.rewardDistribution.multiplier);
        }
        reward = Math.floor(reward);
        let rewardOutput = win ? reward : (Player.activeEffects.safetyNetOn ? 0 : -50);
        if (win && wasReversed) {
            rewardOutput = Math.floor(rewardOutput * 0.5);
        }
        console.log(rewardOutput)
        //just return outcome object here
        return { win, reward: rewardOutput, enemy: this, gotInfected: gotInfected };
    };

    this.removeAll = function () {
        this.visualParts.forEach(obj => { board.removeObject(obj); })
        this.visualParts.length = 0;
    }
}

/////////BATTLE
function generateTwoEnemies() {
    const firstIndex = getRandomInt(0, possibleEnemies.length - 1);
    const secondIndex = (firstIndex + getRandomInt(1, possibleEnemies.length - 1)) % possibleEnemies.length; //modulo trick a la chatgpt

    [firstIndex, secondIndex].forEach((index, i) => {
        const side = i === 0 ? 'left' : 'right';
        const enemy = new Enemy(possibleEnemies[index], side);
        enemy.draw();
        activeEnemies.push(enemy);
    });
}

function showFightEndMessage(outComeMessage, rewardMessage, won = true, gotInfected = false) {
    const bgColor = won ? '#cfeecf' : '#f0b2b2';
    fightText.setAttribute({ visible: false })
    messagePolygon.setAttribute({ visible: true, fillColor: bgColor });
    messageText1.setText(outComeMessage);
    messageText1.setAttribute({ visible: true });
    messageText2.setText(rewardMessage);
    messageText2.setAttribute({ visible: true });
    if (gotInfected) {
        infectionText.setAttribute({ visible: true })
    }
    else {
        infectionText.setAttribute({ visible: false })
    }
}
function hideFightEndMessage() {
    [fightText, messagePolygon, messageText1, messageText2, infectionText].forEach(obj => {
        obj.setAttribute({ visible: false });
    })
}

function handleFight(enemy) { //this could be a separate Scene but I'm doing it like this for now
    const result = enemy.fight();
    console.log(result);

    activeEnemies.forEach(enemy => {
        enemy.removeAll();
    })
    activeEnemies.length = 0;

    if (result.win) {
        Player.gold += result.reward;
        showFightEndMessage(`Voitit!`, `Palkintosi:  ${result.reward} kultakolikkoa`, true, result.gotInfected);
    } else {
        Player.gold += result.reward; // reward is -50 on loss
        showFightEndMessage(`Hävisit!`, `Tappio: ${result.reward} kultakolikkoa`, false, result.gotInfected);
    }

    continueBtn.setAttribute({ visible: true })
}

///////////MERCHANT

let toolsForSale = [
    new Sword(),
    new Net(),
    new ReverseCard(),
    new RotPotion()
];

const brainRotObj = new BrainRot();
brainRotObj.isNegative = true;

function buy(tool) {
    const result = Player.buyTool(tool);
    if (result.success) {
        toolsForSale = toolsForSale.filter(t => t !== tool);
        renderMerchantRow(toolsForSale);
        goldText.setText(() => `Kultakolikkoja: ${Player.gold}`);
        renderPlayerTools(Player.tools);  // re-render inventory
    } else {
        alert(result.message || "Osto epäonnistui.");
    }
}

function clearMerchantRow() {
    merchantVisualParts.forEach(obj => {
        board.removeObject(obj);
    });
    merchantVisualParts.length = 0;
}

function renderMerchantRow(tools) {
    merchantVisualParts.forEach(obj => {
        board.removeObject(obj);
    })
    merchantVisualParts.length = 0;
    const slotSize = 4; //icon size
    const numOfItems = tools.length;
    const centerX = 0;
    const padding = 2;      // space between icons
    const startX = centerX - (numOfItems * (slotSize) + (numOfItems - 1) * padding) / 2;       // leftmost X in board coords
    const yTop = 1;

    tools.forEach((tool, index) => {
        const lowerLeftX = startX + index * (slotSize + padding);
        const lowerLeftY = yTop - slotSize;

        merchantVisualParts.push(board.create('text', [
            lowerLeftX + slotSize / 2,
            lowerLeftY + 7.5,
            `${tool.name}`
        ], {
            anchorX: 'middle',
            fixed: true,
            fontSize: 16,
            cssStyle: `white-space: pre-wrap; text-align: center; `
        }));
        merchantVisualParts.push(board.create('text', [
            lowerLeftX + slotSize / 2,
            lowerLeftY + 5.75,
            `${tool.description}`
        ], {
            anchorX: 'middle',
            fixed: true,
            fontSize: 14,
            cssStyle: `text-align: center;`
        }));
        merchantVisualParts.push(board.create('image', [
            tool.iconPath,
            [lowerLeftX, lowerLeftY],
            [slotSize, slotSize]
        ], {
            fixed: true,
            highlight: false
        }));

        merchantVisualParts.push(board.create('text', [
            lowerLeftX + slotSize / 2,
            lowerLeftY - 0.5,
            `${tool.cost} kolikkoa`
        ], {
            anchorX: 'middle',
            fixed: true,
            fontSize: 14
        }));

        merchantVisualParts.push(board.create('button', [lowerLeftX + slotSize / 2, lowerLeftY - 1.5, 'Osta', () => buy(tool)], {
            anchorX: 'middle',
            fontSize: fontSize - 2,
            fixed: true,
            cssStyle: `background-color: rgba(182, 226, 143, 0.8); padding: 4px; border-radius: 4px;`
        }));
    });
}

function renderPlayerTools(tools) {
    toolRowVisualParts.forEach(obj => {
        board.removeObject(obj);
    });
    toolRowVisualParts.length = 0;

    const slotSize = 2; // icon size
    const startX = -14;
    const padding = 1;
    const startY = 6;

    tools.forEach((tool, index) => {
        const lowerLeftY = startY - index * (slotSize + padding);
        const lowerLeftX = startX;

        toolRowVisualParts.push(board.create('polygon', [
            [lowerLeftX, lowerLeftY + slotSize],
            [lowerLeftX + slotSize, lowerLeftY + slotSize],
            [lowerLeftX + slotSize, lowerLeftY],
            [lowerLeftX, lowerLeftY]
        ], {
            vertices: { visible: false },
            layer: 1,
            highlight: false,
            fillColor: tool.isNegative ? '#f0b2b2' : 'lightblue',
            borders: { strokeColor: tool.isNegative ? '#a82929ff' : '#3e77ccff' }
        }));

        const tooltipHeight = tool.isTallTooltip ? 3 : 2.25;
        const tooltipWidth = 4.75;

        const tooltipImg = board.create('image', [
            tool.textImgPath,
            [lowerLeftX + slotSize + 0.25, lowerLeftY + slotSize / 2 - tooltipHeight / 2],
            [tooltipWidth, tooltipHeight]
        ], {
            visible: false,
            fixed: true,
            highlight: false,
            layer: 99, // still doesn't render on top because the enemy texts are html rendered.... ignoring this for now
        });

        const img = board.create('image', [
            tool.iconPath,
            [lowerLeftX, lowerLeftY],
            [slotSize, slotSize]
        ], {
            fixed: true,
            highlight: false,
            layer: 5
        });

        // hover 
        img.on('over', () => {
            tooltipImg.setAttribute({ visible: true });
        });
        img.on('out', () => {
            tooltipImg.setAttribute({ visible: false });
        });

        toolRowVisualParts.push(img, tooltipImg);
    });
}


/////////SCENE HANDLING
const SceneManager = {
    currentScene: null,
    changeScene(newScene) {
        continueBtn.setAttribute({ visible: false });
        //add some sort of flash screen or animation?
        if (this.currentScene && this.currentScene.exit) {
            this.currentScene.exit();
        }
        this.currentScene = newScene;
        this.currentScene.enter();
    }
};

const BattleScene = {
    enter() {
        fightText.setAttribute({ visible: true })
        generateTwoEnemies();
        fightText.setAttribute({ visible: true });
        renderPlayerTools(Player.tools);
    },
    exit() {
        hideFightEndMessage();
    }
};

const MerchantScene = {
    enter() {
        skipMerchantBtn.setAttribute({ visible: true })
        renderMerchantRow(toolsForSale);
    },
    exit() {
        clearMerchantRow();
        skipMerchantBtn.setAttribute({ visible: false })
    }
};

function nextScene() {
    currentStep++;
    if (currentStep % 5 != 0) {
        SceneManager.changeScene(BattleScene);
    }
    else {
        SceneManager.changeScene(MerchantScene);
    }
};


SceneManager.changeScene(BattleScene);
renderPlayerTools(Player.tools)