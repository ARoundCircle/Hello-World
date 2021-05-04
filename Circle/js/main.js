function mainLoop() {
    var diff = (Date.now() - lastUpdate) / 1000
    updateGUI()
    lastUpdate = Date.now()
    // save()
}

setInterval(mainLoop, 50)
