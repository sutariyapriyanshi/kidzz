const riddles = document.querySelectorAll('.riddle');

riddles.forEach(riddle => {
  const button = riddle.querySelector('button');
  const answer = riddle.querySelector('.answer');

  button.addEventListener('click', () => {
    answer.style.display = 'block';
  });
});