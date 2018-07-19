(function($) {
if(window.location.href === 'http://caramel.ua/services/kosmetologicheskie-procedury-dlya-lica-ot-holy-land.html') {
		$('.header__logo').find('a').removeAttr('href');
    }
})(jQuery);


 

	$(document).ready(function(){

	var url=document.location.href;

	 $.each($(".menu a"),function(){

	  if (this.href==url) {

	    $(this).parent().addClass('active');
        $(this).removeAttr('href');
 
	  };

	 });
 
 	 $.each($("footer-menu a"),function(){
 
 
     if (this.href==url)

     {

	    $(this).addClass('active');
        $(this).removeAttr('href');
 
	  };

	 });

	});
 

