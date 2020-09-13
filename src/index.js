
import * as forest from './assets/forest.jpg';
import * as wordmark from './assets/wordmark.svg';
import imageDistort from './js/imageDistort';
require('normalize.css/normalize.css');
require('./styles/index.scss');

function createHeading() {
    const root = document.querySelector('.heading');
    const mark = new Image();
    mark.className = 'heading__logo'
    mark.src = wordmark.default;
    mark.alt = 'Skid Lizards logo';
    root.appendChild(mark)
}

function createDistort() {
    const canvas = document.querySelector('.heading__canvas');
    const context = canvas.getContext('2d');
    const img = new Image();
    img.src = forest.default;
    img.onload = () => {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
        imageDistort(canvas, context, img)    
    }
}


function isVisible (ele) {
    const { top, bottom } = ele.getBoundingClientRect();
    const vHeight = (window.innerHeight || document.documentElement.clientHeight);
    return (
      (top > 0 || bottom > 0) &&
      top < (vHeight / 3)
    );
}

function observe() {
    const els = Array.from(document.getElementsByClassName('image'));
    els.forEach((el) => {
        window.addEventListener('scroll', (e) => {
            if (isVisible(el)) {
                el.classList.add('-active')
            }
        })
    })
}
document.addEventListener('DOMContentLoaded', () => {
    createDistort();
    createHeading();
    observe();
});

