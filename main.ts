let Currenttemperature = input.temperature()
let Max = Currenttemperature
let Min = Currenttemperature
basic.forever(function () {
    basic.showString(".")
    Currenttemperature = input.temperature()
    if (Currenttemperature == Min) {
        Min = Currenttemperature
    }
    if (Currenttemperature == Max) {
        Max = Currenttemperature
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
})
