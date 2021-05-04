function updateGUI() {
    let healthP = document.getElementById("healthP")
    let healthE = document.getElementById("healthE")
    let xpBar = document.getElementById("xpBar")
    healthP.max = playerStats.maxhp
    healthP.value = playerStats.currenthp
    healthE.max = enemyStats.maxhp
    healthE.value = enemyStats.currenthp    
    xpBar.max = levelUpReq(playerStats.lv)
    xpBar.value = playerStats.xp
    document.getElementById("money").textContent = "Money: " + playerStats.money
    document.getElementById("unallocStats").textContent = "Stat Points: " + playerStats.statPts
    document.getElementById("lv").textContent = "Lv. " + playerStats.lv
    document.getElementById("name").textContent = playerStats.title
    document.getElementById("hp").textContent = "HP: " + playerStats.currenthp + "/" + playerStats.maxhp
    document.getElementById("atk").textContent = "ATK: " + playerStats.atk
    document.getElementById("def").textContent = "DEF: " + playerStats.def
    document.getElementById("agi").textContent = "AGI: " + playerStats.agi
    document.getElementById("luk").textContent = "LUK: " + playerStats.luk
    document.getElementById("xp").textContent = "XP: " + playerStats.xp + "/" + levelUpReq(playerStats.lv)
    document.getElementById("lvE").textContent = "Lv. " + enemyStats.lv
    document.getElementById("nameE").textContent = enemyStats.title
    document.getElementById("hpE").textContent = "HP: " + enemyStats.currenthp + "/" + enemyStats.maxhp
    document.getElementById("atkE").textContent = "ATK: " + enemyStats.atk
    document.getElementById("defE").textContent = "DEF: " + enemyStats.def
    document.getElementById("agiE").textContent = "AGI: " + enemyStats.agi
    document.getElementById("lukE").textContent = "LUK: " + enemyStats.luk
    levelUp()
}