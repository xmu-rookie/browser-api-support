# Notification.maxActions_static API 兼容性数据

## 基本信息

- **API名称**: `Notification.maxActions_static`
- **MDN文档**: [Notification.maxActions_static](https://developer.mozilla.org/docs/Web/API/Notification/maxActions_static)
- **规范文档**: [查看规范](https://notifications.spec.whatwg.org/#dom-notification-maxactions)
- **标签**: `web-features:notifications`
- **描述**: `maxActions` static property

## 使用示例

### 基本用法

```javascript
// Notification.maxActions_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('Notification.maxActions_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 48 |  |
| Chrome Android | 同主版本 |  |
| Edge | 18 |  |
| Firefox | preview |  |
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

- **支持版本**: 48

### Edge

- **支持版本**: 18

### Firefox

- **支持版本**: preview
- **支持版本**: 138
- **移除版本**: 140

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Notification.maxActions_static是否支持
function isNotificationMaxActions_staticSupported() {
    return 'maxActions_static' in notification && typeof notification.maxActions_static === 'function';
}

if (isNotificationMaxActions_staticSupported()) {
    console.log('Notification.maxActions_static 支持');
    // 使用Notification.maxActions_static
} else {
    console.log('Notification.maxActions_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Notification.maxActions_static polyfill
if (!notification.maxActions_static) {
    // 在这里添加polyfill实现
    console.log('加载Notification.maxActions_static polyfill');
}
```

