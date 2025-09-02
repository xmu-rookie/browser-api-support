# ServiceWorkerRegistration.update API 兼容性数据

## 基本信息

- **API名称**: `ServiceWorkerRegistration.update`
- **MDN文档**: [ServiceWorkerRegistration.update](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/update)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#service-worker-registration-update)
- **标签**: `web-features:service-workers`

## 使用示例

### 基本用法

```javascript
// ServiceWorkerRegistration.update 使用示例
// 请查阅MDN文档了解具体用法
console.log('ServiceWorkerRegistration.update API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 45 | Starting with Chrome 46, update() returns a promise that resolves with 'undefined' if the operation ... |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 44 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 4.0 | Starting with Samsung Internet 5.0, update() returns a promise that resolves with 'undefined' if the... |
| WebView Android | 同主版本 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 45
- **注意事项**:
  - Starting with Chrome 46, update() returns a promise that resolves with 'undefined' if the operation completed successfully or there was no update, and rejects if update failed. If the new worker ran but installation failed, the promise still resolves. Formerly, it raised an exception.
  - Before Chrome 48, this method always bypassed the browser cache. Starting with Chrome 48, it only bypasses the cache when the previous service worker check was more than twenty-four hours ago.

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 44

### Safari

- **支持版本**: 11.1

### Samsung Internet

- **支持版本**: 4.0
- **注意事项**:
  - Starting with Samsung Internet 5.0, update() returns a promise that resolves with 'undefined' if the operation completed successfully or there was no update, and rejects if update failed. If the new worker ran but installation failed, the promise still resolves. Formerly, it raised an exception.
  - Before Samsung Internet 5.0, this method always bypassed the browser cache. Starting with Samsung Internet 5.0, it only bypasses the cache when the previous service worker check was more than twenty-four hours ago.

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ServiceWorkerRegistration.update是否支持
function isServiceWorkerRegistrationUpdateSupported() {
    return 'update' in serviceworkerregistration && typeof serviceworkerregistration.update === 'function';
}

if (isServiceWorkerRegistrationUpdateSupported()) {
    console.log('ServiceWorkerRegistration.update 支持');
    // 使用ServiceWorkerRegistration.update
} else {
    console.log('ServiceWorkerRegistration.update 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ServiceWorkerRegistration.update polyfill
if (!serviceworkerregistration.update) {
    // 在这里添加polyfill实现
    console.log('加载ServiceWorkerRegistration.update polyfill');
}
```

