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
