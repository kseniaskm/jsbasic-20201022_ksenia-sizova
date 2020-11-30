import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = null;
    this.init();
  }

  init() {
    this.elem = document.createElement("div");
    this.elem.className = "ribbon";

    const buttonLeft = document.createElement("button");
    buttonLeft.className = "ribbon__arrow ribbon__arrow_left";
    buttonLeft.innerHTML = "<img src=\"../../assets/images/icons/angle-icon.svg\" alt=\"icon\">";
    this.elem.appendChild(buttonLeft);

    const ribbon = document.createElement("nav");
    ribbon.className = "ribbon__inner";
    this.elem.appendChild(ribbon);

    const buttonRight = document.createElement("button");
    buttonRight.className = "ribbon__arrow ribbon__arrow_right";
    buttonRight.innerHTML = "<img src=\"../../assets/images/icons/angle-icon.svg\" alt=\"icon\">";
    this.elem.appendChild(buttonRight);
    buttonRight.classList.add("ribbon__arrow_visible");

    let root = this.elem;
    let selectedItem = null;

    for (let i = 0; i < this.categories.length; i++) {
      let ribbonItem = document.createElement("a");
      ribbonItem.setAttribute("href", "#");
      ribbonItem.className = "ribbon__item";
      let dataId = `${this.categories[i].id}`;
      ribbonItem.setAttribute("data-id", dataId);
      let catName = `${this.categories[i].name}`;
      ribbonItem.textContent = catName;
      ribbon.appendChild(ribbonItem);

      ribbonItem.addEventListener('click', function (event) {
        event.preventDefault();
        if (selectedItem != null) {
          selectedItem.classList.remove("ribbon__item_active");
        }
        selectedItem = ribbonItem;
        ribbonItem.classList.add("ribbon__item_active");
        let selectRibbonItem = new CustomEvent('ribbon-select', { // имя события должно быть именно 'ribbon-select'
          detail: dataId, // уникальный идентификатора категории из её объекта
          bubbles: true // это событие всплывает - это понадобится в дальнейшем
        });
        root.dispatchEvent(selectRibbonItem);
      });
    }

    buttonRight.addEventListener('click', scrollRibbonForward);
    buttonLeft.addEventListener('click', scrollRibbonBack);

    function scrollRibbonForward() {
      // alert("go ahead!");
      let scrollRight = ribbon.scrollWidth - ribbon.scrollLeft - ribbon.clientWidth;
      ribbon.scrollBy(350, 0);
      if (scrollRight < 1) {
        buttonRight.classList.remove("ribbon__arrow_visible");
      }
      buttonLeft.classList.add("ribbon__arrow_visible");
    }
    function scrollRibbonBack() {
      // alert("go back!");
      let scrollLeft = ribbon.scrollLeft;
      ribbon.scrollBy(-350, 0);
      if (scrollLeft == 0) {
        buttonLeft.classList.remove("ribbon__arrow_visible");
      }
      buttonRight.classList.add("ribbon__arrow_visible");
    }


  }
}
