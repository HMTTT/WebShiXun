/**
 * 
 */
$(function() {
	nav();
})

function nav() {
	$(".btn-nav").click(function(e) {
		e.preventDefault();
		if ($(".btn-nav").hasClass("open")) {
			closeGNav();
		} else {
			$(".title").hide();
			$(".menu-tri").addClass("active");
			$(".btn-nav").addClass("open");
			$("#global-nav").addClass("show").removeClass("hide");
		}
	})
	
	$("#global-nav").click(function(e) {
		if ($(e.target).closest(".global-nav-wrap").length == 0) {
			closeGNav();
		}
	})
	
	$(".global-nav-inner > ul > li").hover(function(e) { 
		if ($(this).find(".global-sub-nav").length > 0) {
			$(this).find(".global-sub-nav").stop(true, true).slideDown(400);
		}
	}, function() {
		if ($(this).find(".global-sub-nav").length > 0) {
			$(this).find(".global-sub-nav").stop(true, true).slideUp(180);
		}
	})
}

function closeGNav() {
	$(".menu-tri").removeClass("active");
	//$(".sub-navi-open").removeClass("sub-navi-open");
	$(".global-sub-nav").slideUp(300);
	$(".btn-nav").removeClass("open");
	$("#global-nav").removeClass("show").addClass("hide");
	$(".title").show();
}