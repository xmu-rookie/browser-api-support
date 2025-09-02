# ServiceWorkerContainer.messageerror_event API 兼容性数据

## 基本信息

- **API名称**: `ServiceWorkerContainer.messageerror_event`
- **MDN文档**: [ServiceWorkerContainer.messageerror_event](https://developer.mozilla.org/docs/Web/API/ServiceWorkerContainer/messageerror_event)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#dom-serviceworkerglobalscope-onmessageerror)
- **标签**: `web-features:messageerror`
- **描述**: `messageerror` event

## 使用示例

### 基本用法

```javascript
// ServiceWorkerContainer.messageerror_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('ServiceWorkerContainer.messageerror_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 80 |  |
| Chrome Android | 同主版本 |  |
| Edge | 80 |  |
| Firefox | 65 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 80

### Edge

- **支持版本**: 80
- **支持版本**: 17
- **移除版本**: 79

### Firefox

- **支持版本**: 65

### Safari

- **支持版本**: 16.4
- **支持版本**: 11.1
- **移除版本**: 16.4
- **部分实现**: 是
- **注意事项**:
  - Although the `onmessageerror` event handler property is supported, the `messageerror` event is never fired.

### webview_ios

- **支持版本**: 不支持

