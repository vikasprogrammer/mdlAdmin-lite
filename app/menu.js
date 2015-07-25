/* Functions related to side menu */

function initSideMenu () {

	// $('nav-item > sub-nav').parent().children('a').addClass('float-left')
	// $('nav-item > sub-nav').parent().children('a').after('<span class="right-arrow-menu"><i class="mdl-color-text--blue-grey-400 material-icons">keyboard_arrow_right</i></span>');

	$('nav-item > a').click(function(e) {
		//reset
		$('nav-item').removeClass('active');
		$('sub-nav').removeClass('show');
		$('sub-nav-item').removeClass('active');

		// console.log($(e.target).attr('href'));
		if($(e.target).attr('href') != undefined)
			$(e.target).parent().addClass('active');

		//handle submenu
		var siblings = $(e.target).siblings('sub-nav');

		if(siblings.length) {
			var subnav = siblings[0];
			$('sub-nav').not(subnav).removeClass('show');
			$(subnav).toggleClass('show');
		}
	})


	$('sub-nav-item').click(function(e){
		//reset
		$('sub-nav-item').removeClass('active');


		$(e.target).addClass('active');
	})
}