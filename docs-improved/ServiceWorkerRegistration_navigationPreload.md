# ServiceWorkerRegistration.navigationPreload API 兼容性数据

## 基本信息

- **API名称**: `ServiceWorkerRegistration.navigationPreload`
- **MDN文档**: [ServiceWorkerRegistration.navigationPreload](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/navigationPreload)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#service-worker-registration-navigationpreload)
- **标签**: `web-features:service-workers`

## 使用示例

### 基本用法

```javascript
// ServiceWorkerRegistration.navigationPreload 使用示例
// 请查阅MDN文档了解具体用法
console.log('ServiceWorkerRegistration.navigationPreload API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 59 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 99 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 4.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 59

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 99

### Safari

- **支持版本**: 15.4

### Samsung Internet

- **支持版本**: 4.0

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ServiceWorkerRegistration.navigationPreload是否支持
function isServiceWorkerRegistrationNavigationPreloadSupported() {
    return 'navigationPreload' in serviceworkerregistration && typeof serviceworkerregistration.navigationPreload === 'function';
}

if (isServiceWorkerRegistrationNavigationPreloadSupported()) {
    console.log('ServiceWorkerRegistration.navigationPreload 支持');
    // 使用ServiceWorkerRegistration.navigationPreload
} else {
    console.log('ServiceWorkerRegistration.navigationPreload 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ServiceWorkerRegistration.navigationPreload polyfill
if (!serviceworkerregistration.navigationPreload) {
    // 在这里添加polyfill实现
    console.log('加载ServiceWorkerRegistration.navigationPreload polyfill');
}
```

