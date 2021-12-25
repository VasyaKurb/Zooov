// Без jquery

// "Плюсик" для открытия ответа на вопрос
const faqControl = document.querySelectorAll('.faq__item-control');
// Блок с вопросом
const faqItem = document.querySelector('.faq__item');
// Вопрос, при нажатии на который, тоже должен откываться ответ
const faqTitle = document.querySelector('.faq__item-title');


// Открытие ответа на часто задаваемый вопрос
for (var i = 0; i < faqControl.length; i++) {
	faqControl[i].addEventListener('click', e => {
		e.target.parentNode.parentNode.classList.toggle('checked');
		// Вращение крестика ппри нажатии
		e.target.classList.toggle('rotated');
	});
};

// Button for open - "Заказать"
let rtBtn1 = document.querySelector('#rt-popup-1');
let rtBtn2 = document.querySelector('#rt-popup-2');
let rtBtn3 = document.querySelector('#rt-popup-3');
let rtBtn4 = document.querySelector('#rt-popup-4');
// popups
let rtpopup1 = document.querySelector('.rations-popup-1');
let rtpopup2 = document.querySelector('.rations-popup-2');
let rtpopup3 = document.querySelector('.rations-popup-3');
let rtpopup4 = document.querySelector('.rations-popup-4');

rtBtn1.addEventListener( 'click', () => rtpopup1.classList.toggle("active") );
rtBtn2.addEventListener( 'click', () => rtpopup2.classList.toggle("active") );
rtBtn3.addEventListener( 'click', () => rtpopup3.classList.toggle("active") );
rtBtn4.addEventListener( 'click', () => rtpopup4.classList.toggle("active") );

/* -------------------------------------------------------------------- */

// JQuery
// thank-popup
$(function(){
	$('#th-open-btn').click(function() {
		$('.thank-popup').addClass('active');
	});

	$('#th-x, #overlay').click(function() {
		$('.thank-popup').removeClass('active');
	});
});
// -------------

// Rations-Popup
$(function() {
	$('.rt-order').click(function() {
		$('.rt-content1').addClass('notActive');
		$('.rt-content2').removeClass('notActive');
	});
	$('.rt-arrange').click(function() {
		$('.rt-content2').addClass('notActive');
		$('.rt-content3').removeClass('notActive');
	});
	$('#th-x, #overlay').click(function() {
		$('.rations-popup-1, .rations-popup-2, .rations-popup-3, .rations-popup-4').removeClass('active');
		$('.rt-content1').removeClass('notActive');
		$('.rt-content2, .rt-content3').addClass('notActive');
	});
});
// -------------

// calculate-popup
$(function() {
	// Open
	$('#calculate__btn').click(function() {
		$('.modal-calculate').addClass('active');
	});
	// Close
	$('.calc-x, #overlay').click(function() {
		$('.modal-calculate').removeClass('active');
	});
	// open next popup
	$('#calc-btn').click(function() {
		$('.modal-calculate').removeClass('active');
		$('.thank-popup').addClass('active');
	});
});
// ---------------

// burger
$(function(){
  	$('.burger').click(function() {
        $('.burger,.header__menu').toggleClass('menu-active');
        $('body').toggleClass('lock');
    });
});
// ---------

// sticky-header
$(window).on("scroll", function() {
    if ($(window).scrollTop() > 50) $('.header').addClass('scrolled');
        else $('.header').removeClass('scrolled');
});
//--------------

// Sliders
$(function(){
  	$('.product__slider_wrap').slick({
  		infinite: true,
  		dots: false,
  		arrows: false,
  		slidesToShow: 2,
  		responsive: [
		    {
		      breakpoint: 769,
		      settings: {
		        slidesToShow: 1,
		        dots: true,
		      }
		    }
		]
  	});
});

$(function() {
	$('.rations__items').slick({
		arrows: false,
		infinite: false,
		dots: false,
		slidesToShow: 4,
		responsive: [
		    {
		      breakpoint: 769,
		      settings: {
		        slidesToShow: 3,
		        dots: true,
		        settings: "unslick"
		      }
		    },
		    {
		    	breakpoint: 651,
		    	settings: {
		    		slidesToShow: 2,
			        dots: true,
			        settings: "unslick"
		    	}
		    },
		    {
		    	breakpoint: 456,
		    	settings: {
		    		slidesToShow: 1,
			        dots: true,
			        settings: "unslick"
		    	}
		    }
		]
	});
})
// -------------
