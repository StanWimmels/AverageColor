


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

    var Color = "rgb" + "(" + NewColor.toString() + ")";
    element3.style.backgroundColor = Color;
}
