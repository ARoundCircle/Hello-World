
function updateGUI() {
    let diff = (Date.now() - lastUpdate) / 1000;
    lastUpdate = Date.now();
    if (currScreen == "farm") updateFarm(diff);    
    updateCurrency();
    
}

function updateFarm(diff) {
    updatePlants();
    updateFarmUpgrade();
    updateFarmLand(diff);
    // updatePlantGrowth(diff);
}

function updatePlants() {
    for (let i=0; i<plantList.length; i++) {
        document.getElementById(`plant${i}`).innerHTML = `${plantList[i].name}<br>Cost:${format(plantList[i].cost)}<br>Reward:${format(plantList[i].reward)}<br>Growth Time:${plantList[i].growTime}`;
        if (i >= data.plantsAvailable) {
            document.getElementById(`plant${i}`).style.display = "none";
        } else {
            document.getElementById(`plant${i}`).style.display = "inline-block";
        }
        if (i == currPlant) {
            document.getElementById(`plant${i}`).style.backgroundColor = "rgb(30, 255, 0)";
        } else {
            document.getElementById(`plant${i}`).style.backgroundColor = "white";
        }
    }
}

function updateCurrSelect() {
    for (let i=0; i<data.plantsAvailable; i++) {
        document.getElementById(`plant${i}`).style.display = "inline-block";
    }
}

function updateFarmLand(diff) {
    for (let i=0; i<data.farmLand.length; i++) {
        let x = data.farmLand[i];
        if (i < data.numFarmLand) {
            document.getElementById(`farmLand${i}`).style.display = "inline-block";
            if (x.plant == null) {
                document.getElementById(`farmLand${i}`).style.backgroundImage = "none";
                document.getElementById(`landGrowth${i}`).style.display = "none";
            } else {
                data.farmLand[i].growTime += diff;
                document.getElementById(`farmLand${i}`).style.backgroundImage = `url(${plantList[x.plant].image})`;
                document.getElementById(`landGrowth${i}`).style.display = "initial";
                document.getElementById(`landGrowth${i}`).value = data.farmLand[i].growTime;
                document.getElementById(`landGrowth${i}`).max = plantList[x.plant].growTime;
            }
        } else {
            document.getElementById(`farmLand${i}`).style.display = "none";
        }
        
    }
}

function updateCurrency() {
    document.getElementById("money").textContent = `Money: ${format(data.money)}`;
}

function updateFarmUpgrade() {
    for (let i=0; i<farmUpgradeList.length; i++) {
        let f = farmUpgradeList[i];
        document.getElementById(`farmUpgrade${i}`).innerHTML = `${f.name}<br>Cost:${format(f.cost())}`;
    }
}

// function updatePlantGrowth(diff) {
//     for (let i=0; i<data.farmLand.length; i++) {
//         if 
//         document.getElementById(`landGrowth${i}`).max = 100;
//         document.getElementById(`landGrowth${i}`).value = 100;
//     }
// }