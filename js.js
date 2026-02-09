const cards = document.querySelectorAll('.card-body');

cards.forEach(card => {
  const plusButton = card.querySelector('.btn-plus');
  const minusButton = card.querySelector('.btn-minus');
  const valueInput = card.querySelector('.value');

  let count = 0;
  let intervalId = null;

  const updateValue = () => {
    valueInput.value = count;
  };

  // +
  plusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
      count++;
      updateValue();
    }, 100);
  });

  // -
  minusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
      if (count > 0) {
        count--;
        updateValue();
      }
    }, 100);
  });

  // parar ao soltar
  document.addEventListener('mouseup', () => {
    clearInterval(intervalId);
  });
});
