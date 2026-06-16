# jb-notification-manager

`jb-notification-manager` is a JavaScript helper for creating and showing `jb-notification` elements from application code.

## Installation

```sh
npm i jb-notification-manager
```

```js
import { NotificationManager } from 'jb-notification-manager';
```

## Usage

Use it when you want a central notification manager instead of manually creating a wrapper and appending every `jb-notification` element.

```js
const notificationManager = new NotificationManager();

notificationManager.new({
  title: 'Saved',
  desc: 'Your changes were saved successfully.',
  type: 'SUCCESS',
});
```

## API reference

### Constructor

| name | description |
| --- | --- |
| `new NotificationManager()` | Creates a `jb-notification-wrapper` and appends it to `document.body`. |

### Properties

| name | type | readonly | description |
| --- | --- | --- | --- |
| `wrapperDom` | `JBNotificationWrapperWebComponent` | yes | The wrapper element created by the manager. |

### Methods

| name | params | description |
| --- | --- | --- |
| `new(params)` | `{ title: string; type?: NotificationType; desc?: string }` | Creates a `jb-notification`, appends it to the wrapper, calls `show()`, and removes it after `close`. |
| `onNotificationClose(event)` | `Event` | Removes the closed notification from the wrapper. |

## Related components

- [`jb-notification`](https://github.com/javadbat/jb-notification)
- [`jb-notification-wrapper`](https://github.com/javadbat/jb-notification/tree/main/wrapper)

## AI agent notes

- Use `NotificationManager` from `jb-notification-manager` for application-level toast creation.
- `new({ title, desc, type })` uses `desc`, not `description`, in the manager API.
- `type` accepts the same values as `jb-notification`: `INFO`, `SUCCESS`, `WARNING`, or `ERROR`.
- The manager creates its wrapper in `document.body`; do not create a second wrapper unless you need separate notification regions.
