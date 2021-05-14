
function format(number) {
    let power = Math.floor(Math.log10(number))
    let mantissa = number / Math.pow(10, power)
    if (power < 3) return number.toFixed()
    return mantissa.toFixed(2) + "e" + power
}