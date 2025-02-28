var random1;
random1 = Math.floor(Math.random()*6+1);
var rand1img = "images/"+"dice" +random1+ ".png";
var random2;
random2 = Math.floor(Math.random()*6+1);
var rand2img = "dice" +random2+ ".png";

var img1=document.querySelector("img")[0];
img1.setAttribute("src",rand1img);

if(random1===random2)
{
    document.querySelector("h1.container").innerHTML="Tie match";
}
else if(random1>random2)
{
    document.querySelector("h1.container").innerHTML="Player 1 won";
}
else
{
    document.querySelector("h1.container").innerHTML="Player 2 won";
}