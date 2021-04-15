basic.forever(function () {
    if (input.temperature() >= 30) {
        basic.showString("on")
        basic.clearScreen()
    } else {
        basic.showString("off")
        basic.clearScreen()
    }
})
