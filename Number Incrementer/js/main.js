

load()
setInterval(mainLoop, 50)

function format(amount) {
    let power = Math.floor(Math.log10(amount))
    let mantissa = amount / Math.pow(10, power)
    if (power < 3) return amount.toFixed()
    return mantissa.toFixed(2) + "e" + power
}

function mainLoop() {
    var diff = (Date.now() - data.lastUpdate) / 1000
    data.lastUpdate = Date.now()
    updateGUI()
    productionLoop(diff)
    save()
}

function updateGUI() {
    document.getElementById("number").textContent = "Number: " + format(data.number)
    document.getElementById("incrementerProdution").textContent = "+" + format(data.incrementer.amount * data.incrementer.multiplier) + "/s"
    document.getElementById("incrementerAmount").textContent = "(" + data.incrementer.amount + ") "
    document.getElementById("incrementerBuy").textContent = "Buy (Cost: " + format(data.incrementer.cost) + ")"
    document.getElementById("incrementerBuyMax").textContent = "Buy Max" 
}