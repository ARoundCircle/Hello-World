function hitPlayer() {
    let damage = enemyStats.atk - playerStats.def
    if (damage > 0 ){
        playerStats.currenthp -= damage
    }
    if (playerStats.currenthp <= 0) {
        endFight()
    }
}

function hitEnemy() {
    let damage = playerStats.atk - enemyStats.def
    if (damage > 0 ){
        enemyStats.currenthp -= damage
    }
    if (enemyStats.currenthp <= 0) {
        endFight()
        playerStats.money += e.rewards.money
        playerStats.xp += e.rewards.xp
    }
}

function startBattle() {
    playerStats.currenthp = playerStats.maxhp
    enemyStats.currenthp = enemyStats.maxhp
    inFight = true
}

function fightTime() {
    return lastUpdate - fightStart 
}

function endFight() {
    clearInterval(hitPlayerInterval)
    clearInterval(hitEnemyInterval)
    inFight = false
}

function fightEnemy(i) {
    if (inFight) endFight()
    startBattle()
    e = enemy[i-1]
    fightStart = lastUpdate
    enemyStats = e.stats
    hitPlayerInterval = setInterval(hitPlayer, 1000/enemyStats.agi)
    hitEnemyInterval = setInterval(hitEnemy, 1000/playerStats.agi)
}