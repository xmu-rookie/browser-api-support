# ServiceWorkerRegistration.active API 兼容性数据

## 基本信息

- **API名称**: `ServiceWorkerRegistration.active`
- **MDN文档**: [ServiceWorkerRegistration.active](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/active)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#navigator-service-worker-active)
- **标签**: `web-features:service-workers`

## 使用示例

### 基本用法

```javascript
// ServiceWorkerRegistration.active 使用示例
// 请查阅MDN文档了解具体用法
console.log('ServiceWorkerRegistration.active API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 40 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 44 |  |
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

- **支持版本**: 40

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 44

### Safari

- **支持版本**: 11.1

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ServiceWorkerRegistration.active是否支持
function isServiceWorkerRegistrationActiveSupported() {
    return 'active' in serviceworkerregistration && typeof serviceworkerregistration.active === 'function';
}

if (isServiceWorkerRegistrationActiveSupported()) {
    console.log('ServiceWorkerRegistration.active 支持');
    // 使用ServiceWorkerRegistration.active
} else {
    console.log('ServiceWorkerRegistration.active 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ServiceWorkerRegistration.active polyfill
if (!serviceworkerregistration.active) {
    // 在这里添加polyfill实现
    console.log('加载ServiceWorkerRegistration.active polyfill');
}
```

