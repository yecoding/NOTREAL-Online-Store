$(document).ready(function(){
	$("#welcomeCat").animate({bottom:'39'}, "slow");

	$("#welcomeCat").hover(function(){
		$("#popbubble").show();
	},
	function(){
		$("#popbubble").hide();
	});
});