# ServiceWorkerGlobalScope.notificationclick_event API 兼容性数据

## 基本信息

- **API名称**: `ServiceWorkerGlobalScope.notificationclick_event`
- **MDN文档**: [ServiceWorkerGlobalScope.notificationclick_event](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event)
- **规范文档**: [查看规范](https://notifications.spec.whatwg.org/#activating-a-notification,https://notifications.spec.whatwg.org/#dom-serviceworkerglobalscope-onnotificationclick)
- **标签**: `web-features:notifications`
- **描述**: `notificationclick` event

## 使用示例

### 基本用法

```javascript
// ServiceWorkerGlobalScope.notificationclick_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('ServiceWorkerGlobalScope.notificationclick_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 40 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 44 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 24 |  |
| Opera Android | 同主版本 |  |
| Safari | 16 | Notifications are supported on macOS Ventura and later. |
| Safari iOS | 不支持 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 40

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 44

### Opera

- **支持版本**: 24

### Safari

- **支持版本**: 16
- **注意事项**:
  - Notifications are supported on macOS Ventura and later.

### Safari iOS

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ServiceWorkerGlobalScope.notificationclick_event是否支持
function isServiceWorkerGlobalScopeNotificationclick_eventSupported() {
    return 'notificationclick_event' in serviceworkerglobalscope && typeof serviceworkerglobalscope.notificationclick_event === 'function';
}

if (isServiceWorkerGlobalScopeNotificationclick_eventSupported()) {
    console.log('ServiceWorkerGlobalScope.notificationclick_event 支持');
    // 使用ServiceWorkerGlobalScope.notificationclick_event
} else {
    console.log('ServiceWorkerGlobalScope.notificationclick_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ServiceWorkerGlobalScope.notificationclick_event polyfill
if (!serviceworkerglobalscope.notificationclick_event) {
    // 在这里添加polyfill实现
    console.log('加载ServiceWorkerGlobalScope.notificationclick_event polyfill');
}
```

