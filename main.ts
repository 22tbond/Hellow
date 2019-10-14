brick.buttonEnter.onEvent(ButtonEvent.Pressed, function () {
    brick.setStatusLight(StatusLight.Orange)
    brick.showString("Hello world", 1)
    brick.showString("Everything is awesome", 2)
})
forever(function () {

})

