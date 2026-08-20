import { defineWebComponent, JBBaseComponent } from "jb-core";
import CSS from './jb-notification-wrapper.css';
import VariablesCSS from './variables.css';
import { renderHTML } from './render';

export class JBNotificationWrapperWebComponent extends JBBaseComponent {

  constructor() {
    super();
    this.initWebComponent();
  }

  initWebComponent() {
    const shadowRoot = this.attachShadow({ mode: 'open',clonable:true, serializable:true });
    const html = `<style>${VariablesCSS} ${CSS}</style>\n${renderHTML()}`;
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
defineWebComponent('jb-notification-wrapper', JBNotificationWrapperWebComponent);
