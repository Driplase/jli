/* var canvas = document.getElementById('canvas'),
    barrel = document.getElementById('filter-image'),
    width = canvas.width,
    height = canvas.height,
    ctx = canvas.getContext('2d');

for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
        var dx = x - 128,
            dy = y - 128,
            l = Math.sqrt(dx * dx + dy * dy),
            a = l < 128 ? Math.asin(l/128) : 0,
            z = l < 128 ? 255 - Math.cos(a) * 255 : 0,
            r = l < 128 ? 128 + (dx / 128) * (z / 255) * 128 : 0,
            g = l < 128 ? 128 + (dy / 128) * (z / 255) * 128 : 0,
            o = l >= 124 ? Math.max(0, 1 - (l-124)/4) : 1;

        ctx.fillStyle = 'rgba('+Math.floor(r)+','+Math.floor(g)+',0,'+o+')';
        ctx.fillRect(x,y,1,1);
    }
}

console.log(canvas.toDataURL());
*/