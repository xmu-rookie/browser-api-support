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
navigator.serviceWorker.register('/sw.js')
    .then(registration => {
        console.log('SW 注册成功:', registration);
    })
    .catch(error => {
        console.log('SW 注册失败:', error);
    });
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

