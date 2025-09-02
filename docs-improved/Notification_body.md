# Notification.body API 兼容性数据

## 基本信息

- **API名称**: `Notification.body`
- **MDN文档**: [Notification.body](https://developer.mozilla.org/docs/Web/API/Notification/body)
- **规范文档**: [查看规范](https://notifications.spec.whatwg.org/#dom-notification-body)
- **标签**: `web-features:notifications`

## 使用示例

### 基本用法

```javascript
// Notification.body 使用示例
// 请查阅MDN文档了解具体用法
console.log('Notification.body API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 33 |  |
| Chrome Android | 42 |  |
| Edge | 14 |  |
| Firefox | 26 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 23 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 16.4 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 33

### Chrome Android

- **支持版本**: 42

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 26

### Opera

- **支持版本**: 23

### Safari

- **支持版本**: 11

### Safari iOS

- **支持版本**: 16.4

### WebView Android

- **支持版本**: 不支持

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Notification.body是否支持
function isNotificationBodySupported() {
    return 'body' in notification && typeof notification.body === 'function';
}

if (isNotificationBodySupported()) {
    console.log('Notification.body 支持');
    // 使用Notification.body
} else {
    console.log('Notification.body 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Notification.body polyfill
if (!notification.body) {
    // 在这里添加polyfill实现
    console.log('加载Notification.body polyfill');
}
```

