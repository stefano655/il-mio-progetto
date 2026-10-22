input.onSound(DetectedSound.Loud, function () {
    Lightson = !(Lightson)
    if (Lightson) {
        basic.showLeds(`
            # . # . #
            # # # # #
            # . . . #
            # # # # #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . # .
        . # . . #
        . . . . #
        . # . . #
        . . . # .
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Square)
    basic.showString("Ciao sono Stefano")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . #
        . # . # .
        . . . # .
        . # . # .
        . . . . #
        `)
})
let Lightson = false
input.setSoundThreshold(SoundThreshold.Loud, 255)
