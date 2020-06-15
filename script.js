$(function () {
  $('#mdb-lightbox-ui').load('mdb-addons/mdb-lightbox-ui.html');
});

// Adding animations to the sections
$('section').addClass('wow fadeIn');
// Animations Init
new WOW().init();

// Adding animations to the buttons
Waves.attach('.btn', ['waves-effect']);

// trying to eliminate scrollbars
$.each($('*'), function () {
  if ($(this).width() > $('body').width()) {
    console.log('Wide Element: ', $(this), 'Width: ', $(this).width());
  }
});

// MDB Lightbox Init
// $(function () {
//   $('#mdb-lightbox-ui').load('mdb-addons/mdb-lightbox-ui.html');
// });

// Gallery

$(document).on('click', '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
