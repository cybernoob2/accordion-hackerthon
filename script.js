const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling; // finds the answer div right after it
    answer.classList.toggle('active');

    const icon = question.querySelector('span');
    icon.textContent = answer.classList.contains('active') ? '−' : '+';

  });
});
