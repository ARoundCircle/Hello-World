
var inFight = false
var hpLvGain = 10
var atkLvGain = 1
var defLvGain = 0.5
var agiLvGain = 0.25
var lukLvGain = 0.125
var screenList = ["battle", "item", "help"]
lastUpdate = Date.now()

playerStats = {
    title: "Player",
    maxhp: 10,
    currenthp: 10,
    atk: 1,
    def: 1,
    agi: 1,
    luk: 1,
    xp: 0,
    lv: 1,
    money: 0,
    statPts: 0
}

enemyStats = {
    title: "Placeholder",
    maxhp: 10,
    currenthp: 10,
    atk: 1,
    def: 1,
    agi: 1,
    luk: 1,
    lv: 1
}

