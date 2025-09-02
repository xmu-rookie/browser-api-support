# Navigator.serviceWorker API 兼容性数据

## 基本信息

- **API名称**: `Navigator.serviceWorker`
- **MDN文档**: [Navigator.serviceWorker](https://developer.mozilla.org/docs/Web/API/Navigator/serviceWorker)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#navigator-service-worker-attribute)
- **标签**: `web-features:service-workers`

## 使用示例

### 基本用法

```javascript
// 注册Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(registration => {
            console.log('SW 注册成功:', registration);
        })
        .catch(error => {
            console.log('SW 注册失败:', error);
        });
} else {
    console.log('浏览器不支持Service Worker');
}
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 40 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 44 | In Firefox private windows, the `serviceWorker` object is `undefined`. See [bug 1320796](https://bug... |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 40

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 44
- **注意事项**:
  - In Firefox private windows, the `serviceWorker` object is `undefined`. See [bug 1320796](https://bugzil.la/1320796).

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 11.1

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.serviceWorker是否支持
function isNavigatorServiceWorkerSupported() {
    return 'serviceWorker' in navigator && typeof navigator.serviceWorker === 'function';
}

if (isNavigatorServiceWorkerSupported()) {
    console.log('Navigator.serviceWorker 支持');
    // 使用Navigator.serviceWorker
} else {
    console.log('Navigator.serviceWorker 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.serviceWorker polyfill
if (!navigator.serviceWorker) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.serviceWorker polyfill');
}
```

