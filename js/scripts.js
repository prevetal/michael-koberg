// Mobile width
initAdaptiveViewport()

document.addEventListener('DOMContentLoaded', function() {
	// Persons slider
	const personsSliders = [],
		personsSlider = document.querySelectorAll('.persons .swiper')

	personsSlider.forEach((el, i) => {
		el.classList.add('persons_s' + i)

		let options = {
			loop: false,
			// loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: el.querySelector('.swiper-button-next'),
				prevEl: el.querySelector('.swiper-button-prev')
			},
			breakpoints: {
				0: {
					spaceBetween: getCssVar(el, '--spaceBetween-0'),
					slidesPerView: getCssVar(el, '--slidesPerView-0'),
				},
				768: {
					spaceBetween: getCssVar(el, '--spaceBetween-768'),
					slidesPerView: getCssVar(el, '--slidesPerView-768'),
				},
				1280: {
					spaceBetween: getCssVar(el, '--spaceBetween-1280'),
					slidesPerView: getCssVar(el, '--slidesPerView-1280'),
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.person')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.person')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		personsSliders.push(new Swiper('.persons_s' + i, options))
	})


	$('.person .spoler_btn').click(function(e) {
		e.preventDefault()

		const $person = $(this).closest('.person'),
			sliderEl = $person.closest('.swiper')[0]

		$(this).toggleClass('active')
		$person.find('.features').toggleClass('show')

		if (sliderEl && sliderEl.swiper) {
			const items = sliderEl.querySelectorAll('.person')

			items.forEach(el => el.style.height = 'auto')

			setHeight(items)

			sliderEl.swiper.update()
		}
	})


	// Reviews slider
	const reviewsSliders = [],
		reviewsSlider = document.querySelectorAll('.reviews .swiper')

	reviewsSlider.forEach((el, i) => {
		el.classList.add('reviews_s' + i)

		let options = {
			loop: false,
			// loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			navigation: {
				nextEl: el.querySelector('.swiper-button-next'),
				prevEl: el.querySelector('.swiper-button-prev')
			},
			breakpoints: {
				0: {
					spaceBetween: getCssVar(el, '--spaceBetween-0'),
					slidesPerView: getCssVar(el, '--slidesPerView-0'),
				},
				768: {
					spaceBetween: getCssVar(el, '--spaceBetween-768'),
					slidesPerView: getCssVar(el, '--slidesPerView-768'),
				},
				1280: {
					spaceBetween: getCssVar(el, '--spaceBetween-1280'),
					slidesPerView: getCssVar(el, '--slidesPerView-1280'),
				}
			},
			on: {
				init: swiper => setHeight(swiper.el.querySelectorAll('.review')),
				resize: swiper => {
					let items = swiper.el.querySelectorAll('.review')

					items.forEach(el => el.style.height = 'auto')

					setHeight(items)
				}
			}
		}

		reviewsSliders.push(new Swiper('.reviews_s' + i, options))
	})


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
	$('.mob_header .mob_menu_btn, .overlay').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('lock')
		$('.mob_menu, .overlay').toggleClass('show')
	})


	if (is_touch_device()) {
		// Submenu on the touch screen
		$('header .menu .item > a.sub_link').click(function (e) {
			e.preventDefault()

			const dropdown = $(this).next(),
				isOpen = dropdown.hasClass('show')

			$('header .menu .sub').removeClass('show')

			if (!isOpen) {
				dropdown.addClass('show')
			}
		})

		// Close the submenu when clicking outside it
		document.addEventListener('click', e => {
			if ($(e.target).closest('.menu').length === 0) {
				$('header .menu .sub').removeClass('show')
			}
		})
	}
})