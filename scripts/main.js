$(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 80) {
			$(".main-nav").addClass("sticky-css");
		} else {
			$(".main-nav").removeClass("sticky-css");
		}
    });
});
// mixitup
var containerEl = document.querySelector(".mix-container");
var mixer = mixitup(containerEl);