// Fades out the whole page when clicking links
$('a').click(function(e) {
  e.preventDefault();
  newLocation = this.href;
  $('div').fadeOut('200', newpage);
});

function newpage() {
window.location = newLocation;
}
