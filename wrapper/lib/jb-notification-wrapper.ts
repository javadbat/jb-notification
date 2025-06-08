import CSS from './jb-notification-wrapper.scss';
import { renderHTML } from './render';

export class JBNotificationWrapperWebComponent extends HTMLElement {

  constructor() {
    super();
    this.initWebComponent();
  }

  initWebComponent() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const html = `<style>${CSS}</style>` + '\n' + renderHTML();
    const element = document.createElement('template');
    element.innerHTML = html;
    shadowRoot.appendChild(element.content.cloneNode(true));
        
  }
  static get observedAttributes() {
    return ['x-position','y-position'];
  }
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    // do something when an attribute has changed
    this.onAttributeChange(name, newValue);
  }
  onAttributeChange(name: string, value: string) {
    switch (name) {
      case 'x-position':
        break;
      case 'y-position':
        break;
    }
  }
}
const myElementNotExists = !customElements.get('jb-notification-wrapper');
if (myElementNotExists) {
  window.customElements.define('jb-notification-wrapper', JBNotificationWrapperWebComponent);
}

