
function selectPlant(i) {
    if (currPlant == i) {
        currPlant = null;
        return
    }
    currPlant = i;
}

function farmLand(i) {
    let land = data.farmLand[i]
    if (land.plant == null) {
        if (currPlant == null) return;
        land.plant = currPlant;
        land.growTime = 0;
        return;
    } 
    if (land.growTime >= plantList[i].growTime) {
        data.money += plantList[i].reward;
        data.farmLand[i].plant = null;
        data.farmLand[i].growTime = null;
    }
}

function farmUpgrade(i) {
    farmUpgradeList[i].effect();
}

// function farmUpgrade(i) {
//     let i = data.numFarmLand;
//     if (data.money < farmLandCost(i)) return;
//     data.money -= farmLandCost(i);
//     data.numFarmLand += 1; 
// }

// function farmLandCost(i) {
//     return 10 * Math.pow(10, data.numFarmLand * (data.numFarmLand + 1) / 2);
// }