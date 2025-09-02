# Notification.tag API 兼容性数据

## 基本信息

- **API名称**: `Notification.tag`
- **MDN文档**: [Notification.tag](https://developer.mozilla.org/docs/Web/API/Notification/tag)
- **规范文档**: [查看规范](https://notifications.spec.whatwg.org/#dom-notification-tag)
- **标签**: `web-features:notifications`

## 使用示例

### 基本用法

```javascript
// Notification.tag 使用示例
// 请查阅MDN文档了解具体用法
console.log('Notification.tag API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 20 |  |
| Chrome Android | 42 |  |
| Edge | 14 |  |
| Firefox | 26 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 23 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 | The property can be set, but has no effect. |
| Safari iOS | 不支持 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 20

### Chrome Android

- **支持版本**: 42

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 26

### Opera

- **支持版本**: 23

### Safari

- **支持版本**: 不支持
- **注意事项**:
  - The property can be set, but has no effect.

### Safari iOS

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Notification.tag是否支持
function isNotificationTagSupported() {
    return 'tag' in notification && typeof notification.tag === 'function';
}

if (isNotificationTagSupported()) {
    console.log('Notification.tag 支持');
    // 使用Notification.tag
} else {
    console.log('Notification.tag 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Notification.tag polyfill
if (!notification.tag) {
    // 在这里添加polyfill实现
    console.log('加载Notification.tag polyfill');
}
```

