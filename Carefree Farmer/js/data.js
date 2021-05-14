
lastUpdate = Date.now()

currScreen = "farm";

screenList = ["farm", "battle", "prestige", "ascend", "options", "help"];

plantList = [
    {
        name: "Apple Tree",
        image: "images/farm/apple_tree.jpg",
        cost: 0,
        growTime: 10,
        reward: 1
    },
    {
        name: "Orange Tree",
        image: "images/farm/orange_tree.jpg",
        cost: 10,
        growTime: 100,
        reward: 1
    }
]

currPlant = null;

farmUpgradeList = [
    {   
        name: "Buy Farm Land",
        cost: function farmLandCost() {
            return Math.pow(10, data.numFarmLand * (data.numFarmLand + 1) / 2);
        },
        effect: function u0() {
            let c = farmUpgradeList[0].cost();
            if (data.money < c) return;
            data.money -= c;
            data.numFarmLand += 1; 
        }
    }
]