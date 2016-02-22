jQuery(document).ready(function() {
    jQuery('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
		// Add selected status
		jQuery(this).parent('li').addClass('selected-tab').siblings().removeClass('selected-tab');
		
        // Show/Hide Tabs
		jQuery('.tabs ' + currentAttrValue).slideDown(400).siblings().slideUp(400);
 
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
		
 
        e.preventDefault();
		
		$('body').animate({scrollTop:$('.tabs #tab1').offset().top},500)
    });
});
//hideTeleng();
//var isTelengSelected = 0;
//
//
//function manageTeleng(){
//	if(isTelengSelected === 1){
//		hideTeleng();
//	}else if(isTelengSelected===0){
//		showTeleng();
//	}
//}
//
//function hideTeleng(){
//	jQuery('#project-display-container').hide();
//	isTelengSelected = 0;
//}
//
//function showTeleng(){
//	jQuery('#project-display-container').show();
//	isTelengSelected = 1;
//}