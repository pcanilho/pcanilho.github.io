	// Closes the sidebar menu
    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
	
	
	
	// Handles MAP control
	$(document).ready(function() {
		$('#map-canvas').addClass('scrolloff');
	});
	
	
	
	var isMapDisabled = true;
	function handleMap(){
		$('#cmn-toggle-1-label').trigger('click');
		enable_disable_map();
	}
	
	function enable_disable_map() {
		if(isMapDisabled){
			$('#enable-map-button').html("Press to <b>Disable Map</b>");
			$('#map-canvas').removeClass('scrolloff');
			//$('#enable-map-button').css('background-color', '#AF3131');
			isMapDisabled = false;
		}else{
			//$('#enable-map-button').css('background-color', '#75B246');
			$('#enable-map-button').html("Press to <b>Enable Map</b>");
			$('#map-canvas').addClass('scrolloff');
			isMapDisabled = true;
		}
	}
	
	// STACK FRAME
	//$('div').stack();
	
	
	// RADIO BUTTON
	$('#projects-choice input:radio').addClass('input_hidden');
	$('#projects-choice label').click(function() {
		$(this).addClass('selected').siblings().removeClass('selected');
	});
	
	// MAP TOGGLE Button
	
	$('#cmn-toggle-1').click(function() {
		handleMap();
	});
	
	// NAVIGATE DOWN ARROW
	$('#navigate-down-skills').click(function(){
		$('html, body').animate({
		scrollTop: $("#skills").offset().top
		}, 1000);
	});
	$('#navigate-down-skills-overview').click(function(){
		$('html, body').animate({
		scrollTop: $("#skill-overview").offset().top
		}, 1000);
	});
	$('#navigate-down-career').click(function(){
		$('html, body').animate({
		scrollTop: $("#career").offset().top
		}, 1000);
	});
	$('#navigate-down-map').click(function(){
		$('html, body').animate({
		scrollTop: $("#blog").offset().top
		}, 1000);
	});
	
	
	
		