let currentIndex; //index that is going to point to right project in the array

var path = window.location.pathname; //fetch the file path
var page = path.split("/").pop(); //remove the "/" from the path
var pageName = page.replace(".html",""); //remove the ".html" at the end of it


//go through every project in the list , if the name of the project corresponds to the page name, store that index
for (i in projectList.projects) {
  if(projectList.projects[i].index == pageName){
    currentIndex = i; // store the index
  }
}

//add the project info to the page
let name = "";
name += projectList.projects[currentIndex].name + " — " + projectList.projects[currentIndex].tags[0];
$(".projList").append(name);

//add the project info to the page
let desc = "";
desc += projectList.projects[currentIndex].desc;
$(".projDesc").append(desc);

//add the next project info to the page
let next = "";
//increments to the next project
let incrementedIndex = parseInt(currentIndex) + 1;
//if the current page index length is equal to the number of projects (projectList.projects)
if (incrementedIndex == projectList.projects.length) {
  //reloops to the first project in the object
  incrementedIndex = 0;
}

//populate page with link, project name and tag with arrow
next += "<a style='text-decoration:none;' href='" + projectList.projects[incrementedIndex].index + ".html'>" + projectList.projects[incrementedIndex].name + " →" + "</a>";
$(".nextProject").append(next);

//DEBUG
// console.log("incrementedIndex  "+incrementedIndex);
// console.log("current index: " + currentIndex);
// console.log("next index: " + nextIndex);
// console.log(projectList.projects[incrementedIndex].name);
