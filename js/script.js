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
$(function(){
  	$('.product__slider_wrap').slick({
  		infinite: true,
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
        dots: true,
		infinite: false,
		slidesToShow: 4,
		responsive: [
		    {
		      breakpoint: 769,
		      settings: {
		        slidesToShow: 3,
		      }
		    },
		    {
		    	breakpoint: 651,
		    	settings: {
		    		slidesToShow: 2,
		    	}
		    },
		    {
		    	breakpoint: 456,
		    	settings: {
		    		slidesToShow: 1,
		    	}
		    }
		]
	});
})
