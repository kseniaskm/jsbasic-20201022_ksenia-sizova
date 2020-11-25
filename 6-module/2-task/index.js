import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.name = product.name;
    this.price = product.price;
    this.category = product.category;
    this.image = product.image;
    this.id = product.id;
    this.elem = null;
    this.init();
  }

  init() {
    this.elem = document.createElement("div");
    this.elem.className = "card";
    const cardTop = document.createElement("div");
    this.elem.appendChild(cardTop);
    const cardBody = document.createElement("div");
    this.elem.appendChild(cardBody);
    cardTop.className = "card__top";
    cardBody.className = "card__body";

    const img = document.createElement("img");
    cardTop.appendChild(img);
    img.setAttribute("src", `../../assets/images/products/${this.image}`);
    img.setAttribute("alt", "product");
    img.className = "card__image";
    cardTop.innerHTML += "<span class=\"card__price\">" + "€" + this.price.toFixed(2) + "</span>";

    cardBody.innerHTML = `<div class="card__title">${this.name}</div>`;
    const button = document.createElement("button");
    button.type = "button";
    button.className = "card__button";
    cardBody.appendChild(button);
    button.innerHTML = "<img src=\"../../assets/images/icons/plus-icon.svg\" alt=\"icon\">";

    let ident = this.id;
    let rootElem = this.elem;

    button.addEventListener('click', function() {
      let addProduct = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
        detail: ident, // Уникальный идентификатора товара из объекта товара
        bubbles: true // это событие всплывает - это понадобится в дальнейшем
      });
      rootElem.dispatchEvent(addProduct);
    });
  }
}
