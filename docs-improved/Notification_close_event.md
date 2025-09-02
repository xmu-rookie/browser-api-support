# Notification.close_event API 兼容性数据

## 基本信息

- **API名称**: `Notification.close_event`
- **MDN文档**: [Notification.close_event](https://developer.mozilla.org/docs/Web/API/Notification/close_event)
- **规范文档**: [查看规范](https://notifications.spec.whatwg.org/#dom-notification-onclose)
- **标签**: `web-features:notifications`
- **描述**: `close` event

## 使用示例

### 基本用法

```javascript
// Notification.close_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Notification.close_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 20 |  |
| Chrome Android | 42 |  |
| Edge | 14 |  |
| Firefox | 22 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 23 |  |
| Opera Android | 同主版本 |  |
| Safari | 7 |  |
| Safari iOS | 16.4 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 20

### Chrome Android

- **支持版本**: 42

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 22

### Opera

- **支持版本**: 23

### Safari

- **支持版本**: 7

### Safari iOS

- **支持版本**: 16.4

### WebView Android

- **支持版本**: 不支持

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Notification.close_event是否支持
function isNotificationClose_eventSupported() {
    return 'close_event' in notification && typeof notification.close_event === 'function';
}

if (isNotificationClose_eventSupported()) {
    console.log('Notification.close_event 支持');
    // 使用Notification.close_event
} else {
    console.log('Notification.close_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Notification.close_event polyfill
if (!notification.close_event) {
    // 在这里添加polyfill实现
    console.log('加载Notification.close_event polyfill');
}
```

