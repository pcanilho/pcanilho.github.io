// Constants
var DEF_OVERVIEW_IMG = $('#skill-overview-img').css("content");

$(document).ready(function() {
		// RADIO
		$('#radio-mobile-skills').click(function() {
			if($('#radio-mobile-skills').hasClass('selected-skill-div-left')){
				$('#radio-mobile-skills').removeClass('selected-skill-div-left');
				resetOverview();				
			}
			else{
				resetSelectedDiv();
				$('#radio-mobile-skills').addClass('selected-skill-div-left');
				displaySelectedDiv('#radio-mobile-skills');
				scrollToSkillOverview();
				
			}
		});
		
		// MOBILE
		$('#java-mobile-skills').click(function() {
			if($('#java-mobile-skills').hasClass('selected-skill-div-center')){
				$('#java-mobile-skills').removeClass('selected-skill-div-center');
				resetOverview();
			}
			else{
				resetSelectedDiv();
				$('#java-mobile-skills').addClass('selected-skill-div-center');
				displaySelectedDiv('#java-mobile-skills');
				scrollToSkillOverview();
			}
		});
		
		// WEB DEVELOPER
		$('#web-developer-skills').click(function() {
			if($('#web-developer-skills').hasClass('selected-skill-div-center')){
				$('#web-developer-skills').removeClass('selected-skill-div-center');
				resetOverview();
			}
			else{
				resetSelectedDiv();
				$('#web-developer-skills').addClass('selected-skill-div-center');
				displaySelectedDiv('#web-developer-skills');
				scrollToSkillOverview();
			}
		});
		
		// SQL DEVELOPER
		$('#sql-developer-skills').click(function() {
			if($('#sql-developer-skills').hasClass('selected-skill-div-right')){
				$('#sql-developer-skills').removeClass('selected-skill-div-right');
				resetOverview();
			}
			else{
				resetSelectedDiv();
				$('#sql-developer-skills').addClass('selected-skill-div-right');
				displaySelectedDiv('#sql-developer-skills');
				scrollToSkillOverview();
			}
		});
		
		// WIN - LINUX Workspace
		$('#windows-linux-skills').click(function() {
			if($('#windows-linux-skills').hasClass('selected-skill-div-left')){
				$('#windows-linux-skills').removeClass('selected-skill-div-left');
				resetOverview();
			}
			else{
				resetSelectedDiv();
				$('#windows-linux-skills').addClass('selected-skill-div-left');
				displaySelectedDiv('#windows-linux-skills');
				scrollToSkillOverview();
			}
		});
		
		// Ongoing Research
		$('#ongoing-research').click(function() {
			if($('#ongoing-research').hasClass('selected-skill-div-center')){
				$('#ongoing-research').removeClass('selected-skill-div-center');
				resetOverview();
			}
			else{
				resetSelectedDiv();
				$('#ongoing-research').addClass('selected-skill-div-center');
				displaySelectedDiv('#ongoing-research');
				scrollToSkillOverview();
			}
		});
		
		
		
	});
	

// Grow Overview
function growOverview(){
	$('.skill-overview-div').css('min-height', '25em');
}

function shrinkOverview() {
	$('.skill-overview-div').css('min-height', '10em');
}
	
// Reset selected Div state	
function resetSelectedDiv() {
	if($('.skills-general-div').hasClass('selected-skill-div-center'))
		$('.skills-general-div').removeClass('selected-skill-div-center');
	else if($('.skills-general-div').hasClass('selected-skill-div-left'))
		$('.skills-general-div').removeClass('selected-skill-div-left');
	else if($('.skills-general-div').hasClass('selected-skill-div-right'))
		$('.skills-general-div').removeClass('selected-skill-div-right');
}	

// Display selected skill on overview
function displaySelectedDiv(selectedSkill) {
	
	// IMG
	var sel_img = $(selectedSkill + ' #skill-img').css("content");
	$('.skill-overview-div #skill-overview-img').css("content", sel_img);
	
	// TXT
	var sel_txt = $(selectedSkill + ' #skill-txt').html();
	var title = sel_txt.split("<i>")[0];
	var subtitle_raw = sel_txt.split("i>")[1];
	var subtitle_filtered = subtitle_raw.substr(0, subtitle_raw.length-2);
	$('#skill-overview-txt').html("<strong>" + title + "</p><i>" + subtitle_filtered + "</i>");
	
	// Progress 
	var sel_progress = $(selectedSkill + ' #skill-progress').clone();
	$(sel_progress).attr('id', 'skills-overview-progress');
	$('#skills-overview-progress').replaceWith(sel_progress);
	removeDefaultClass();
	
	// ANIMATE PROGRESS
	$('#skills-overview-progress progress').each(function() {
		var max = $(this).val();
		$(this).val(0).animate({ value: max }, { duration: 2000, easing: 'swing' });
	});
}	

// Remove default class
function removeDefaultClass(){
	if($('#skills-overview-progress').hasClass('skills-general-left'))
		$('#skills-overview-progress').removeClass('skills-general-left');
	else if($('#skills-overview-progress').hasClass('skills-general-center'))
		$('#skills-overview-progress').removeClass('skills-general-center');
	else if($('#skills-overview-progress').hasClass('skills-general-right'))
		$('#skills-overview-progress').removeClass('skills-general-right');
}

function resetOverview(){
	
	// RESET IMG
	$('#skill-overview-img').css("content", DEF_OVERVIEW_IMG);
	
	// RESET TXT
	$('#skill-overview-txt').html("");
	
	// RESET Progress
	$('#skills-overview-progress').html("");
	
	// RESET SIZE
	shrinkOverview();
}

// Animated Scrolls
	function scrollToSkillOverview() {
		growOverview();
		$('html, body').animate({
			scrollTop: $("#skill-overview").offset().top
		}, 1000);
		
		
	}

