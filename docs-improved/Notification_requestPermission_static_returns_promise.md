# Notification.requestPermission_static.returns_promise API 兼容性数据

## 基本信息

- **API名称**: `Notification.requestPermission_static.returns_promise`
- **标签**: `web-features:notifications`
- **描述**: Returns a `Promise`

## 使用示例

### 基本用法

```javascript
// Notification.requestPermission_static.returns_promise 使用示例
// 请查阅MDN文档了解具体用法
console.log('Notification.requestPermission_static.returns_promise API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 47 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 46 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15 |  |
| Safari iOS | 16.4 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 47

### Firefox

- **支持版本**: 46

### Safari

- **支持版本**: 15

### Safari iOS

- **支持版本**: 16.4

### WebView Android

- **支持版本**: 不支持

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Notification.requestPermission_static.returns_promise是否支持
function isNotificationRequestPermission_staticSupported() {
    return 'requestPermission_static' in notification && typeof notification.requestPermission_static === 'function';
}

if (isNotificationRequestPermission_staticSupported()) {
    console.log('Notification.requestPermission_static.returns_promise 支持');
    // 使用Notification.requestPermission_static.returns_promise
} else {
    console.log('Notification.requestPermission_static.returns_promise 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Notification.requestPermission_static.returns_promise polyfill
if (!notification.requestPermission_static) {
    // 在这里添加polyfill实现
    console.log('加载Notification.requestPermission_static.returns_promise polyfill');
}
```

