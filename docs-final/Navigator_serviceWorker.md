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

