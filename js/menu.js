// TOP LEFT
var topleft = document.createElement("a");
var linkText = document.createTextNode("Valerie Bourdon");
topleft.appendChild(linkText);
topleft.style.display = "block";
topleft.style.position = "fixed";
topleft.style.textAlign = "left";
topleft.style.zIndex = "100";
topleft.style.textDecoration = "none";
topleft.href = "index.html";

// TOP RIGHT
var topright = document.createElement("a");
var linkText2 = document.createTextNode("About");
topright.appendChild(linkText2);
topright.style.display = "block";
topright.style.position = "fixed";
topright.style.textAlign = "right";
topright.style.zIndex = "100";
topright.style.textDecoration = "none";
topright.href = "about.html";

// BOTTOM LEFT
var botleft = document.createElement("a");
var linkText3 = document.createTextNode("Projects");
botleft.appendChild(linkText3);
botleft.style.display = "block";
botleft.style.position = "fixed";
botleft.style.textAlign = "left";
botleft.style.zIndex = "100";
botleft.style.textDecoration = "none";
botleft.href = "index.html";


// BOTTOM RIGHT
var botright = document.createElement("img");
botright.src = "/logo.svg";
botright.style.display = "block";
botright.style.position = "fixed";
botright.style.textAlign = "right";
botright.style.height = "auto";
botright.style.zIndex = "100";
botright.style.textDecoration = "none";
botright.id = "colourSelect";

function changeHeight(menuHeight) {
  if (menuHeight.matches) { // If media query matches
    // document.body.style.backgroundColor = "yellow";
    var heightAmount = "2vh";
    var widthAmount = "6vw";
    topleft.style.top = heightAmount;
    topleft.style.left = widthAmount;
    topright.style.top = heightAmount;
    topright.style.right = widthAmount;
    botright.style.bottom = heightAmount;
    botright.style.right = widthAmount;
    botright.style.width = "20px";
    botleft.style.display = "none";
    // botright.style.display = "none";

  } else {
   // document.body.style.backgroundColor = "pink";
   var heightAmount = "6vh";
   var widthAmount = "4vw";
   topleft.style.top = heightAmount;
   topleft.style.left = widthAmount;
   topright.style.top = heightAmount;
   topright.style.right = widthAmount;
   botleft.style.bottom = heightAmount;
   botleft.style.left = widthAmount;
   botright.style.bottom = heightAmount;
   botright.style.right = widthAmount;
   botright.style.width = "25px";
   botleft.style.display = "block";
   botright.style.display = "block";
  }
}

var menuHeight = window.matchMedia("(max-width: 740px)")
changeHeight(menuHeight) // Call listener function at run time
menuHeight.addListener(changeHeight) // Attach listener function on state changes

// POPULATE
$(".menu").append(topleft);
$(".menu").append(topright);
$(".menu").append(botleft);
$(".menu").append(botright);
