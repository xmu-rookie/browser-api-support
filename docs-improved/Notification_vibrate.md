# Notification.vibrate API 兼容性数据

## 基本信息

- **API名称**: `Notification.vibrate`
- **MDN文档**: [Notification.vibrate](https://developer.mozilla.org/docs/Web/API/Notification/vibrate)
- **规范文档**: [查看规范](https://notifications.spec.whatwg.org/#dom-notification-vibrate)
- **标签**: `web-features:notifications`

## 使用示例

### 基本用法

```javascript
// 使用振动API
if (navigator.vibrate) {
    // 振动200毫秒
    navigator.vibrate(200);
    
    // 振动模式：振动-停止-振动
    navigator.vibrate([200, 100, 200]);
} else {
    console.log('设备不支持振动');
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 53 |  |
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

- **支持版本**: 53

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Notification.vibrate是否支持
function isNotificationVibrateSupported() {
    return 'vibrate' in notification && typeof notification.vibrate === 'function';
}

if (isNotificationVibrateSupported()) {
    console.log('Notification.vibrate 支持');
    // 使用Notification.vibrate
} else {
    console.log('Notification.vibrate 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Notification.vibrate polyfill
if (!notification.vibrate) {
    // 在这里添加polyfill实现
    console.log('加载Notification.vibrate polyfill');
}
```

