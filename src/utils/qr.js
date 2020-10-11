const {barcode, qrcode} = require('pure-svg-code')
const qr = require('qr-image')

/*
codabar
code11(code 11)
code39(code 39)
code93(code 93)
code128(code 128)
ean8(ean 8)
ean13(ean 13)
std25(standard 2 of 5 - industrial 2 of 5)
int25(interleaved 2 of 5)

barHeight height of svg(
    default: 30);
width width of svg(
    default: 100);
bgColor background color css like(
    default: 'transparent');
color barcode color(
    default: '#000000');
showHRI: should show text under bar;
*/
exports.barcode = (data, width = 50, barHeight = 50, barWidth = 1) => {
    return barcode(data, 'ean13', {
        width,
        barWidth,
        barHeight
    })
}

/*
content - QR Code content, required
padding - white space padding, 4 modules by
default, 0
for no border
width - QR Code width in pixels
height - QR Code height in pixels
color - color of modules, color name or hex string, e.g.#000000
background - color of background, color name or hex string, e.g. white
ecl - error correction level: L, M, H, Q
*/
exports.qrcode = (content = '', width = 256, height = 256, color = '#000000', background = '#ffffff', padding= 4 ) => {
    return qrcode({
        content,
        padding,
        width,
        height,
        color,
        background,
        ecl: "M"
    })
}

// type = 'png' | 'svg
exports.qr_img = (data, type = 'png') => {
    return qr.image(data, {
        type
    })
}