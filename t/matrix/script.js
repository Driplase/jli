// Used fonts: 
// M PLUS 1 Code | Designed by Coji Morishita
// https://fonts.google.com/specimen/M+PLUS+1+Code

const font = new FontFace('M PLUS 1 Code', 'url(MPLUS1Code-Regular.ttf)');
font.load().then(font => {
    document.fonts.add(font);

    matrix(mXcvs, {
        chars: matrix.range(0x30A1, 0x30F6).concat(matrix.range(0x0030, 0x0039).concat(matrix.range(0x0041, 0x005A))),
        font: 'M PLUS 1 Code',
        font_size: 16,
        exit: false
    }).start()
});