$(document).ready(function() {

	var fromLessThanToGreaterThan992 = false;

	checkWindowSize();

	function getScrollbarWidth() {
	    var outer = document.createElement("div");
	    outer.style.visibility = "hidden";
	    outer.style.width = "100px";
	    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

	    document.body.appendChild(outer);

	    var widthNoScroll = outer.offsetWidth;
	    // force scrollbars
	    outer.style.overflow = "scroll";

	    // add innerdiv
	    var inner = document.createElement("div");
	    inner.style.width = "100%";
	    outer.appendChild(inner);        

	    var widthWithScroll = inner.offsetWidth;

	    // remove divs
	    outer.parentNode.removeChild(outer);

	    return widthNoScroll - widthWithScroll;
	}

	$(window).resize(function () {
		checkWindowSize();
	});

	function checkWindowSize() {
		var windowWidth = $(window).width(), margin = 20, windowHeight = windowWidth * 0.75;
		var $demoHome = $('#banner > #demo-home'), carouselInnerHeight = $demoHome.children('.carousel-inner').height();
		var $col8 = $("#content-map .col-lg-8"), $mapouter = $col8.children('.mapouter'), $gmapCanvas = $mapouter.children(".gmap_canvas"), $iframe = $gmapCanvas.children('iframe');
		if((windowWidth + getScrollbarWidth()) < 992) {
			$iframe.attr("src","https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d120700.30477667024!2d72.78825464096407!3d19.024809448285325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3be7ce27b8aa3bdf%3A0x21434b0703218d1b!2sChhatrapati+Shivaji+Terminus%2C+Chhatrapati+Shivaji+Terminus+Area%2C+Fort%2C+Mumbai%2C+Maharashtra+400001!3m2!1d18.9398876!2d72.8354663!4m5!1s0x3be7c85099bd2947%3A0x1ecc1a60c474a8ae!2sChhatrapati+Shivaji+International+Airport%2C+Mumbai%2C+Maharashtra+400099!3m2!1d19.0895595!2d72.8656144!5e0!3m2!1sen!2sin!4v1534870958227");
			$col8.width(windowWidth - margin);
			$col8.height(windowHeight);
			$mapouter.width(windowWidth - margin);
			$mapouter.height(windowHeight);
			$gmapCanvas.width(windowWidth - margin);
			$gmapCanvas.height(windowHeight);
			$iframe.width(windowWidth - margin);
			$iframe.height(windowHeight);

			$demoHome.height(carouselInnerHeight);
			$demoHome.children('.carousel-control-prev').height(carouselInnerHeight);
			$demoHome.children('.carousel-control-next').height(carouselInnerHeight);
			fromLessThanToGreaterThan992 = true;
		}
		else {
			$col8.width("");
			$col8.height("");
			$mapouter.width("");
			$mapouter.height("");
			$gmapCanvas.width("");
			$gmapCanvas.height("");

			if(fromLessThanToGreaterThan992) {
				$iframe.attr("src","https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d120700.30477667024!2d72.78825464096407!3d19.024809448285325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3be7ce27b8aa3bdf%3A0x21434b0703218d1b!2sChhatrapati+Shivaji+Terminus%2C+Chhatrapati+Shivaji+Terminus+Area%2C+Fort%2C+Mumbai%2C+Maharashtra+400001!3m2!1d18.9398876!2d72.8354663!4m5!1s0x3be7c85099bd2947%3A0x1ecc1a60c474a8ae!2sChhatrapati+Shivaji+International+Airport%2C+Mumbai%2C+Maharashtra+400099!3m2!1d19.0895595!2d72.8656144!5e0!3m2!1sen!2sin!4v1534870958227");
				fromLessThanToGreaterThan992 = false;
			}
			$iframe.width("");
			$iframe.height("");

			$demoHome.height("");
			$demoHome.children('.carousel-control-prev').height("");
			$demoHome.children('.carousel-control-next').height("");
		}
	}

});