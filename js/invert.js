let colourThemes = ["#F7F7FA","#1a1a1c"];
let iconThemes = ["invert(.0)","invert(.1)"];

let hasInverted = false;

let element = document.querySelector('#colourSelect');  //your logo icon
let linkHover = document.querySelector('a');  //your logo icon

element.addEventListener('click', function() {
  InvertColors();
}, false);

function InvertColors(){
  var rand = Math.floor(Math.random() * colourThemes.length);
  document.body.style.background = colourThemes[rand];
  document.body.style.transition = ".5s";
  botright.style.filter = iconThemes[rand];

  var linkArray = document.getElementsByTagName('a');
    for (var i = 0; i < linkArray.length; i++) {
        linkArray[i].style.color = textThemes[rand];
  }
}
