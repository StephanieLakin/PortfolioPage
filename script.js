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
