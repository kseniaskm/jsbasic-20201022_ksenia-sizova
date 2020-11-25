import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = null;
    this.init();
  }

  init() {
    this.elem = document.createElement("div");
    this.elem.className = "carousel";

    const buttonRight = document.createElement("div");
    buttonRight.className = "carousel__arrow carousel__arrow_right";
    buttonRight.innerHTML = "<img src=\"/assets/images/icons/angle-icon.svg\" alt=\"icon\">";
    this.elem.appendChild(buttonRight);

    const buttonLeft = document.createElement("div");
    buttonLeft.className = "carousel__arrow carousel__arrow_left";
    buttonLeft.innerHTML = "<img src=\"/assets/images/icons/angle-left-icon.svg\" alt=\"icon\">";
    this.elem.appendChild(buttonLeft);

    // this.elem.innerHTML += "<div class=\"carousel__arrow carousel__arrow_right\">\n" +
    //   "      <img src=\"../../assets/images/icons/angle-icon.svg\" alt=\"icon\">\n" +
    //   "    </div>\n" +
    //   "    <div class=\"carousel__arrow carousel__arrow_left\">\n" +
    //   "      <img src=\"../../assets/images/icons/angle-left-icon.svg\" alt=\"icon\">\n" +
    //   "    </div>";

    const carousel = document.createElement("div");
    carousel.className = "carousel__inner";
    this.elem.appendChild(carousel);

    for (let i = 0; i < this.slides.length; i++) {
      let slide = document.createElement("div");
      slide.className = "carousel__slide";
      slide.setAttribute("data-id", `${this.slides[i].id}`);
      carousel.appendChild(slide);
      slide.innerHTML += `<img src="/assets/images/carousel/${this.slides[i].image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${this.slides[i].price.toFixed(2)}</span>
          <div class="carousel__title">${this.slides[i].name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>`;
    }

    document.addEventListener("DOMContentLoaded", function () {
      let images = document.querySelector('.carousel__slide');
      let pos = 1;
      let slideWidth = images.offsetWidth;

      // let buttonRight = document.querySelector('.carousel__arrow_right');
      // let buttonLeft = document.querySelector('.carousel__arrow_left');

      buttonRight.style.display = '';
      buttonRight.addEventListener('click', moveRight);
      buttonLeft.style.display = 'none';
      buttonLeft.addEventListener('click', moveLeft);

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
    });

    document.addEventListener("DOMContentLoaded", function () {
      const addButton = document.querySelector('.carousel__button');
      const productId = document.querySelector("div[data-id]");
      const rootElem = this.elem;

      addButton.addEventListener('click', function () {
        let addProduct = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
          detail: productId, // Уникальный идентификатора товара из объекта товара
          bubbles: true // это событие всплывает - это понадобится в дальнейшем
        });
        rootElem.dispatchEvent(addProduct);
      });
    });
  }
}
