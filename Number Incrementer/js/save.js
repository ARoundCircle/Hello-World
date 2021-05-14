function save() {
    const str = JSON.stringify(data)
    localStorage.setItem("saveData", str)
}

function load(){
    const str = localStorage.getItem("saveData")
    if (str == null) {
        newGame()
        return
    }
    data = JSON.parse(str)
}

function newGame() {
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