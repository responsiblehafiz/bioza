
(function ($) {
"use strict";



$('.tilt-animate').tilt({
	glare: true,
	maxGlare: .5
})





//Header Search
if($('.search-box-outer').length) {
	$('.search-box-outer').on('click', function() {
		$('body').addClass('search-active');
	});
	$('.close-search').on('click', function() {
		$('body').removeClass('search-active');
	});
}


// sticky
var wind = $(window);
var sticky = $("#sticky-header");
wind.on("scroll", function () {
var scroll = wind.scrollTop();
if (scroll < 100) {
	sticky.removeClass("sticky animated slideInDown");
} else {
	sticky.addClass("sticky animated slideInDown");
}
});


	



	// $(".video-popup").magnificPopup({
	// 	type: "iframe",
	// 	callbacks: {},
	// });






	
	// Mouse Follower
	const follower = document.querySelector(
		".mouse-follower .cursor-outline"
	);
	const dot = document.querySelector(".mouse-follower .cursor-dot");
	window.addEventListener("mousemove", (e) => {
		follower.animate(
			[
				{
					opacity: 1,
					left: `${e.clientX}px`,
					top: `${e.clientY}px`,
					easing: "ease-in-out",
				},
			],
			{
				duration: 3000,
				fill: "forwards",
			}
		);
		dot.animate(
			[
				{
					opacity: 1,
					left: `${e.clientX}px`,
					top: `${e.clientY}px`,
					easing: "ease-in-out",
				},
			],
			{
				duration: 1500,
				fill: "forwards",
			}
		);
	});

	// Mouse Follower Hide Function
	$("a, button").on("mouseenter mouseleave", function () {
		$(".mouse-follower").toggleClass("hide-cursor");
	});

	var terElement = $(
		"h1, h2, h3, h4, .display-one, .display-two, .display-three, .display-four, .display-five, .display-six"
	);
	$(terElement).on("mouseenter mouseleave", function () {
		$(".mouse-follower").toggleClass("highlight-cursor-head");
		$(this).toggleClass("highlight-cursor-head");
	});

	var terElement = $("p");
	$(terElement).on("mouseenter mouseleave", function () {
		$(".mouse-follower").toggleClass("highlight-cursor-para");
		$(this).toggleClass("highlight-cursor-para");
	});




	  /*===========================================
	=         Scroll To Top         =
    =============================================*/

	// button animation
	$(function() {  
		$('.btn-1, .round-btn')
		.on('mouseenter', function(e) {
				var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
				$(this).find('span').css({top:relY, left:relX})
		})
		.on('mouseout', function(e) {
				var parentOffset = $(this).offset(),
				relX = e.pageX - parentOffset.left,
				relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
		});
	});
	// button animation


	//Header Search
	if($('.search-box-outer').length) {
		$('.search-box-outer').on('click', function() {
			$('body').addClass('search-active');
		});
		$('.close-search').on('click', function() {
			$('body').removeClass('search-active');
		});
	}



	const circleRotateElm = $(".circle-rotate-text");
	if (circleRotateElm.length) {
		circleRotateElm.each(function () {
			const elm = $(this);
			const options = elm.data("circle-text");
			if (typeof options === 'string') {
				const parsedOptions = JSON.parse(options);
				elm.circleType(parsedOptions);
			} else if (typeof options === 'object') {
				elm.circleType(options);
			}
		});
	}



// about count 
let experienceYears = 1; // Start from 1
const counterElement = document.getElementById("experience-counter");

function incrementCounter() {
	if (experienceYears < 18) { // Stop at 18
		experienceYears++;
		counterElement.textContent = experienceYears + "+";
	} else {
		clearInterval(counterInterval); // Stop the interval when 18 is reached
	}
}

// Set a faster interval for quick counting
const counterInterval = setInterval(incrementCounter, 100); // Adjust speed with this value



 /* Portfolio Isotope  */
 $('.image-load').imagesLoaded(function () {

	if ($.fn.isotope) {

		var $portfolio = $('.image-load');

		$portfolio.isotope({

			itemSelector: '.grid-item',

			filter: '*',

			resizesContainer: true,

			layoutMode: 'masonry',

			transitionDuration: '0.8s'

		});
		$('.menu-filtering li').on('click', function () {

			$('.menu-filtering li').removeClass('current-menu-item');

			$(this).addClass('current-menu-item');

			var selector = $(this).attr('data-filter');

			$portfolio.isotope({

				filter: selector,

			});

		});

	};

});




//tesit list One about inner
$('.testi-list').owlCarousel({
loop: true,
autoplay: false,
autoplayTimeout: 10000,
dots: true,
nav: true,
navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
responsive: {
	0: {
		items: 1
	},
	480: {
		items: 1
	},
	600:{
		items:1
	},
	768: {
		items: 1
	},
	992: {
		items: 1
	},
	1000: {
		items: 1
	},
	1920: {
		items: 1
	}
}
}) 



$(".video-popup").magnificPopup({
	type: "iframe",
	callbacks: {},
});



    /*faqs*/
    $(document).ready(function() {
		$(".faqs-container .faq-singular:first-child").addClass("active").children(".faq-answer").slideDown();//Remove this line if you dont want the first item to be opened automatically.
		$(".faq-question").on("click", function(){
		  if( $(this).parent().hasClass("active") ){
			$(this).next().slideUp();
			$(this).parent().removeClass("active");
		  }
		  else{
			$(".faq-answer").slideUp();
			$(".faq-singular").removeClass("active");
			$(this).parent().addClass("active");
			$(this).next().slideDown();
		  }
		});
	  });

	  





	       //Brand One About inner
		   $('.brand-list').owlCarousel({
			loop: true,
			autoplay: true,
			autoplayTimeout: 10000,
			dots: false,
			nav: false,
			navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				600:{
					items:2
				},
				768: {
					items: 3
				},
				992: {
					items: 4
				},
				1000: {
					items: 5
				},
				1920: {
					items: 5
				}
			}
		}) 
	

    // counterUp
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });




	// scroll up
    if($('.prgoress_indicator path').length){
        var progressPath = document.querySelector('.prgoress_indicator path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
          var scroll = $(window).scrollTop();
          var height = $(document).height() - $(window).height();
          var progress = pathLength - (scroll * pathLength / height);
          progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).on('scroll', updateProgress);
        var offset = 250;
        var duration = 550;
        jQuery(window).on('scroll', function () {
          if (jQuery(this).scrollTop() > offset) {
            jQuery('.prgoress_indicator').addClass('active-progress');
          } else {
            jQuery('.prgoress_indicator').removeClass('active-progress');
          }
        });
        jQuery('.prgoress_indicator').on('click', function (event) {
          event.preventDefault();
          jQuery('html, body').animate({ scrollTop: 0 }, duration);
          return false;
        });
    }


	// skill bioza
	  //=====< barfiller script >====
	  $("#bar1").barfiller({
		duration: 7000,
	  });
	  $("#bar2").barfiller({
		duration: 7000,
	  });
	  $("#bar3").barfiller({
		duration: 7000,
	  });
	  $("#bar4").barfiller({
		duration: 7000,
	  });
	  $("#bar5").barfiller({
		duration: 7000,
	  });
	  $("#bar6").barfiller({
		duration: 7000,
	  });
	  $("#bar7").barfiller({
		duration: 7000,
	  });
	  $("#bar8").barfiller({
		duration: 7000,
	  });
	  
	



})(jQuery); // End jQuery



// (function($)
//  {
// "use strict";
// // Author code here
// })(jQuery);


