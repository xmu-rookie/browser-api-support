# ServiceWorkerContainer.message_event API 兼容性数据

## 基本信息

- **API名称**: `ServiceWorkerContainer.message_event`
- **MDN文档**: [ServiceWorkerContainer.message_event](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/message_event)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#dom-serviceworkercontainer-onmessage)
- **标签**: `web-features:service-workers`
- **描述**: `message` event

## 使用示例

### 基本用法

```javascript
// ServiceWorkerContainer.message_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('ServiceWorkerContainer.message_event API');
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
// 检查ServiceWorkerContainer.message_event是否支持
function isServiceWorkerContainerMessage_eventSupported() {
    return 'message_event' in serviceworkercontainer && typeof serviceworkercontainer.message_event === 'function';
}

if (isServiceWorkerContainerMessage_eventSupported()) {
    console.log('ServiceWorkerContainer.message_event 支持');
    // 使用ServiceWorkerContainer.message_event
} else {
    console.log('ServiceWorkerContainer.message_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ServiceWorkerContainer.message_event polyfill
if (!serviceworkercontainer.message_event) {
    // 在这里添加polyfill实现
    console.log('加载ServiceWorkerContainer.message_event polyfill');
}
```

