let currentIndex; //index that is going to point to right project in the array

var path = window.location.pathname; //fetch the file path
var page = path.split("/").pop(); //remove the "/" from the path
var pageName = page.replace(".html",""); //remove the ".html" at the end of it


//codrin
/*
I MADE AN ARRAY ONLY FOR SORTED PROJECTS THAT ARE VISIBLE.
I CREATED A JAVASCRIPT OBJECT FOR EACH
*/
let sortedVisibleProject = []; //EMPTY ARRAY

for (var i = 0; i < projectList.projects.length; i++) {
  //IF U WANT IT TO SHOW
  if(projectList.projects[i].visible == true) {
    //JAVASCRIPT OBJECT HERE
    var project = {
      index: projectList.projects[i].index,
      name: projectList.projects[i].name,
      tags: [projectList.projects[i].tags],
      desc: projectList.projects[i].desc,
      visible: projectList.projects[i].visible
    }
    sortedVisibleProject.push(project); //INCLUDES IT INTO THE NEW ARRAY
  }
}

//go through every project in the list , if the name of the project corresponds to the page name, store that index
for (i in sortedVisibleProject) {
  if(sortedVisibleProject[i].index == pageName){
    currentIndex = i; // store the index
  }
}

//add the project info to the page
let name = "";
name += sortedVisibleProject[currentIndex].name + " — " + sortedVisibleProject[currentIndex].tags[0];
$(".projList").append(name);

//add the project info to the page
let desc = "";
desc += sortedVisibleProject[currentIndex].desc;
$(".projDesc").append(desc);

//add the next project info to the page
let next = "";
let incrementedIndex;

//increments to the next visible project
if (sortedVisibleProject[i].visible == true) {
  incrementedIndex = parseInt(currentIndex) + 1;
} else {
  incrementedIndex = parseInt(currentIndex)++;
}

//if the current page index length is equal to the number of projects (sortedVisibleProject)
if (incrementedIndex == sortedVisibleProject.length) {
  //reloops to the first project in the object
  incrementedIndex = 0;
}

//populate page with link, project name and tag with arrow
next += "<a style='text-decoration:none;color:#f0f0f5' href='" + sortedVisibleProject[incrementedIndex].index + ".html'>" + sortedVisibleProject[incrementedIndex].name + " →" + "</a>";
$(".nextProject").append(next);

//DEBUG
// console.log("incrementedIndex  "+incrementedIndex);
// console.log("current index: " + currentIndex);
// console.log("next index: " + nextIndex);
// console.log(sortedVisibleProject[incrementedIndex].name);
