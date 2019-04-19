//current pointer location
$(document).mousemove(function(e){
    // picture width and height is 30vw in home.css
    let pictureHeight = window.innerWidth*.3;
    //if pointer is below Y location
    if (e.clientY < window.innerHeight*.55){
      // display top left of image at cursor
      $(".imageHover").css({left:e.clientX, top:e.clientY});
    } else {
      // display bottom left of image at image
      $(".imageHover").css({left:e.clientX, top:e.clientY-pictureHeight});
    }
});
