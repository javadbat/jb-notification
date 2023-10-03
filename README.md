# jb-notification
notification ui web component

## set title & description
```js
document.querySelector('jb-notification').title = "Information Message";
document.querySelector('jb-notification').description = "optional detail about what happen you may not set it";
```
```html
    <jb-notification title="message title" description="description below title text to tell more about what happen"></jb-notification>
```
## set notification type
```js
document.querySelector('jb-notification').type = "SUCCESS";
```
```html
    <jb-notification title="message title" type="SUCCESS"></jb-notification>
```