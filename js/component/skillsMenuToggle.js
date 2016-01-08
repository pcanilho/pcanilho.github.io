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
				displayRadarChart('#radio-mobile-skills');
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
				displayRadarChart('#java-mobile-skills');
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
				displayRadarChart('#web-developer-skills');
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
				displayRadarChart('#sql-developer-skills');
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
				displayRadarChart('#windows-linux-skills');
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
				displayRadarChart('#ongoing-research');
			}
		});
		
		
		// SPAN Text Anim
		spanTextGlow();
	});
	
// Display Radar Chart
function displayRadarChart(selectedDiv){
		var progress_data = new Array();
		var tmp_axis = new Array(), tmp_value = new Array();
		
		// Get Values
		$(selectedDiv + " progress").each(function() {
				var val = $(this).val();
				tmp_value.push(val);
				
				//var title = $(this + ' #span-progress').text();
				
				//var toPush = {axis:title, value:val};
				//progress_data.push(toPush);
		});	
		
		// Get Titles
		var skipedFirst = false;
		$(selectedDiv + " span").each(function() {
			var title = $(this).text();
			//title = title.substr(0, 7) + "...";
			
			if(skipedFirst){
				tmp_axis.push(title);
			}else
				skipedFirst = true;			
		});

		var array_to_push = new Array();
		for(var i = 0; i < tmp_axis.length; i++){
			var tmp = {axis: tmp_axis[i], value: tmp_value[i]};
			array_to_push.push(tmp);
		}
		//console.log(JSON.stringify(array_to_push));
		
		 
		//Options for the Radar chart, other than default
		var mycfg = {
		  w: w,
		  h: h,
		  maxValue: 0.6,
		  levels: 4,
		  ExtraWidthX: 200
		}
		 
		 
		 progress_data.push(array_to_push);
		//Call function to draw the Radar chart
		if(array_to_push.length > 0){
			RadarChart.draw('#skill-radar-chart', progress_data, mycfg);
		}else{
			removeRadioChart();
		}
}	

// Remove SVG Radio Chart

function removeRadioChart() {
	if($('#skill-radar-chart').has('svg'))
				$('#skill-radar-chart').empty();
}

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

// Mouseover on Progress SPAN
function spanTextGlow(){
	$('.skill-progress-span').mouseover(function() {
		$('.skill-progress-span').css('color', 'red');
	});
}

// Reset Overview
function resetOverview(){
	
	// RESET IMG
	$('#skill-overview-img').css("content", DEF_OVERVIEW_IMG);
	
	// RESET TXT
	$('#skill-overview-txt').html("");
	
	// RESET Progress
	$('#skills-overview-progress').html("");
	
	// RESET SIZE
	shrinkOverview();
	
	// REMOVE SVG
	removeRadioChart();
}

// Animated Scrolls
function scrollToSkillOverview() {
	growOverview();
	$('html, body').animate({
		scrollTop: $("#skill-overview").offset().top
	}, 1000);
	
	
}

