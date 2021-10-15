// navBar fade animation
$(function () {
	$(window).scroll(function () {
		if ($(window).scrollTop() > 80) {
			$(".main-nav").addClass("sticky-css");
		} else {
			$(".main-nav").removeClass("sticky-css");
		}
	});
	// searching
	$("#searching").on("click", function() {
		$(".search-bar-wrapper-hide").addClass("search-bar-wrapper").removeClass("search-bar-wrapper-hide");
	});
	// close button for close searching
	$(".cls-btn").on("click", function() {
		$(".search-bar-wrapper").removeClass("search-bar-wrapper").addClass("search-bar-wrapper-hide");
	})
});

// mixitup
var containerEl = document.querySelector(".mix-container");
var mixer = mixitup(containerEl);
