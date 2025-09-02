# Notification.dir API 兼容性数据

## 基本信息

- **API名称**: `Notification.dir`
- **MDN文档**: [Notification.dir](https://developer.mozilla.org/docs/Web/API/Notification/dir)
- **规范文档**: [查看规范](https://notifications.spec.whatwg.org/#dom-notification-dir)
- **标签**: `web-features:notifications`

## 使用示例

### 基本用法

```javascript
// Notification.dir 使用示例
// 请查阅MDN文档了解具体用法
console.log('Notification.dir API');
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
| Safari | 7 |  |
| Safari iOS | 16.4 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 不支持 |  |

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

- **支持版本**: 7

### Safari iOS

- **支持版本**: 16.4

### WebView Android

- **支持版本**: 不支持

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Notification.dir是否支持
function isNotificationDirSupported() {
    return 'dir' in notification && typeof notification.dir === 'function';
}

if (isNotificationDirSupported()) {
    console.log('Notification.dir 支持');
    // 使用Notification.dir
} else {
    console.log('Notification.dir 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Notification.dir polyfill
if (!notification.dir) {
    // 在这里添加polyfill实现
    console.log('加载Notification.dir polyfill');
}
```

