# Notification.badge API 兼容性数据

## 基本信息

- **API名称**: `Notification.badge`
- **MDN文档**: [Notification.badge](https://developer.mozilla.org/docs/Web/API/Notification/badge)
- **规范文档**: [查看规范](https://notifications.spec.whatwg.org/#dom-notification-badge)
- **标签**: `web-features:notifications`

## 使用示例

### 基本用法

```javascript
// Notification.badge 使用示例
// 请查阅MDN文档了解具体用法
console.log('Notification.badge API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 53 |  |
| Chrome Android | 同主版本 |  |
| Edge | 18 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 39 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 53

### Edge

- **支持版本**: 18

### Firefox

- **支持版本**: 不支持

### Opera

- **支持版本**: 39

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Notification.badge是否支持
function isNotificationBadgeSupported() {
    return 'badge' in notification && typeof notification.badge === 'function';
}

if (isNotificationBadgeSupported()) {
    console.log('Notification.badge 支持');
    // 使用Notification.badge
} else {
    console.log('Notification.badge 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Notification.badge polyfill
if (!notification.badge) {
    // 在这里添加polyfill实现
    console.log('加载Notification.badge polyfill');
}
```

