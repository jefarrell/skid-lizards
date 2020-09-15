
import VideoScroller from 'video-scroller';
import * as forest from './assets/forest.jpg';
import * as sd from './assets/sd.jpg';
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
    const root = document.querySelector('.heading');
    const canvas = document.getElementById('heading__canvas');
    const context = canvas.getContext('2d');
    const img = new Image();
    img.src = sd.default;
    img.onload = () => {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
        imageDistort(canvas, context, img)    
    }
}

function isVisible(el, divisor = 1.5) {
    const { top, bottom } = el.getBoundingClientRect();
    const vHeight = (window.innerHeight || document.documentElement.clientHeight);
    return (
      (top > 0 || bottom > 0) &&
      top < (vHeight / divisor)
    );
}

function observe() {
    const els = Array.from(document.getElementsByClassName('image'));
    els.forEach((el) => {
        window.addEventListener('scroll', (e) => {
            if (isVisible(el)) {
                el.classList.add('active')
            }
        })
    })
}

new VideoScroller({
    el: document.querySelector('.video'),
    invert: true,
    scrollTimeout: 1000,
});

document.addEventListener('DOMContentLoaded', () => {
    createDistort();
    observe();
});

