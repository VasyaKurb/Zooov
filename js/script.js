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

// Слайдер
$(function(){
  	$('.burger').click(function() {
        $('.burger,.header__menu').toggleClass('menu-active');
        $('body').toggleClass('lock');
    });
});

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
		      }
		    },
		    {
		    	breakpoint: 651,
		    	settings: {
		    		slidesToShow: 2,
			        dots: true,
		    	}
		    },
		    {
		    	breakpoint: 456,
		    	settings: {
		    		slidesToShow: 1,
			        dots: true,
		    	}
		    }
		]
	});
})
