import { GLOBAL_CONSTANTS } from './constants.js';

/** Class representing an intersection observer for elements **/
export default class ElementsInView {
  /**
   * @desc Set up Intersection Observer, run init
   * @param {string} selector - String of class name of elements to observe
   *
   */
  constructor(selector, activeSelector = GLOBAL_CONSTANTS.CLASSES.ACTIVE) {
    this.allEntries = Array.from(document.getElementsByClassName(selector));
    this.activeSelector = activeSelector;
    this.options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    this.assumeInView = this.assumeInView.bind(this);
    this.handleIntersect = this.handleIntersect.bind(this);
    this.init();
  }

  /**
   * @desc Create new Observer, observe all entries
   */
  init() {
    if (!('IntersectionObserver' in window)) {
      this.assumeInView(this.allEntries);
    } else {
      const observer = new IntersectionObserver(this.handleIntersect, this.options);
      this.allEntries.forEach((entry) => {
          observer.observe(entry)
        });
    }
  }

  /**
   * @desc Assume the element is in view if Intersection Observer isn't there
   * @param {Array<Image>} entries - Array of all entries that are being observed
   */
  assumeInView(entries) {
    entries.forEach((entry) => {
      entry.target.classList.add(this.activeSelector);
    });
  }

  /**
   * @desc Handle when entries is intersecting with viewport
   * @param {Array<IntersectionObserverEntry>} entries - Array of all entries that are being observed
   * @param {object} observer - The Intersection Observer object
   */
  handleIntersect(entries, observer, intersectingCallback) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains(this.activeSelector)) {
          entry.target.classList.remove(this.activeSelector)
        } else {
          entry.target.classList.add(this.activeSelector);
        }
        if (intersectingCallback) {
          intersectingCallback();
        }
      }
    });
  }
}
