
function reset() {
    if (!confirm("Resets ALL progress. Proceed?")) return
    data = {
        number: 1,
        incrementer: {
            amount: 0,
            cost: 1,
            multiplier: 1,
            bought: 0
        },
        upgradesBought: [false, false],
        lastUpdate: Date.now()
    }
}
