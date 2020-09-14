
import * as forest from './assets/forest.jpg';
import * as wordmark from './assets/wordmark.svg';
import imageDistort from './js/imageDistort';
require('normalize.css/normalize.css');
require('./styles/index.scss');

function createDistort() {
    const root = document.querySelector('.heading');
    const canvas = document.getElementById('heading__canvas');
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
                el.classList.add('-active')
            }
        })
    })
}

function scrub(vid) {
    const duration = 1/100;
    const frameNumber  = vid.getBoundingClientRect().top;
    if (frameNumber > 0) {
        vid.currentTime = Math.abs(frameNumber)/(720/375)*duration;
    }
}

function skidScroll() {
    const canvas = document.getElementById('video__canvas');
    const context = canvas.getContext('2d');
    const vid = document.querySelector('.video'); 
    const cw = canvas.width;
    const ch = canvas.height;

    vid.addEventListener('play', () => {
        draw(this, context, cw, ch);
    }, false);

    window.addEventListener('scroll', () => scrub(vid));
}

function draw(v,c,w,h) {
    c.drawImage(v,0,0,w,h);
    setTimeout(draw,20,v,c,w,h);
}


document.addEventListener('DOMContentLoaded', () => {
    createDistort();
    skidScroll();
    observe();
});

