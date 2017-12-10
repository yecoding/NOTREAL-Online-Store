$(document).ready(function(){
	$("#welcomeCat").animate({bottom:'0'}, "slow");

	$("#welcomeCat").hover(function(){
		$("#popbubble").show();
	},
	function(){
		$("#popbubble").hide();
	});
});