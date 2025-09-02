# WorkerNavigator.serviceWorker API 兼容性数据

## 基本信息

- **API名称**: `WorkerNavigator.serviceWorker`
- **MDN文档**: [WorkerNavigator.serviceWorker](https://developer.mozilla.org/docs/Web/API/WorkerNavigator/serviceWorker)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#navigator-serviceworker)
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
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 133 |  |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 不支持

### Firefox

- **支持版本**: 133

### Safari

- **支持版本**: 11.1

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查WorkerNavigator.serviceWorker是否支持
function isWorkerNavigatorServiceWorkerSupported() {
    return 'serviceWorker' in workernavigator && typeof workernavigator.serviceWorker === 'function';
}

if (isWorkerNavigatorServiceWorkerSupported()) {
    console.log('WorkerNavigator.serviceWorker 支持');
    // 使用WorkerNavigator.serviceWorker
} else {
    console.log('WorkerNavigator.serviceWorker 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WorkerNavigator.serviceWorker polyfill
if (!workernavigator.serviceWorker) {
    // 在这里添加polyfill实现
    console.log('加载WorkerNavigator.serviceWorker polyfill');
}
```

