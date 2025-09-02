# Notification.renotify API 兼容性数据

## 基本信息

- **API名称**: `Notification.renotify`
- **MDN文档**: [Notification.renotify](https://developer.mozilla.org/docs/Web/API/Notification/renotify)
- **规范文档**: [查看规范](https://notifications.spec.whatwg.org/#dom-notification-renotify)
- **标签**: `web-features:notifications`

## 使用示例

### 基本用法

```javascript
// Notification.renotify 使用示例
// 请查阅MDN文档了解具体用法
console.log('Notification.renotify API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 50 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 50

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Notification.renotify是否支持
function isNotificationRenotifySupported() {
    return 'renotify' in notification && typeof notification.renotify === 'function';
}

if (isNotificationRenotifySupported()) {
    console.log('Notification.renotify 支持');
    // 使用Notification.renotify
} else {
    console.log('Notification.renotify 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Notification.renotify polyfill
if (!notification.renotify) {
    // 在这里添加polyfill实现
    console.log('加载Notification.renotify polyfill');
}
```

