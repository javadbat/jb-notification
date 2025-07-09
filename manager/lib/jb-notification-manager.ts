import 'jb-notification';
import 'jb-notification/wrapper';
// eslint-disable-next-line no-duplicate-imports
import { JBNotificationWrapperWebComponent } from 'jb-notification/wrapper';
// eslint-disable-next-line no-duplicate-imports
import { type JBNotificationWebComponent, type NotificationType } from 'jb-notification';
// new messaging system
export class NotificationManager {
  #wrapperDom: JBNotificationWrapperWebComponent;
  get wrapperDom() {
    return this.#wrapperDom;
  }
  constructor() {
    this.#initWrapperDom();
  }
  #initWrapperDom() {
    const notificationWrapper = document.createElement('jb-notification-wrapper') as JBNotificationWrapperWebComponent;
    document.body.appendChild(notificationWrapper);
    this.#wrapperDom = notificationWrapper;
  }
  #createMessageDom(params: NewNotificationProps) {
    const { title, type, desc } = params;
    const notificationDom = document.createElement('jb-notification') as JBNotificationWebComponent;
    notificationDom.title = title;
    if (type) { notificationDom.type = type };
    if (desc) { notificationDom.description = desc };
    notificationDom.addEventListener("close", this.onNotificationClose.bind(this));
    return notificationDom;
  }
  new(params: NewNotificationProps) {
    const { title, type, desc } = params;
    const dom = this.#createMessageDom({ title, type, desc });
    //TODO: change it to new web component wrapper with managerial ability
    this.wrapperDom?.appendChild(dom);
    dom.show();
  }
  onNotificationClose(e:Event) {
    this.wrapperDom.removeChild((e as any).target);
  }
}

export type NewNotificationProps = {
  title: string,
  type?: NotificationType,
  desc?: string
}
