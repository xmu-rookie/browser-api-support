# Notification.lang API 兼容性数据

## 基本信息

- **API名称**: `Notification.lang`
- **MDN文档**: [Notification.lang](https://developer.mozilla.org/docs/Web/API/Notification/lang)
- **规范文档**: [查看规范](https://notifications.spec.whatwg.org/#dom-notification-lang)
- **标签**: `web-features:notifications`

## 使用示例

### 基本用法

```javascript
// Notification.lang 使用示例
// 请查阅MDN文档了解具体用法
console.log('Notification.lang API');
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
| Safari iOS | 不支持 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

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

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Notification.lang是否支持
function isNotificationLangSupported() {
    return 'lang' in notification && typeof notification.lang === 'function';
}

if (isNotificationLangSupported()) {
    console.log('Notification.lang 支持');
    // 使用Notification.lang
} else {
    console.log('Notification.lang 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Notification.lang polyfill
if (!notification.lang) {
    // 在这里添加polyfill实现
    console.log('加载Notification.lang polyfill');
}
```

