# Notification.requireInteraction API 兼容性数据

## 基本信息

- **API名称**: `Notification.requireInteraction`
- **MDN文档**: [Notification.requireInteraction](https://developer.mozilla.org/docs/Web/API/Notification/requireInteraction)
- **规范文档**: [查看规范](https://notifications.spec.whatwg.org/#dom-notification-requireinteraction)
- **标签**: `web-features:notifications`

## 使用示例

### 基本用法

```javascript
// Notification.requireInteraction 使用示例
// 请查阅MDN文档了解具体用法
console.log('Notification.requireInteraction API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 47 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 117 | Only supported on Windows. Behind a flag on other operating systems. |
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

- **支持版本**: 47

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 117
- **部分实现**: 是
- **注意事项**:
  - Only supported on Windows. Behind a flag on other operating systems.
- **支持版本**: 117
- **需要标志**: 
  - dom.webnotifications.requireinteraction.enabled: true

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Notification.requireInteraction是否支持
function isNotificationRequireInteractionSupported() {
    return 'requireInteraction' in notification && typeof notification.requireInteraction === 'function';
}

if (isNotificationRequireInteractionSupported()) {
    console.log('Notification.requireInteraction 支持');
    // 使用Notification.requireInteraction
} else {
    console.log('Notification.requireInteraction 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Notification.requireInteraction polyfill
if (!notification.requireInteraction) {
    // 在这里添加polyfill实现
    console.log('加载Notification.requireInteraction polyfill');
}
```

