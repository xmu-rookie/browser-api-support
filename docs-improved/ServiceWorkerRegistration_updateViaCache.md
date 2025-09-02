# ServiceWorkerRegistration.updateViaCache API 兼容性数据

## 基本信息

- **API名称**: `ServiceWorkerRegistration.updateViaCache`
- **MDN文档**: [ServiceWorkerRegistration.updateViaCache](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/updateViaCache)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#service-worker-registration-updateviacache)
- **标签**: `web-features:service-workers`

## 使用示例

### 基本用法

```javascript
// ServiceWorkerRegistration.updateViaCache 使用示例
// 请查阅MDN文档了解具体用法
console.log('ServiceWorkerRegistration.updateViaCache API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 68 |  |
| Chrome Android | 同主版本 |  |
| Edge | 18 |  |
| Firefox | 57 |  |
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

- **支持版本**: 68

### Edge

- **支持版本**: 18

### Firefox

- **支持版本**: 57

### Safari

- **支持版本**: 11.1

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ServiceWorkerRegistration.updateViaCache是否支持
function isServiceWorkerRegistrationUpdateViaCacheSupported() {
    return 'updateViaCache' in serviceworkerregistration && typeof serviceworkerregistration.updateViaCache === 'function';
}

if (isServiceWorkerRegistrationUpdateViaCacheSupported()) {
    console.log('ServiceWorkerRegistration.updateViaCache 支持');
    // 使用ServiceWorkerRegistration.updateViaCache
} else {
    console.log('ServiceWorkerRegistration.updateViaCache 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ServiceWorkerRegistration.updateViaCache polyfill
if (!serviceworkerregistration.updateViaCache) {
    // 在这里添加polyfill实现
    console.log('加载ServiceWorkerRegistration.updateViaCache polyfill');
}
```

