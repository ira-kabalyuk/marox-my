(function($) {
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
  
  //=require 'modules/paging.js'
  (function() {
    function startCounts() {
      var options = {
        useEasing : true,
        useGrouping : true,
        separator : ',',
        decimal : '.',
      };
  
      var values = [
        {value: '10', suffix: false, duration: 4, decimals: 0},
        {value: '987', suffix: false, duration: 2, decimals: 0},
        {value: '22.87', suffix: true, duration: 2, decimals: 2}];
  
      var numberss = document.querySelectorAll('.why-we__num');
  
      [].forEach.call(numberss, function(el, i) {
        if (values[i].suffix) {
          options.suffix = '%';
        }
        var demo = new CountUp(el, 0, values[i].value, values[i].decimals, values[i].duration, options);
        demo.start();
      });
    }
  
    var controller = new ScrollMagic.Controller();
  
    new ScrollMagic.Scene({
      duration: 100,
      offset: 50,
      triggerElement: '.why-we',
      reverse: false
    })
    .on('enter', startCounts)
    .addTo(controller);
  }());
  
  (function() {
    function initGraph(el) {
      if (el === null) return;
  
      var ctx = el;
  
      var labels = [];
  
      for (var i = 0; i < 47; i++) {
        labels.push('');
      }
  
      var myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [{
            label: '',
            data: [200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400, 420, 440, 460, 480, 500, 520, 540, 560, 580, 600, 620, 640, 660, 680, 700, 720, 740, 760, 780, 800, 820, 840, 860, 880, 900, 920, 940, 960, 980, 1000  ],
            backgroundColor: [
              'rgba(40, 46, 65, 0.1)',
            ],
            borderColor: [
              'rgba(55,63,84,1)',
            ],
            borderWidth: 2,
            zeroLineColor: 'rgba(0, 0, 0, 0.13)'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: false
          },
          'elements': {
            'line': {
              'tension': 0.4
            },
            'point': {
              'radius': 0
            }
          },
          'tooltips': {
            'enabled': false
          },
          'title': {
            'display': true
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                borderDash: [3, 3],
              }
            }],
            xAxes: [{
              gridLines: {
                borderDash: [3, 3],
              }
            }]
          }
        }
      });
    }
  
    initGraph(document.getElementById('graph'));
  }());
  
  $(".element").typed({
      strings: ["Строим", "Поднимаем", "Увеличиваем", "Удваиваем", "Устраиваем", "Выравниваем", "Анализируем", "Автоматизируем"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      loopCount: null
  });
  (function() {
   var 
      formBtn    = $('.form-group__btn'), /*#btn-popup здесь пишем класс элемента, по которому нужно нажать для появления формы*/
      formPopup  = $('.form-popup'), 
      close  = $('.form-close-btn')  
      
    formBtn.on('click', function(e) {   
      formPopup.addClass('form-opened');    
      e.preventDefault();
    });
  
     close.on('click', function(e) {   
      formPopup.removeClass('form-opened');    
      e.preventDefault();
    });
  
  }());
  
  objectFitImages();
}(jQuery));

//# sourceMappingURL=main.js.map
