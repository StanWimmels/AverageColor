


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

    var r1 = parseInt(c1[0]);
    var g1 = parseInt(c1[1]);
    var b1 = parseInt(c1[2]);
    var r2 = parseInt(c2[0]);
    var g2 = parseInt(c2[1]);
    var b2 = parseInt(c2[2]);

    var NewColor = [
        Math.sqrt(r1 * r2),
        Math.sqrt(g1 * g2),
        Math.sqrt(b1 * b2)
    ]
    console.log(NewColor);


    /*var max = Math.max(red, green, blue); // 255
    console.log(max);
    var AverageColor = [
        Math.floor(red), // 0 / 255 * 255 = 0 
        Math.floor(green), // 255 / 255 * 255 = 255 
        Math.floor(blue) // 255 / 255 * 255 = 255 
    ];*/
    var Color = "rgb" + "(" + NewColor.toString() + ")";
    element3.style.backgroundColor = Color;
}
/*
var NewColor = [
    Math.sqrt(Math.pow(r1, 2) + Math.pow(r2, 2) / 2),
    Math.sqrt(Math.pow(g1, 2) + Math.pow(g2, 2) / 2),
    Math.sqrt(Math.pow(b1, 2) + Math.pow(b2, 2) / 2)
]*/