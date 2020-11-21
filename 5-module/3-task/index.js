function initCarousel() {
  // ваш код...
  let buttonRight = document.querySelector(`.carousel__arrow_right`);
  let buttonLeft = document.querySelector('.carousel__arrow_left');
  let carousel = document.querySelector('.carousel__inner');
  let images = document.querySelector('.carousel__slide');
  let pos = 1;
  let slideWidth = images.offsetWidth;

  function moveRight() {
    let move = -slideWidth * pos;
    carousel.style.transform = 'translateX(' + move + 'px)';
    pos++;
    if (pos === 4) {
      buttonRight.style.display = 'none';
    }
    buttonLeft.style.display = '';
  }

  function moveLeft() {
    let move = -slideWidth * (pos - 2);
    pos--;
    carousel.style.transform = 'translateX(' + move + 'px)';
    if (pos === 1) {
      buttonLeft.style.display = 'none';
    }
    buttonRight.style.display = '';
  }

  buttonRight.style.display = '';
  buttonRight.addEventListener('click', moveRight);
  buttonLeft.style.display = 'none';
  buttonLeft.addEventListener('click', moveLeft);
}
