# Notification.timestamp API 兼容性数据

## 基本信息

- **API名称**: `Notification.timestamp`
- **MDN文档**: [Notification.timestamp](https://developer.mozilla.org/docs/Web/API/Notification/timestamp)
- **规范文档**: [查看规范](https://notifications.spec.whatwg.org/#dom-notification-timestamp)
- **标签**: `web-features:notifications`

## 使用示例

### 基本用法

```javascript
// Notification.timestamp 使用示例
// 请查阅MDN文档了解具体用法
console.log('Notification.timestamp API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 50 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
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

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Notification.timestamp是否支持
function isNotificationTimestampSupported() {
    return 'timestamp' in notification && typeof notification.timestamp === 'function';
}

if (isNotificationTimestampSupported()) {
    console.log('Notification.timestamp 支持');
    // 使用Notification.timestamp
} else {
    console.log('Notification.timestamp 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Notification.timestamp polyfill
if (!notification.timestamp) {
    // 在这里添加polyfill实现
    console.log('加载Notification.timestamp polyfill');
}
```

