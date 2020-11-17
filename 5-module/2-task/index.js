function toggleText() {
  // ваш код...
  const button = document.querySelector('.toggle-text-button');
  const text = document.querySelector('#text');
  function hide() {
    text.hidden = !text.hidden;
  }
  button.addEventListener('click', hide);
 }
