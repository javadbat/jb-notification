# jb-notification-wrapper

`jb-notification-wrapper` is the container web component that keeps notification items positioned and stacked.

## Usage
```html
<jb-notification-wrapper></jb-notification-wrapper>
```

```ts
const notification = document.createElement('jb-notification');
notification.title = 'Saved';
notification.type = 'SUCCESS';

document.querySelector('jb-notification-wrapper')?.appendChild(notification);
```

## CSS Variables
| CSS variable name | description |
| --- | --- |
| --jb-notification-wrapper-position | Notification wrapper position. |
| --jb-notification-wrapper-padding-top | Notification wrapper top padding. |
