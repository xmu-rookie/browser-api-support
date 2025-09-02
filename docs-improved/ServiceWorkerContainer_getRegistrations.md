# ServiceWorkerContainer.getRegistrations API 兼容性数据

## 基本信息

- **API名称**: `ServiceWorkerContainer.getRegistrations`
- **MDN文档**: [ServiceWorkerContainer.getRegistrations](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/getRegistrations)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#navigator-service-worker-getRegistrations)
- **标签**: `web-features:service-workers`

## 使用示例

### 基本用法

```javascript
// ServiceWorkerContainer.getRegistrations 使用示例
// 请查阅MDN文档了解具体用法
console.log('ServiceWorkerContainer.getRegistrations API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 45 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 44 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 27 |  |
| Opera Android | 27 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 4.0 |  |
| WebView Android | 40 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 45

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 44

### Opera

- **支持版本**: 27

### Opera Android

- **支持版本**: 27

### Safari

- **支持版本**: 11.1

### Samsung Internet

- **支持版本**: 4.0

### WebView Android

- **支持版本**: 40

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ServiceWorkerContainer.getRegistrations是否支持
function isServiceWorkerContainerGetRegistrationsSupported() {
    return 'getRegistrations' in serviceworkercontainer && typeof serviceworkercontainer.getRegistrations === 'function';
}

if (isServiceWorkerContainerGetRegistrationsSupported()) {
    console.log('ServiceWorkerContainer.getRegistrations 支持');
    // 使用ServiceWorkerContainer.getRegistrations
} else {
    console.log('ServiceWorkerContainer.getRegistrations 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ServiceWorkerContainer.getRegistrations polyfill
if (!serviceworkercontainer.getRegistrations) {
    // 在这里添加polyfill实现
    console.log('加载ServiceWorkerContainer.getRegistrations polyfill');
}
```

