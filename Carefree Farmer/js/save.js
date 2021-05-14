

function save() {
    str = JSON.stringify(data);
    localStorage.setItem("saveData", str);
}

function load(){
    const str = localStorage.getItem("saveData");
    if (str == null) {
        newGame();
        return;
    }
    data = JSON.parse(str);
}

function newGame() {
    data = {
        damage: 1,
        def: 1,
        xp: 0,
        plantsUnlocked: 1,
        plantsAvailable: 1,
        money: 0,
        apples: {
            amount: 0,
            lv: 0
        },
        oranges: {
            amount: 0,
            lv: 0
        },
        farmLand: [],
        numFarmLand: 1
    }

    for (let i=0; i<9; i++) {
        let farmLand = {
            plant: null,
            growTime: null
        }
        data.farmLand.push(farmLand);
    }
}

function reset() {
    if (window.confirm("This will reset ALL current progress. Proceed?")) newGame()
}
