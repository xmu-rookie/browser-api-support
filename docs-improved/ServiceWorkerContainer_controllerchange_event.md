# ServiceWorkerContainer.controllerchange_event API 兼容性数据

## 基本信息

- **API名称**: `ServiceWorkerContainer.controllerchange_event`
- **MDN文档**: [ServiceWorkerContainer.controllerchange_event](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/controllerchange_event)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#dom-serviceworkercontainer-oncontrollerchange)
- **标签**: `web-features:service-workers`
- **描述**: `controllerchange` event

## 使用示例

### 基本用法

```javascript
// ServiceWorkerContainer.controllerchange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('ServiceWorkerContainer.controllerchange_event API');
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
// 检查ServiceWorkerContainer.controllerchange_event是否支持
function isServiceWorkerContainerControllerchange_eventSupported() {
    return 'controllerchange_event' in serviceworkercontainer && typeof serviceworkercontainer.controllerchange_event === 'function';
}

if (isServiceWorkerContainerControllerchange_eventSupported()) {
    console.log('ServiceWorkerContainer.controllerchange_event 支持');
    // 使用ServiceWorkerContainer.controllerchange_event
} else {
    console.log('ServiceWorkerContainer.controllerchange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ServiceWorkerContainer.controllerchange_event polyfill
if (!serviceworkercontainer.controllerchange_event) {
    // 在这里添加polyfill实现
    console.log('加载ServiceWorkerContainer.controllerchange_event polyfill');
}
```

