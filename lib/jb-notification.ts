import HTML from './jb-notification.html';
import CSS from './jb-notification.scss';
import type { ElementsObject, NotificationType, SwipeGestureData } from './types.js';
import {defineColors} from 'jb-core/theme';
//

export {NotificationType};
export const notificationTypes: NotificationType[] = ["ERROR", "INFO", "SUCCESS", "WARNING"];
export class JBNotificationWebComponent extends HTMLElement {
    #state: "OPEN" | "CLOSE" = "CLOSE";
    #title = "";
    #description: string | null = null;
    #duration = 3000;
    #type: NotificationType = "INFO";
    get title() {
      return this.#title;
    }
    set title(value: string) {
      this.#title = value;
      this.elements.titleWrapper.innerText = value;
    }
    get description() {
      return this.#description;
    }
    set description(value: string | null) {
      this.#description = value;
      if (value) {
        this.elements.descWrapper.innerText = value;
      } else {
        this.elements.descWrapper.innerText = "";
      }
    }
    get type(): NotificationType {
      return this.#type;
    }
    set type(value: NotificationType) {
      if (notificationTypes.includes(value as NotificationType)) {
        this.#type = value;
        this.updateUIBaseOnType(value);
      } else {
        console.error(`type ${value} is not a valid NotificationType`);
      }

    }
    get state() {
      return this.#state;
    }
    elements!: ElementsObject;
    constructor() {
      super();
      this.initWebComponent();
      this.type = 'INFO';
    }

    initWebComponent() {
      const shadowRoot = this.attachShadow({ mode: 'open' });
      defineColors();
      const html = `<style>${CSS}</style>` + '\n' + HTML;
      const element = document.createElement('template');
      element.innerHTML = html;
      shadowRoot.appendChild(element.content.cloneNode(true));
      this.elements = {
        componentWrapper: shadowRoot.querySelector(".jb-notification-web-component")! as HTMLDivElement,
        titleWrapper: shadowRoot.querySelector(".title-wrapper")! as HTMLDivElement,
        descWrapper: shadowRoot.querySelector(".desc-wrapper")! as HTMLDivElement,
        icon: {
          infoSymbol: shadowRoot.querySelector(".info-symbol")! as SVGGElement,
          errorSymbol: shadowRoot.querySelector(".error-symbol")! as SVGGElement,
          successSymbol: shadowRoot.querySelector(".success-symbol")! as SVGGElement,
          warningSymbol: shadowRoot.querySelector(".warning-symbol")! as SVGGElement,
        }
      };
      this.initSwipe();
    }
    static get observedAttributes() {
      return ['title', 'description', 'type'];
    }
    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
      // do something when an attribute has changed
      this.onAttributeChange(name, newValue);
    }
    onAttributeChange(name: string, value: string) {
      switch (name) {
        case 'title':
          this.title = value;
          break;
        case 'description':
          this.description = value;
          break;
        case 'type':
          this.type = value as NotificationType;
      }
    }
    updateUIBaseOnType(type: NotificationType) {
      switch (type) {
        case "INFO":
          this.elements.icon.infoSymbol.classList.remove("--hidden");
          this.elements.icon.errorSymbol.classList.add("--hidden");
          this.elements.icon.warningSymbol.classList.add("--hidden");
          this.elements.icon.successSymbol.classList.add("--hidden");
          this.elements.componentWrapper.classList.add("--info");
          this.elements.componentWrapper.classList.remove("--warning");
          this.elements.componentWrapper.classList.remove("--success");
          this.elements.componentWrapper.classList.remove("--error");
          break;
        case 'ERROR':
          this.elements.icon.infoSymbol.classList.add("--hidden");
          this.elements.icon.errorSymbol.classList.remove("--hidden");
          this.elements.icon.warningSymbol.classList.add("--hidden");
          this.elements.icon.successSymbol.classList.add("--hidden");
          this.elements.componentWrapper.classList.remove("--info");
          this.elements.componentWrapper.classList.remove("--warning");
          this.elements.componentWrapper.classList.remove("--success");
          this.elements.componentWrapper.classList.add("--error");
          break;
        case "SUCCESS":
          this.elements.icon.infoSymbol.classList.add("--hidden");
          this.elements.icon.errorSymbol.classList.add("--hidden");
          this.elements.icon.warningSymbol.classList.add("--hidden");
          this.elements.icon.successSymbol.classList.remove("--hidden");
          this.elements.componentWrapper.classList.remove("--info");
          this.elements.componentWrapper.classList.remove("--warning");
          this.elements.componentWrapper.classList.add("--success");
          this.elements.componentWrapper.classList.remove("--error");
          break;
        case "WARNING":
          this.elements.icon.infoSymbol.classList.add("--hidden");
          this.elements.icon.errorSymbol.classList.add("--hidden");
          this.elements.icon.warningSymbol.classList.remove("--hidden");
          this.elements.icon.successSymbol.classList.add("--hidden");
          this.elements.componentWrapper.classList.remove("--info");
          this.elements.componentWrapper.classList.add("--warning");
          this.elements.componentWrapper.classList.remove("--success");
          this.elements.componentWrapper.classList.remove("--error");
          break;
      }
    }
    #timer: number | null = null;
    show() {
      this.#state = "OPEN";
      this.elements.componentWrapper.classList.add("--show");
      this.#animateIcon();
      this.#timer = setTimeout(() => {
        this.hide();
      }, this.#duration);
    }
    #animateIcon() {
      if (this.#type == "SUCCESS") {
        this.#playSucessAnimation();
      }
      if (this.#type == "INFO") {
        this.#playInfoAnimation();
      }
      if (this.#type == "WARNING") {
        this.#playWarningAnimation();
      }
      if (this.#type == "ERROR") {
        this.#playErrorAnimation();
      }

    }
    #playSucessAnimation() {
      const keyframes: Keyframe[] = [
        { strokeDashoffset: "16px" },
        { strokeDashoffset: "0px" },
      ];
        this.elements.icon.successSymbol.querySelector('.tik')!.animate(keyframes, { duration: 600, delay: 0, iterations: 1, easing: "cubic-bezier(0.925, 0.055, 0.595, 0.895)", composite: 'replace' });
    }
    #playInfoAnimation() {
      //play dot animation
      const dotKeyframes: Keyframe[] = [
        { d: `path("M12 12 L12 12")` },
        { d: `path("M12 6 L12 6")` },
      ];
      const iDot = this.elements.icon.infoSymbol.querySelector('.i-dot')!;
      const dotAnimationConfig: KeyframeAnimationOptions = { duration: 500, delay: 0, iterations: 1, easing: "cubic-bezier(0.175, 0.885, 0.320, 1.275)", composite: 'replace' };
      const dotAnime = iDot.animate(dotKeyframes, dotAnimationConfig);
      dotAnime.pause();

      const lineKeyframes: Keyframe[] = [
        { strokeDashoffset: "5px" },
        { strokeDashoffset: "0px" },
      ];
        this.elements.icon.infoSymbol.querySelector('.i-line')!.animate(lineKeyframes, { duration: 500, delay: 0, iterations: 1, easing: "cubic-bezier(0.925, 0.055, 0.595, 0.895)", composite: 'replace' }).addEventListener("finish", () => {
          dotAnime.play();
        });
    }
    #playWarningAnimation() {
      //play dot animation
      const dotKeyframes: Keyframe[] = [
        { d: `path("M12 13 L12 13")` },
        { d: `path("M12 17 L12 17")` },
      ];
      const iDot = this.elements.icon.warningSymbol.querySelector('.ri-dot')!;
      const dotAnimationConfig: KeyframeAnimationOptions = { duration: 500, delay: 0, iterations: 1, easing: "cubic-bezier(0.175, 0.885, 0.320, 1.275)", composite: 'replace' };
      const dotAnime = iDot.animate(dotKeyframes, dotAnimationConfig);
      dotAnime.pause();

      const lineKeyframes: Keyframe[] = [
        { strokeDashoffset: "7px" },
        { strokeDashoffset: "0px" },
      ];
        this.elements.icon.warningSymbol.querySelector('.ri-line')!.animate(lineKeyframes, { duration: 500, delay: 0, iterations: 1, easing: "cubic-bezier(0.925, 0.055, 0.595, 0.895)", composite: 'replace' }).addEventListener("finish", () => {
          dotAnime.play();
        });
    }
    #playErrorAnimation() {
      const keyframes: Keyframe[] = [
        { strokeDashoffset: "12px" },
        { strokeDashoffset: "0px" },
      ]
      const animeConfig: KeyframeAnimationOptions = { duration: 600, delay: 0, iterations: 1, easing: "cubic-bezier(0.860, 0.000, 0.070, 1.000)", composite: 'replace' };
      const anim2 = this.elements.icon.errorSymbol.querySelector('.line2')!.animate(keyframes, animeConfig);
      anim2.pause();
        this.elements.icon.errorSymbol.querySelector('.line1')!.animate(keyframes, animeConfig).addEventListener("finish", () => {
          anim2.play();
        });
    }
    hide() {
      this.#playHideAnimation().then(() => {

        this.elements.componentWrapper.classList.remove("--show");
        this.onClose();
      });

    }
    #playHideAnimation() {
      //TODO: change it to reduce width animation
      return new Promise((resolve) => {
        const keyframes: Keyframe[] = [
          { transform: "scaleY(1.0)", opacity: "1" },
          { transform: "scaleY(0.0)", opacity: "0" },
        ]
        const animeConfig: KeyframeAnimationOptions = { duration: 800, delay: 0, iterations: 1, easing: "cubic-bezier(0.390, 0.575, 0.565, 1.000)", composite: 'replace' };
        this.elements.componentWrapper.animate(keyframes, animeConfig).onfinish = (() => {
          resolve(null);
        });
      });

    }
    onClose() {
      this.#state = "CLOSE";
      if (this.#timer) {
        clearInterval(this.#timer);
      }
      this.#triggetOnCloseEvent();

    }
    #triggetOnCloseEvent() {
      const event = new CustomEvent("close", {});
      this.dispatchEvent(event);
    }
    updateDom() {
      //update dom
    }
    onTimerFinished() {
      const event = new CustomEvent("finish", {});
      this.dispatchEvent(event);
    }
    // add swipe to clean notif
    initSwipe() {
      this.elements.componentWrapper.addEventListener("touchstart", this.#onTouchStart.bind(this));
      this.elements.componentWrapper.addEventListener("touchmove", this.#onTouchMove.bind(this));
      this.elements.componentWrapper.addEventListener("touchend", this.#onTouchEnd.bind(this));
    }
    #swipeGestureData: SwipeGestureData = {
      startX: null,
      startTime: null,
      distance: null,
      endTime: null,
    }
    #onTouchStart(e: TouchEvent) {
      if (e.touches[0]?.clientX) {
        this.#swipeGestureData.startX = e.touches[0]?.clientX;
        this.#swipeGestureData.startTime = e.timeStamp;
      }
    }
    #onTouchMove(e: TouchEvent) {
      if (this.#swipeGestureData.startX) {
        const currentX = e.touches[0].clientX;
        this.elements.componentWrapper.style.transform = `translateX(${currentX - this.#swipeGestureData.startX}px)`;
      }

    }
    #onTouchEnd(e: TouchEvent) {
      let animationPromise: Promise<unknown> | null = null;
      if (this.#swipeGestureData.startX) {
        //measure move distance
        const currentX = e.changedTouches[0].clientX;
        const distance = currentX - this.#swipeGestureData.startX;
        this.#swipeGestureData.distance = distance;
        this.#swipeGestureData.endTime = e.timeStamp;
        if (Math.abs(distance) > 100) {
          //close the notification
          animationPromise = this.#swipeHide();
        } else {
          animationPromise = this.#moveBackToPos();
        }
      }
      if (animationPromise) {
        animationPromise.then(() => {
          this.#resetswipeGestureData();
        });
      } else {
        this.#resetswipeGestureData();
      }
    }
    #resetswipeGestureData() {
      this.#swipeGestureData.startX = null;
      this.#swipeGestureData.distance = null;
      this.#swipeGestureData.startTime = null;
      this.#swipeGestureData.endTime = null;
    }
    #moveBackToPos() {
      //TODO: detect move direction so when user chnage direction reset start time
      return new Promise((resolve) => {
        const dom = this.elements.componentWrapper;
        dom.style.transition = `transform 0.3s 0s ease`;
        //remove above assigned animation
        setTimeout(() => {
          dom.style.transition = '';
          resolve(null);
        }, 300);
        dom.style.transform = ``;
      });

    }
    #swipeHide() {
      return new Promise((resolve) => {
        //this is like this.hide but with different animation
        this.#playSwipeHideAnimation().then(() => {

          this.elements.componentWrapper.classList.remove("--show");
          this.onClose();
          resolve(null);
        });
      });

    }


    #playSwipeHideAnimation() {
      const timeDistance = this.#swipeGestureData.endTime! - this.#swipeGestureData.startTime!;
      return new Promise((resolve) => {

        const keyframes: Keyframe[] = [
          { transform: `translateX(${this.#swipeGestureData.distance!}px)`, opacity: "1" },
          { transform: `translateX(${this.#swipeGestureData.distance! * 2}px)`, opacity: "0" },
        ];
        const animeConfig: KeyframeAnimationOptions = { duration: timeDistance, delay: 0, iterations: 1, composite: 'replace' };
        this.elements.componentWrapper.animate(keyframes, animeConfig).onfinish = (() => {
          resolve(null);
        });
      });

    }
}
const myElementNotExists = !customElements.get('jb-notification');
if (myElementNotExists) {
  window.customElements.define('jb-notification', JBNotificationWebComponent);
}

