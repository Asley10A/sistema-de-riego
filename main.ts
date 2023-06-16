function EncenderRiego () {
    basic.showLeds(`
        . # # # .
        # # # # #
        . . # . .
        # . # . .
        . # # . .
        `)
    pins.servoWritePin(AnalogPin.P2, 0)
    basic.pause(3000)
    pins.servoWritePin(AnalogPin.P2, 90)
    basic.pause(3000)
    pins.analogWritePin(AnalogPin.P0, 0)
    basic.pause(5000)
}
function MedidaSensor () {
    Humedad = pins.analogReadPin(AnalogPin.P1)
    serial.writeValue("\"HumedadSuelo\"", Humedad)
}
input.onButtonPressed(Button.A, function () {
    MedidaSensor()
    basic.showNumber(Humedad)
    if (Humedad > 500) {
        EncenderRiego()
    } else {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
    }
    basic.showLeds(`
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        # # # # #
        . . # . .
        # . # . .
        . # # . .
        `)
    pins.servoWritePin(AnalogPin.P2, 0)
    basic.pause(3000)
    pins.servoWritePin(AnalogPin.P2, 90)
    basic.pause(3000)
    pins.analogWritePin(AnalogPin.P2, 0)
    basic.pause(3000)
})
let Humedad = 0
Humedad = 500
