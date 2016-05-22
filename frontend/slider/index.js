
import template from './slider.jade';

import './slider.styl';

export default class Slider {
    constructor(mainElem) {
        this.mainElem = mainElem;
        this._render();
            console.log(this.mainElem);
        this.elem = this.mainElem.querySelector('.slider');
        this.thumb = this.elem.querySelector('.thumb');
        this.percent = this.elem.querySelector('.percent');

        this.mouseDown = this._mouseDown.bind(this);
        this.mouseUp = this._mouseUp.bind(this);
        this.mouseMove = this._mouseMove.bind(this);

        this.mainElem.addEventListener('mousedown', this.mouseDown);
        document.addEventListener('mouseup', this.mouseUp);

        this.thumb.addEventListener('dragstart', () => {
            return false;
        });
        

        this.thumb.addEventListener("move", (event) => {
            this.percent.innerHTML = event.detail.percent;
        }, false);


    }
    _mouseDown(event) {
        let target = event.target;

        if (!target.closest('.thumb')) return;

        let coords = this._getCoords(this.thumb);

        this.shiftX = event.pageX - coords.left;
        this.sliderCoords = this._getCoords(this.elem);

        document.addEventListener('mousemove', this.mouseMove);
    }
    _mouseMove(event) {
        let newLeft = event.pageX - this.shiftX - this.sliderCoords.left;
        let maxMoveThumb = this.elem.clientWidth - this.thumb.clientWidth;

        if (newLeft < 0) {
            newLeft = 0;
        }
        if (newLeft > maxMoveThumb) {
            newLeft = maxMoveThumb;
        }
        this.thumb.style.left = newLeft + 'px';


        this.thumb.dispatchEvent(new CustomEvent("move", {
            detail: {
                percent: this._getCoords(this.thumb).left - this._getCoords(this.elem).left
            }
        }));
    }

    _mouseUp(event) {
        document.removeEventListener('mousemove', this.mouseMove);
    }
    _getCoords(elem) {
        let box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };

    }
    _render() {
        this.mainElem.insertAdjacentHTML("afterBegin", template());
    }

}