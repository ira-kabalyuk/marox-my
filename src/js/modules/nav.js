(function() {
  var nav     = $('.navigation'),
    navBtn    = $('.nav-toggle-btn'),
    hamburger = navBtn.find('.hamburger');

  navBtn.on('click', function(e) {
    $(this).toggleClass('is-active');
    nav.toggleClass('is-opened');
    hamburger.toggleClass('is-active');

    e.preventDefault();
  });
}());
