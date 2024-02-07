const faqs = document.querySelectorAll('.faq button');
const ans = document.querySelectorAll('.ans');

faqs.forEach((btn) => {
  btn.addEventListener('click', () => {
    for (let faq of faqs) {
      faq.parentElement.classList.remove('open');
      faq.querySelector('img').src = './images/icon-plus.svg';
    }
    btn.parentElement.classList.add('open');
    btn.querySelector('img').src = './images/icon-minus.svg';
  });
});
