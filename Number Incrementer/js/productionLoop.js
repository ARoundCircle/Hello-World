
function productionLoop(diff) {
    let u = data.upgradesBought
    data.incrementer.multiplier = 1
    for (let i=0; i<u.length; i++) {
        if (u[i]) upgrade[i].effect() 
        document.getElementById("upgrade" + (i + 1)).setAttribute('style', 'white-space: pre;');
        document.getElementById("upgrade" + (i + 1)).textContent = upgrade[i].description + " \r\nCost: " + format(upgrade[i].cost)
    }
    data.number += data.incrementer.amount * data.incrementer.multiplier * diff
}