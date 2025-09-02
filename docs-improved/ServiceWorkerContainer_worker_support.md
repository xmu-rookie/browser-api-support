# ServiceWorkerContainer.worker_support API 兼容性数据

## 基本信息

- **API名称**: `ServiceWorkerContainer.worker_support`
- **标签**: `web-features:service-workers`
- **描述**: Available in workers

## 使用示例

### 基本用法

```javascript
// ServiceWorkerContainer.worker_support 使用示例
// 请查阅MDN文档了解具体用法
console.log('ServiceWorkerContainer.worker_support API');
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
// 检查ServiceWorkerContainer.worker_support是否支持
function isServiceWorkerContainerWorker_supportSupported() {
    return 'worker_support' in serviceworkercontainer && typeof serviceworkercontainer.worker_support === 'function';
}

if (isServiceWorkerContainerWorker_supportSupported()) {
    console.log('ServiceWorkerContainer.worker_support 支持');
    // 使用ServiceWorkerContainer.worker_support
} else {
    console.log('ServiceWorkerContainer.worker_support 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ServiceWorkerContainer.worker_support polyfill
if (!serviceworkercontainer.worker_support) {
    // 在这里添加polyfill实现
    console.log('加载ServiceWorkerContainer.worker_support polyfill');
}
```

