# Notification.data API 兼容性数据

## 基本信息

- **API名称**: `Notification.data`
- **MDN文档**: [Notification.data](https://developer.mozilla.org/docs/Web/API/Notification/data)
- **规范文档**: [查看规范](https://notifications.spec.whatwg.org/#dom-notification-data)
- **标签**: `web-features:notifications`

## 使用示例

### 基本用法

```javascript
// Notification.data 使用示例
// 请查阅MDN文档了解具体用法
console.log('Notification.data API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 44 |  |
| Chrome Android | 同主版本 |  |
| Edge | 16 |  |
| Firefox | 34 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16 |  |
| Safari iOS | 16.4 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 44

### Edge

- **支持版本**: 16

### Firefox

- **支持版本**: 34

### Safari

- **支持版本**: 16

### Safari iOS

- **支持版本**: 16.4

### WebView Android

- **支持版本**: 不支持

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Notification.data是否支持
function isNotificationDataSupported() {
    return 'data' in notification && typeof notification.data === 'function';
}

if (isNotificationDataSupported()) {
    console.log('Notification.data 支持');
    // 使用Notification.data
} else {
    console.log('Notification.data 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Notification.data polyfill
if (!notification.data) {
    // 在这里添加polyfill实现
    console.log('加载Notification.data polyfill');
}
```

