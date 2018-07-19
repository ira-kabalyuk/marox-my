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
