# NotificationEvent API 兼容性数据

## 基本信息

- **API名称**: `NotificationEvent`
- **MDN文档**: [NotificationEvent](https://developer.mozilla.org/docs/Web/API/NotificationEvent)
- **规范文档**: [查看规范](https://notifications.spec.whatwg.org/#notificationevent)
- **标签**: `web-features:notifications`

## 使用示例

### 基本用法

```javascript
// NotificationEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('NotificationEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 42 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 44 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 37 |  |
| Opera Android | 37 |  |
| Safari | 16 | Notifications are supported on macOS Ventura and later. |
| Safari iOS | 16.4 | Notifications are supported in web apps saved to the home screen. |
| Samsung Internet | 同主版本 |  |
| WebView Android | ❌ 不支持 |  |
| webview_ios | ❌ 不支持 | Notifications are supported in web apps saved to the home screen. |

## 详细兼容性信息

### Chrome

- **支持版本**: 42

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 44

### Opera

- **支持版本**: 37

### Opera Android

- **支持版本**: 37

### Safari

- **支持版本**: 16
- **注意事项**:
  - Notifications are supported on macOS Ventura and later.

### Safari iOS

- **支持版本**: 16.4
- **注意事项**:
  - Notifications are supported in web apps saved to the home screen.

### WebView Android

- **支持版本**: 不支持

### webview_ios

- **支持版本**: 不支持
- **注意事项**:
  - Notifications are supported in web apps saved to the home screen.

## 兼容性检查代码

### 特性检测

```javascript
// 检查NotificationEvent是否支持
function isNotificationEventSupported() {
    return 'NotificationEvent' in window || typeof NotificationEvent !== 'undefined';
}

if (isNotificationEventSupported()) {
    console.log('NotificationEvent 支持');
    // 使用NotificationEvent
} else {
    console.log('NotificationEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// NotificationEvent polyfill
if (!window.NotificationEvent) {
    // 在这里添加polyfill实现
    console.log('加载NotificationEvent polyfill');
}
```

