export default class ImageSlider {
  #currentPosition = 0;
  #sliderNumber = 0;
  #slideWidth = 0;
  #slideLeft = 0;
  sliderWrapEl;
  sliderListEl;
  nextBtnEl;
  prevBtnEl;

  constructor() {
    this.assignElement();
    this.initSliderNumber();
    this.initSliderWidth();
    this.initSliderListWidth();
    this.addEvent();
    this.createIndicator();
    this.setIndicator();
  }

  assignElement() {
    this.sliderWrapEl = document.getElementById('slider-wrap');
    this.sliderListEl = this.sliderWrapEl.querySelector('#slider');
    this.nextBtnEl = this.sliderWrapEl.querySelector('#next');
    this.prevBtnEl = this.sliderWrapEl.querySelector('#previous');
    this.indicatorWrapEl = this.sliderWrapEl.querySelector('#indicator-wrap');
  }

  initSliderNumber() {
    this.#sliderNumber = this.sliderListEl.querySelectorAll('li').length;
  }
  initSliderWidth() {
    this.#slideWidth = this.sliderListEl.clientWidth;
  }

  initSliderListWidth() {
    this.sliderListEl.style.width = `${
      this.#sliderNumber * this.#slideWidth
    }px`;
    this.sliderListEl.style.left = this.#slideLeft;
  }

  addEvent() {
    this.nextBtnEl.addEventListener('click', this.moveToRight.bind(this));
    this.prevBtnEl.addEventListener('click', this.moveToLeft.bind(this));
  }

  moveToRight() {
    this.#currentPosition += 1;
    if (this.#currentPosition === this.#sliderNumber) {
      this.#currentPosition = 0;
    }
    this.sliderListEl.style.left = `-${
      this.#slideWidth * this.#currentPosition
    }px`;
    console.log(this.#currentPosition);
  }
  moveToLeft() {
    this.#currentPosition -= 1;
    if (this.#currentPosition === -1) {
      this.#currentPosition = this.#sliderNumber - 1;
    }
    this.sliderListEl.style.left = `-${
      this.#slideWidth * this.#currentPosition
    }px`;
    console.log(this.#currentPosition);
  }

  createIndicator() {
    const docFrag = document.createDocumentFragment();
    for (let i = 0; i < this.#sliderNumber; i++) {
      const li = document.createElement('li');
      li.dataset.index = i;
      docFrag.appendChild(li);
    }
    this.indicatorWrapEl.querySelector('ul').appendChild(docFrag);
  }

  setIndicator() {
    const li = this.indicatorWrapEl.querySelectorAll('li');
  }
}
