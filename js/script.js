// "Плюсик" для открытия ответа на вопрос
const faqControl = document.querySelectorAll('.faq__item-control');
// Блок с вопросом
const faqItem = document.querySelector('.faq__item');
// Вопрос, при нажатии на который, тоже должен откываться ответ
const faqTitle = document.querySelector('.faq__item-title');


// Функция открытия ответа на часто задаваемый вопрос

for (var i = 0; i < faqControl.length; i++) {
	faqControl[i].addEventListener('click', e => {
		e.target.parentNode.parentNode.classList.toggle('checked');
		e.target.classList.toggle('rotated');
	});
};

