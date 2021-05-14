
upgrade = [
    {
        cost: 1000,
        effect: function u1() {
            data.incrementer.multiplier *= 1000
            document.getElementById("upgrade1")
        },
        description: "Increment multiplier x1000"
    },
    {
        cost: 1000000,
        effect: function u2() {
            data.incrementer.multiplier *= Math.pow(1.5, data.incrementer.bought)
        },
        description: "Increment multiplier based on incrementers bought"
    }
]