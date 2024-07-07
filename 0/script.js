// simplified example

var $window = $(window);
var $body = $('body');
var $sidebar = $('aside');

var currentScrollPosition;
var sidebarPosition;

$window.on('scroll', function() {
	currentScrollPosition = $window.scrollTop();
	sidebarPosition = $sidebar.offset().top;
	var threshold = sidebarPosition;

	if ( threshold < currentScrollPosition ) {
		$body.addClass('sticky-sidebar');
	} else {
		$body.removeClass('sticky-sidebar');
	}
	
	// THIS QUESTION ISN'T REALLY ABOUT THE JS
	// THE SIDEBAR LENGTH COMPARED TO PAGE HEIGHT ISN'T AN ISSUE
	// WE CAN EASILY ADD THAT LATER - just a proof of concept here
}).trigger('scroll');
