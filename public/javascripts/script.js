$(document).ready(function() {
	// link charge type to reveal legislation list
	$(".control li").click(function() {
		var charge = $(this).html();
		console.log(charge);
		/*$(".result").load("lists/" + charge);
		return false;*/
	});
});
