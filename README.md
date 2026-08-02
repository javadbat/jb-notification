# jb-notification

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/jb-notification)
[![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://raw.githubusercontent.com/javadbat/jb-notification/main/LICENSE)
[![NPM Version](https://img.shields.io/npm/v/jb-notification)](https://www.npmjs.com/package/jb-notification)
![GitHub Created At](https://img.shields.io/github/created-at/javadbat/jb-notification)

Notification and toast web components for showing short application messages from plain JavaScript or any framework.

- Framework free and usable in any JavaScript app.
- Supports `INFO`, `SUCCESS`, `WARNING`, and `ERROR` notification types.
- Animated show, hide, and swipe-to-dismiss behavior.
- Optional wrapper component for stacking notifications.
- Optional manager helper for creating notifications from JavaScript.

## When to use

Use `jb-notification` for short-lived feedback messages such as success messages, errors, warnings, and informational toasts. [See the direct notification demo](https://javadbat.github.io/design-system/?path=/story/components-jbnotification--direct-notification).

Use an inline message component when the message must stay attached to a form field or page section. Use `jb-modal` when the user must respond before continuing.

## Demo

[Try the interactive notification examples](https://javadbat.github.io/design-system/?path=/story/components-jbnotification--overview), or open the [CodeSandbox preview](https://3f63dj.csb.app/samples/jb-notification) and [source](https://codesandbox.io/p/sandbox/jb-design-system-3f63dj?file=%2Fsrc%2Fsamples%2FJBNotification.tsx%3A11%2C24).

## Installation

```sh
npm i jb-notification
```

```js
import 'jb-notification';
```

```html
<jb-notification title="Saved" type="SUCCESS"></jb-notification>
```

## API reference

### Attributes

| name | type | default | description |
| --- | --- | --- | --- |
| `title` | `string` | `""` | Main notification title. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbnotification--direct-notification) |
| `description` | `string` | `null` | Optional detail text below the title. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbnotification--direct-notification) |
| `type` | `'INFO' \| 'SUCCESS' \| 'WARNING' \| 'ERROR'` | `INFO` | Notification visual type. Invalid values are ignored and logged in the console. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbnotification--action-test) |

### Properties

| name | type | readonly | description |
| --- | --- | --- | --- |
| `title` | `string` | no | Main notification title. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbnotification--direct-notification) |
| `description` | `string \| null` | no | Optional detail text below the title. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbnotification--direct-notification) |
| `type` | `'INFO' \| 'SUCCESS' \| 'WARNING' \| 'ERROR'` | no | Notification visual type. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbnotification--action-test) |
| `state` | `'OPEN' \| 'CLOSE'` | yes | Current notification state. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbnotification--direct-notification) |

### Methods

| name | returns | description |
| --- | --- | --- |
| `show()` | `void` | Shows the notification, starts the show animation, and schedules hide after the internal duration. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbnotification--direct-notification) |
| `hide()` | `void` | Starts the hide animation and dispatches `close` after the animation completes. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbnotification--direct-notification) |
| `onClose()` | `void` | Sets state to `CLOSE`, clears the timer, and dispatches `close`. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbnotification--direct-notification) |

### Events

| event | detail | description |
| --- | --- | --- |
| `close` | none | Dispatched when the notification finishes closing or is dismissed by swipe. Use it to remove the element from its wrapper. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbnotification--direct-notification) |

## Basic usage

The direct element lifecycle is demonstrated in the [direct notification demo](https://javadbat.github.io/design-system/?path=/story/components-jbnotification--direct-notification).

```js
const notification = document.createElement('jb-notification');

notification.title = 'Saved';
notification.description = 'Your changes were saved successfully.';
notification.type = 'SUCCESS';
notification.addEventListener('close', (event) => {
  event.target.remove();
});

document.body.appendChild(notification);
notification.show();
```

```html
<jb-notification
  title="Connection lost"
  description="Please check your internet connection."
  type="ERROR"
></jb-notification>
```

## Message types

The manager example exercises `INFO`, `SUCCESS`, `WARNING`, and `ERROR` notifications. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbnotification--action-test)

| type | use for |
| --- | --- |
| `INFO` | Neutral information. |
| `SUCCESS` | Successful completion. |
| `WARNING` | Recoverable warnings or caution messages. |
| `ERROR` | Failed actions or blocking problems. |

## Wrapper

`jb-notification-wrapper` is a companion component that stacks notifications in a full-screen overlay.

```js
import 'jb-notification';
import 'jb-notification/wrapper';

const wrapper = document.createElement('jb-notification-wrapper');
const notification = document.createElement('jb-notification');

notification.title = 'Saved';
notification.type = 'SUCCESS';
notification.addEventListener('close', (event) => {
  wrapper.removeChild(event.target);
});

document.body.appendChild(wrapper);
wrapper.appendChild(notification);
notification.show();
```

For wrapper-specific usage and CSS variables, see the [wrapper documentation](https://javadbat.github.io/design-system/?path=/docs/components-jbnotification-wrapper-readme--docs).

## Manager

`NotificationManager` creates a wrapper in `document.body`, creates notifications, appends them to the wrapper, shows them, and removes each notification after its `close` event.

```js
import { NotificationManager } from 'jb-notification/manager';

const notificationManager = new NotificationManager();

notificationManager.new({
  title: 'Saved',
  desc: 'Your changes were saved successfully.',
  type: 'SUCCESS',
});
```

For manager-specific helpers, see the [manager documentation](https://javadbat.github.io/design-system/?path=/docs/components-jbnotification-manager-readme--docs).

## CSS parts and custom style

For complete styling guidance, live examples, and copyable style recipes, see the [styling guide](https://javadbat.github.io/design-system/?path=/docs/components-jbnotification-styling) and [style gallery](https://javadbat.github.io/design-system/?path=/story/components-jbnotification-style--gallery).

| part | description |
| --- | --- |
| `component` | Outer notification wrapper. |
| `content` | Notification content box. |
| `icon` | Icon container. |
| `icon-svg` | Notification SVG icon. |
| `texts` | Title and description wrapper. |
| `title` | Title text element. |
| `description` | Description text element. |

| CSS state | description |
| --- | --- |
| `success` | Applied when `type` is `SUCCESS`. |
| `info` | Applied when `type` is `INFO`. |
| `warning` | Applied when `type` is `WARNING`. |
| `error` | Applied when `type` is `ERROR`. |
| `open` | Applied while the notification is visible. |
| `closed` | Applied while the notification is closed. |

| CSS variable name | description |
| --- | --- |
| `--jb-notification-width` | Host and content width. |
| `--jb-notification-max-width` | Host and content maximum width. |
| `--jb-notification-border-radius` | Notification content border radius. |
| `--jb-notification-bg-color-error` | Error notification background color. |
| `--jb-notification-bg-color-info` | Info notification background color. |
| `--jb-notification-bg-color-success` | Success notification background color. |
| `--jb-notification-bg-color-warning` | Warning notification background color. |
| `--jb-notification-border-color` | Notification content border color. |
| `--jb-notification-border-style` | Notification content border style. |
| `--jb-notification-border-width` | Notification content border width. |
| `--jb-notification-box-shadow` | Notification content shadow. |
| `--jb-notification-content-align-items` | Notification content grid alignment. |
| `--jb-notification-desc-font-size` | Description font size. |
| `--jb-notification-desc-font-weight` | Description font weight. |
| `--jb-notification-gap` | Gap between notification content items. |
| `--jb-notification-grid-template-columns` | Notification content grid columns. |
| `--jb-notification-icon-bg-color` | Icon badge background color. |
| `--jb-notification-icon-symbol-color-error` | Error icon symbol color. |
| `--jb-notification-icon-symbol-color-info` | Info icon symbol color. |
| `--jb-notification-icon-symbol-color-success` | Success icon symbol color. |
| `--jb-notification-icon-symbol-color-warning` | Warning icon symbol color. |
| `--jb-notification-icon-size` | Icon container width and height. |
| `--jb-notification-padding` | Notification content padding. |
| `--jb-notification-text-gap` | Gap between title and description. |
| `--jb-notification-text-color-error` | Error notification text color. |
| `--jb-notification-text-color-info` | Info notification text color. |
| `--jb-notification-text-color-success` | Success notification text color. |
| `--jb-notification-text-color-warning` | Warning notification text color. |
| `--jb-notification-title-font-size` | Title font size. |
| `--jb-notification-title-font-weight` | Title font weight. |
| `--jb-notification-wrapper-align-items` | Wrapper flex alignment. |
| `--jb-notification-wrapper-display` | Wrapper display value. |
| `--jb-notification-wrapper-flex-direction` | Wrapper flex direction. |
| `--jb-notification-wrapper-gap` | Gap between notifications. |
| `--jb-notification-wrapper-height` | Wrapper height. |
| `--jb-notification-wrapper-left` | Wrapper left offset. |
| `--jb-notification-wrapper-overflow` | Wrapper overflow value. |
| `--jb-notification-wrapper-position` | Wrapper CSS `position` value. |
| `--jb-notification-wrapper-padding-top` | Wrapper top padding. |
| `--jb-notification-wrapper-pointer-events` | Wrapper pointer events value. |
| `--jb-notification-wrapper-top` | Wrapper top offset. |
| `--jb-notification-wrapper-width` | Wrapper width. |
| `--jb-notification-wrapper-z-index` | Wrapper z-index. |

```css
jb-notification::part(content) {
  border-radius: 0.75rem;
}

jb-notification {
  --jb-notification-bg-color-success: #0f7a4f;
}

jb-notification-wrapper {
  --jb-notification-wrapper-padding-top: 5rem;
}
```

## Accessibility notes

- The notification sets `ElementInternals.role` to `alertdialog` when ElementInternals is available. [Demo](https://javadbat.github.io/design-system/?path=/story/components-jbnotification--direct-notification)
- The component does not trap focus or require user action before it closes.
- Use concise `title` and `description` text because notifications auto-hide after the internal duration.

## Related Docs

- See [All JB Design System Component List](https://javadbat.github.io/design-system/) for more components.
- Use [Contribution Guide](https://github.com/javadbat/design-system/blob/main/docs/contribution-guide.md) if you want to contribute to this component.

## AI agent notes

- Import `jb-notification` once before using `<jb-notification>`.
- Import `jb-notification/wrapper` before using `<jb-notification-wrapper>`.
- Use `show()` to display a created notification and listen to `close` to remove it from the DOM.
- Prefer `NotificationManager` from `jb-notification/manager` when creating notifications from application code.
- `type` only accepts `INFO`, `SUCCESS`, `WARNING`, or `ERROR`.
- The auto-hide duration is internal and is not currently configurable from an attribute or public property.
- This package includes [`custom-elements.json`](./custom-elements.json) and points to it with the package.json `customElements` field. The field is documented by the Custom Elements Manifest project in [Referencing manifests from npm packages](https://github.com/webcomponents/custom-elements-manifest#referencing-manifests-from-npm-packages).
- In `custom-elements.json`, `exports.kind: "js"` describes JavaScript/TypeScript exports and `exports.kind: "custom-element-definition"` maps tag names such as `jb-notification` to their implementation classes.
