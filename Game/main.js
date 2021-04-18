var cash = 10
var generators = []
var lastUpdate = Date.now()
var cost_increment = 1.2
var mult_increment = 1.1
data = {
    cash: cash,
    generators: generators
}
for (let i=0; i<10; i++) {
    let generator = {
        cost: Math.pow(Math.pow(10, i), i) * 10,
        bought: 0,
        amount: 0,
        mult: 1
    }
    generators.push(generator)
}

function format(amount) {
    let power = Math.floor(Math.log10(amount))
    let mantissa = amount / Math.pow(10, power)
    if (power < 3) return amount.toFixed()
    return mantissa.toFixed(2) + "e" + power
}

function formatCash(amount) {
    let power = Math.floor(Math.log10(amount))
    let mantissa = amount / Math.pow(10, power)
    if (power < 3) return amount.toFixed(2)
    return mantissa.toFixed(2) + "e" + power
}

function buyGenerator(i) {
    let g = generators[i - 1]
    if (g.cost > cash) return
    cash -= g.cost
    g.amount += 1
    g.bought += 1
    g.mult *= mult_increment
    g.cost *= cost_increment
}

function updateGUI() {
    document.getElementById("cash").textContent = "Cash: " + formatCash(cash)
    for (let i=0; i<10; i++) {
        let g = generators[i]
        document.getElementById("gen" + (i + 1)).innerHTML = "Generator " + (i + 1) + "<br>Amount: " + format(g.amount) + "<br>Bought: " + g.bought + "<br>Multiplier: " + format(g.mult) + "<br>Cost: " + formatCash(g.cost)
        if (g.cost > cash) document.getElementById("gen" + (i + 1)).classList.add("locked")
        else document.getElementById("gen" + (i + 1)).classList.remove("locked")
        if (g.cost > cash && g.bought == 0) document.getElementById("gen" + (i + 1)).classList.add("hidden")
        else document.getElementById("gen" + (i + 1)).classList.remove("hidden")
    }
}


function save() {
    data = {
        cash: cash,
        generators: generators
    }
    str = JSON.stringify(data)
    localStorage.setItem("saveData", str)
}

function load(){
    str = localStorage.getItem("saveData")
    data = JSON.parse(str)
    cash = data.cash
    for (let i=0; i<10; i++) {
        generators[i] = data.generators[i]
    }
}

function productionLoop(diff) {
    cash += generators[0].amount * generators[0].mult * diff
    for (let i=1; i<10; i++) {
        generators[i - 1].amount += generators[i].amount * generators[i].mult * diff
    }
}

function mainLoop() {
    var diff = (Date.now() - lastUpdate) / 1000
    productionLoop(diff)
    updateGUI()
    lastUpdate = Date.now()
    save()
}

setInterval(mainLoop, 50)