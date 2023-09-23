// TOP LEFT
var topleft = document.createElement("a");
var linkText = document.createTextNode("VALERIE BOURDON");
topleft.appendChild(linkText);
topleft.style.display = "block";
topleft.style.position = "fixed";
topleft.style.textAlign = "left";
topleft.style.zIndex = "100";
topleft.style.textDecoration = "none";
topleft.style.color = "#f0f0f5"
topleft.href = "index.html";

// TOP RIGHT
var topright = document.createElement("a");
var linkText2 = document.createTextNode("ABOUT");
topright.appendChild(linkText2);
topright.style.display = "block";
topright.style.position = "fixed";
topright.style.textAlign = "right";
topright.style.zIndex = "100";
topright.style.textDecoration = "none";
topright.style.color = "#f0f0f5"
topright.href = "about.html";

// BOTTOM LEFT
var botleft = document.createElement("a");
var linkText3 = document.createTextNode("WORK");
botleft.appendChild(linkText3);
botleft.style.display = "block";
botleft.style.position = "fixed";
botleft.style.textAlign = "left";
botleft.style.zIndex = "100";
botleft.style.textDecoration = "none";
botleft.style.color = "#f0f0f5"
botleft.href = "index.html";


// BOTTOM RIGHT
var botright = document.createElement("img");
botright.src = "logo.svg";
botright.style.display = "block";
botright.style.position = "fixed";
botright.style.textAlign = "right";
botright.style.height = "auto";
botright.style.zIndex = "100";
botright.style.textDecoration = "none";
botright.style.color = "#f0f0f5"
botright.class = "colourSelect";

function changeHeight(menuHeight) {
  if (menuHeight.matches) { // If media query matches
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

  } else {
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
   botright.style.width = "27px";
   botleft.style.display = "block";
   botright.style.display = "block";
  }
}

var menuHeight = window.matchMedia("(max-width: 1000px)")
changeHeight(menuHeight) // Call listener function at run time
menuHeight.addListener(changeHeight) // Attach listener function on state changes

// POPULATE
$(".menu").append(topleft);
$(".menu").append(topright);
$(".menu").append(botleft);
$(".menu").append(botright);
