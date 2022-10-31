radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 10) {
        ALARM = true
    } else {
        basic.pause(100)
        NUMBER = false
    }
    basic.pause(100)
    basic.clearScreen()
})
let NUMBER = false
let ALARM = false
radio.setGroup(1)
ALARM = false
basic.forever(function () {
    if (ALARM == false) {
        basic.showIcon(IconNames.Yes)
    } else if (input.pinIsPressed(TouchPin.P0)) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else {
    	
    }
})
