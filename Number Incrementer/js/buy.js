function buyIncrementer() {
    if (data.number < data.incrementer.cost) return
    data.number -= data.incrementer.cost
    data.incrementer.amount += 1
    data.incrementer.bought += 1
    data.incrementer.cost = Math.pow(2, data.incrementer.amount)
}

function buyMaxIncrementer() {
    while (data.number >= data.incrementer.cost) {
        buyIncrementer()
    }
    return
}

function buyUpgrade(x) {
    let u = upgrade[x - 1]
    if (data.number < u.cost || data.upgradesBought[x - 1]) return
    data.number -= u.cost
    data.upgradesBought[x - 1] = true
}