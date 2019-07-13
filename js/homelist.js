// POPULATE HOME PAGE
let i, j, x = "";

for (i in projectList.projects) {
  if (projectList.projects[i].visible == true) {
    x += "<div class='projHover'><a href='" + projectList.projects[i].index + ".html'>" + projectList.projects[i].name;
    for (j in projectList.projects[i].tags) {
      x += "<div class='projTag'>" + " " + projectList.projects[i].tags[j] + "<img class='imageHover' src='img/" + projectList.projects[i].index + "/thumb.gif'>" + "</div></div></a>";
    }
    x += "<br>";
  }
}

$(".projList").append(x);
