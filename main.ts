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
let Lightson = false
input.setSoundThreshold(SoundThreshold.Loud, 150)
