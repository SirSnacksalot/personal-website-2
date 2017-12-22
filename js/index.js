/* Index.js */

const mq = window.matchMedia( "(max-width: 700px)" );

var home = true;
var about_clkd = false;
var video_clkd = false;
var resume_clkd = false;
var sound_on = true;

var nav_links = [about_clkd, video_clkd, resume_clkd];

$(document).ready(function() {

	$("#home-img").animate({'opacity': '1'}, 1500, 'easeInOutSine');
	$("#header").animate({'opacity': '1'}, 1500, 'easeInOutSine');
	$("#pre_header").animate({'opacity': '1'}, 1500, 'easeInOutSine');
	$(".social-link").animate({'opacity': '1'}, 1500, 'easeInOutSine');
	$("#sound-img").animate({'opacity': '1'}, 1500, 'easeInOutSine');

	$('#menu-arrow').click(function() {
		if ($(this).css('opacity') == 1 ) {
			if ($(this).hasClass('upside-down')) {
				$('#nav-div').slideUp(1000);
				$(this).toggleClass("upside-down");
			} else {
				$('#nav-div').slideDown(1000);
				$(this).toggleClass("upside-down");
			}
		}
	});


	var myAudio = document.getElementById("rain-audio");
	// myAudio.pause();

	var switchFocus = function(mainDiv, otherDivs) {
		otherDivs.forEach(function(divEl, i, divArray) {
			if ( $(divEl).css("display") == "block") {
				$(divEl).animate({"opacity": "0"}, 750, 'easeOutSine', function() {
					$(divEl).css("display", "none");
					$(mainDiv).css("display", "block");
					$(mainDiv).animate({"opacity": "1"}, 750, 'easeOutSine');
				});
			} 
		});
	}

	var switchFocusTable = function(mainTable, otherTables) {
		otherTables.forEach(function(tableEl, i, tableArray) {
			if ( $(tableEl).css("display") == "table") {
				$(tableEl).animate({"opacity": "0"}, 750, 'easeOutSine', function() {
					$(tableEl).css("display", "none");
					$(mainTable).css("display", "table");
					$(mainTable).animate({"opacity": "1"}, 750, 'easeOutSine');
				});
			} 
		});
	}
	

	var leaveHome = function() {
		// Check screen width
		if (mq.matches) {
			$("#name").animate({"margin-bottom": "0px"}, 1000, 'easeInOutSine');
			$('#nav-div').slideUp(1000);
			$('#menu-arrow').animate({'opacity':'1'}, 1000);
		}
		
		$("#header").animate({'padding-top': '0px'}, 1500, 'easeInOutSine');
		$("#home-img").animate({'opacity': '0'}, 1000, 'easeInOutSine');
		$("#name").css("cursor", "pointer");
		
	}	

	var fadeInFromHome = function(mainDiv) {
		$(mainDiv).css("display", "block");
		$(mainDiv).animate({"opacity": "1"}, 1500, 'easeInOutSine');
	}

	// AUDIO HANDLING

	$("#sound-img").mouseover(function() {
		if (myAudio.paused) {
			$("#sound-img").attr("src", "img/sound-off-gold.png");
		} else {
			$("#sound-img").attr("src", "img/sound-on-gold.png");
		}
	});

	$("#sound-img").mouseout(function() {
		if (myAudio.paused) {
			$("#sound-img").attr("src", "img/sound-off.png");
		} else {
			$("#sound-img").attr("src", "img/sound-on.png");
		}
	})

	$("#sound-img").click(function() {
		if (myAudio.paused) {
			myAudio.play();
			$("#sound-img").attr("src", "img/sound-on.png");
		}
		else {
			myAudio.pause();
			$("#sound-img").attr("src", "img/sound-off.png");
		}
	});

	$(".vid-div").click(function() {
		if (!(myAudio.paused)) {
			myAudio.pause();
			$("#sound-img").attr("src", "img/sound-off.png");
		}
	})

	// CONTENT NAVIGATION

	$("#about-link").click(function() {
		$(".nav-link").css("opacity", "1");
		$(this).animate({'opacity': '0.5'}, 'slow');
		
		if (home) { // No other content currently displayed
			leaveHome();
			fadeInFromHome("#about-div");
			home = false;
		} else {
			if (mq.matches) {
				$('#menu-arrow').toggleClass('upside-down');
				$('#nav-div').slideUp(1500);
			}
			switchFocus("#about-div", ["#video-div", "#resume-div"])
		}
	});

	$("#video-link").click(function() {
		$(".nav-link").css("opacity", "1");
		$(this).animate({'opacity': '0.5'}, 'slow');
		// No other content currently displayed
		if (home) {
			leaveHome();
			fadeInFromHome("#video-div");
			home = false;
		} else {
			if (mq.matches) {
				$('#menu-arrow').toggleClass('upside-down');
				$('#nav-div').slideUp(1500);
			}
			switchFocus("#video-div", ["#about-div", "#resume-div"])
		}
	});

	$("#resume-link").click(function() {
		$(".nav-link").css("opacity", "1");
		$(this).animate({'opacity': '0.5'}, 'slow');
		// No other content currently displayed
		if (home) {
			leaveHome();
			fadeInFromHome("#resume-div");
			home = false;
		} else {
			if (mq.matches) {
				$('#menu-arrow').toggleClass('upside-down');
				$('#nav-div').slideUp(1500);
			}
			switchFocus("#resume-div", ["#video-div", "#about-div"])
		}
	});


	// RETURN TO HOME

	$("#name").click(function() {
		if (home == false) {
			home = true;
			if (mq.matches) {
				$("#header").animate({'padding-top': '50%'}, 1500, 'easeInOutSine');
				$('#nav-div').slideDown(1000);
				$("#menu-arrow").animate({'opacity': 0}, 500);
				if ($("#menu-arrow").hasClass('upside-down')) {
					$('#menu-arrow').toggleClass('upside-down');
				}
			} else {
				$("#header").animate({'padding-top': '24%'}, 1500, 'easeInOutSine');
				$("#name").animate({"margin-bottom": "25px"}, 1000, 'easeInOutSine');
				$(".nav-link").animate({"margin": "0"}, 1500, 'easeInOutSine');
			}
			$(".nav-link").css("opacity", "1");
			// Bring back home image and header
			$("#home-img").animate({'opacity': '1'}, 1500, 'easeInOutSine');
			$("#name").css("cursor", "default");	
			// Fade out any content
			['#resume-div', '#about-div', '#video-div'].forEach(function(divEl) {
				$(divEl).animate({"opacity": "0"}, 1000, 'easeOutSine', function() {
					$(divEl).css("display", "none");
				});
			});
			
		}
	});


	// VIDEO NAVIGATION

	$("#films-link").click(function() {
		$(".video-nav-link").css("opacity", "1");
		$(this).animate({'opacity': '0.5'}, 'slow');
		switchFocusTable("#films-table", ["#promo-table", "#other-table"]);
	})

	$("#promo-link").click(function() {
		$(".video-nav-link").css("opacity", "1");
		$(this).animate({'opacity': '0.5'}, 'slow');
		switchFocusTable("#promo-table", ["#films-table", "#other-table"]);
	})

	$("#other-link").click(function() {
		$(".video-nav-link").css("opacity", "1");
		$(this).animate({'opacity': '0.5'}, 'slow');
		switchFocusTable("#other-table", ["#films-table", "#promo-table"]);
	})

});