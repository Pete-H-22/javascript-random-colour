function RandomValue(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
};

var RandomR = RandomValue(0,255);
var RandomG = RandomValue(0,255);
var RandomB = RandomValue(0,255);

document.write('<div id="random-colour-block" style="background-color:rgb(' + RandomR + ',' + RandomG + ',' + RandomB + ');">');

