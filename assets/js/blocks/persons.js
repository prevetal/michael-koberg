// js/blocks/persons.js
(function () {
    'use strict';

    // Если по какой-то причине ядро slider-core не загрузилось, прекращаем выполнение и не спамим ошибками в консоль
    if (!window.AppSliders) {
        console.warn('[AppSliders] Core script not found. Slider "reviews" cannot be initialized.')
        return
    }

    const { qs, qsa, getCssVar, commonSlideClasses, createOrUpdateSwiper, bindEqualHeightObserver, registerInit } = window.AppSliders

    // Функция инициализации
    const initPersons = () => {
        qsa('.persons .swiper').forEach((el) => {
            createOrUpdateSwiper(el, {
                ...commonSlideClasses,
                loop: false,
                // loopAdditionalSlides: 1,
                speed: 500,
                navigation: {
                    nextEl: qs('.swiper-button-next', el),
                    prevEl: qs('.swiper-button-prev', el)
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
            })

            bindEqualHeightObserver(el, '.person')
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
    }

    // Регистрируем наш блок в системе ядра
    registerInit(initPersons)
})()