// Mobile width
initAdaptiveViewport()

document.addEventListener('DOMContentLoaded', function() {
	// Accordion
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		let item = $(this).closest('.accordion_item'),
			accordion = $(this).closest('.accordion')

		if (item.hasClass('active')) {
			item.removeClass('active').find('.data').slideUp(300)
		} else {
			accordion.find('.accordion_item').removeClass('active')
			accordion.find('.data').slideUp(300)

			item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})


	// Mob. menu
	$('.mob_menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_menu_btn').toggleClass('active')
		$('body').toggleClass('lock')
		$('.mob_menu').toggleClass('show')
	})


	$('.mob_menu .menu a.sub_link').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active')
			.next('.sub')
			.toggleClass('show')
	})


	// Header menu
	$('.menu .item').mouseenter(function() {
		$('body').addClass('sub_menu_open')
	})

	$('.menu .item').mouseleave(function() {
		$('body').removeClass('sub_menu_open')
	})


	if (is_touch_device()) {
		// Submenu on the touch screen
		$('header .menu .item > a.sub_link').click(function (e) {
			e.preventDefault()

			const item = $(this).closest('.item'),
				isOpen = item.hasClass('open')

			$('header .menu .item').removeClass('open')

			if (!isOpen) {
				item.addClass('open')
				$('body').addClass('sub_menu_open')
			}
		})

		// Close the submenu when clicking outside it
		document.addEventListener('click', e => {
			if ($(e.target).closest('.menu').length === 0) {
				$('header .menu .item').removeClass('open')
				$('body').removeClass('sub_menu_open')
			}
		})
	}
})