	// Animates the Mobile skills bar
	var isMobileSkillsVisible = false, isMobileSkillsShown = false;
	setInterval(
			function(){
				isMobileSkillsVisible = ($("#mobile-skills-progress").css("visibility") === "hidden") ? false : true;;
				if(isMobileSkillsVisible && !isMobileSkillsShown){
					$('#mobile-skills-progress progress').each(function() {
						var max = $(this).val();
						$(this).val(0).animate({ value: max }, { duration: 2000, easing: 'swing' });
					});
					$('#mobile-see-projects').css("visibility", "visible");
					isMobileSkillsShown = true;
				}else if(!isMobileSkillsVisible && isMobileSkillsShown){
					isMobileSkillsShown = false;
					$('#mobile-see-projects').css("visibility", "hidden");
				}
			}
		, 50
	);
	
	// Animates the JAVA & Android skills bar
	var isJAVASkillsVisible = false, isJAVASkillsShown = false;
	setInterval(
			function(){
				isJAVASkillsVisible = ($("#java-skills-progress").css("visibility") === "hidden") ? false : true;;
				if(isJAVASkillsVisible && !isJAVASkillsShown){
					$('#java-skills-progress progress').each(function() {
						var max = $(this).val();
						$(this).val(0).animate({ value: max }, { duration: 2000, easing: 'swing' });
					});
					$('#java-see-projects').css("visibility", "visible");
					isJAVASkillsShown = true;
				}else if(!isJAVASkillsVisible && isJAVASkillsShown){
					isJAVASkillsShown = false;
					$('#java-see-projects').css("visibility", "hidden");
				}
			}
		, 50
	);
	
