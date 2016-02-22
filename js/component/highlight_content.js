$(document).ready(function() {      
  var window_height = $(window).height();
  
  // CAREER TITTLE
  $(window).scroll(function() {
    var scrollMiddle = $(window).scrollTop() + (window_height/2);
    $('.career').each(function() {
      elTop = $(this).offset().top + window_height / 3;
      elBtm = elTop + $(this).height() ;
      if (elTop < scrollMiddle && elBtm > scrollMiddle) {
        $(this).css('opacity',"1");
      } else {
        $(this).css('opacity',"0.7");
      }
    });
	
  });
  
  // SKILLS CONTAINER
  $(window).scroll(function() {
    var scrollMiddle = $(window).scrollTop() + (window_height/2);
     $('.skills-row-container').each(function() {
      elTop = $(this).offset().top + window_height / 3;
      elBtm = elTop + $(this).height() ;
      if (elTop < scrollMiddle && elBtm > scrollMiddle) {
        $(this).css('opacity',"1");
      } else {
        $(this).css('opacity',"0.7");
      }
    });
  });
  
  // SKILLS OVERVIEW
   $(window).scroll(function() {
    var scrollMiddle = $(window).scrollTop() + (window_height/2);
     $('#skill-overview').each(function() {
      elTop = $(this).offset().top + window_height / 3;
      elBtm = elTop + $(this).height() ;
      if (elTop < scrollMiddle && elBtm > scrollMiddle) {
        $(this).css('opacity',"1");
      } else {
        $(this).css('opacity',"0.7");
      }
    });
  });
  
});