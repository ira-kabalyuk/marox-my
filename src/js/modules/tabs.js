(function() {
  function tabs(el) {
    var tabContent = el.find('.tab_content'),
      tabLi        = el.find('ul.tabs li'),
      heading      = el.find('.tab_drawer_heading');

    if (el.length === 0) return;

    tabContent.hide();
    tabContent.first().show();

    tabLi.on('click', function() {
      var activeTab = $(this).attr('rel');

      tabContent.hide();
      $('#' + activeTab).fadeIn();

      tabLi.removeClass('active');
      $(this).addClass('active');     

      $(".tab_drawer_heading").removeClass("d_active");
	    $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
    });

    heading.on('click', function() {
      var dActiveTab = $(this).attr('rel');

      tabContent.hide();
      $('#' + dActiveTab).fadeIn();

      $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");

      tabLi.removeClass('active');
      el.find('ul.tabs li[rel^="' + dActiveTab + '"]').addClass('active');
    });

    tabLi.last().addClass('tab_last');
  }

  tabs($('#tabs'));
}());
