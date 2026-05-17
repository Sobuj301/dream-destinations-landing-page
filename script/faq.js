const buttons = document.querySelectorAll('.faq-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {

    const answer = btn.nextElementSibling;

    answer.classList.toggle('hidden');

  });
});