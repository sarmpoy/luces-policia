let strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
basic.forever(function () {
    cuteBot.colorLight(cuteBot.RGBLights.RGB_L, 0x00ffff)
    cuteBot.colorLight(cuteBot.RGBLights.RGB_R, 0xffff00)
})
