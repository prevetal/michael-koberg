// js/blocks/stages.js
(function () {
    'use strict';


    $('.stages .item .label').click(function(e){
        e.preventDefault()

        $(this)
            .toggleClass('active')
            .next('.hidden')
            .slideToggle(300)
    })
})()