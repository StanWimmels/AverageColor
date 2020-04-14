


function average() {
    var element = document.getElementById('block1')
    var style = window.getComputedStyle(element);
    var element2 = document.getElementById('block2')
    var style2 = window.getComputedStyle(element2);
    var element3 = document.getElementById('block3')
    var c1 = style.getPropertyValue('background-color');
    var c2 = style2.getPropertyValue('background-color');

    console.log(c1);
    console.log(c2);
    c1 = c1.substring(4, c1.length - 1)
        .replace(/ /g, '')
        .split(',');
    c2 = c2.substring(4, c2.length - 1)
        .replace(/ /g, '')
        .split(',');

    var r0 = parseInt(c1[0]);
    var r1 = parseInt(c1[1]);
    var r2 = parseInt(c1[2]);
    var r00 = parseInt(c2[0]);
    var r01 = parseInt(c2[1]);
    var r02 = parseInt(c2[2]);
    var red = (r0 + r00) / 2;
    var green = (r1 + r01) / 2;
    var blue = (r2 + r02) / 2;

    console.log(red);
    console.log(green);
    console.log(blue);

    var max = Math.max(red, green, blue); // 255
    console.log(max);
    var AverageColor = [
        Math.floor(red), // 0 / 255 * 255 = 0 
        Math.floor(green), // 255 / 255 * 255 = 255 
        Math.floor(blue) // 255 / 255 * 255 = 255 
    ];
    var NewColor = "rgb" + "(" + AverageColor.toString() + ")";
    console.log(NewColor);
    element3.style.backgroundColor = NewColor;
}
