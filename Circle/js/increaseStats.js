
function levelUpReq(i) {
    return i
}

function levelUp() {
    if (playerStats.xp == levelUpReq(playerStats.lv)) {
        playerStats.xp = 0
        playerStats.lv += 1
        playerStats.statPts += 1
    }
}

function levelStat(s) {
    if (playerStats.statPts == 0) return
    if (s==hp) playerStats.hp += hpLvGain
    if (s==atk) playerStats.atk += atkLvGain
    if (s==def) playerStats.def += defLvGain
    if (s==agi) playerStats.agi += agiLvGain
    if (s==luk) playerStats.luk += lukLvGain
}