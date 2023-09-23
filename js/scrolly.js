$(document).ready(function(){
    $.scrollify({
      section: '.scroll',
      sectionName: 'section-name',
      //standardScrollElements: 'section',
      easing: 'easeOutExpo',
      scrollSpeed: 500,
      offset: 0,
      scrollbars: true,
      setHeights: true,
      overflowScroll: true,
      updateHash: true,
      touchScroll: true,
    });
  });
