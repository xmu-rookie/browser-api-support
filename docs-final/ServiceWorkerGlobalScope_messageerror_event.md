# ServiceWorkerGlobalScope.messageerror_event API 兼容性数据

## 基本信息

- **API名称**: `ServiceWorkerGlobalScope.messageerror_event`
- **MDN文档**: [ServiceWorkerGlobalScope.messageerror_event](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/messageerror_event)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#eventdef-serviceworkerglobalscope-messageerror,https://w3c.github.io/ServiceWorker/#dom-serviceworkerglobalscope-onmessageerror)
- **标签**: `web-features:messageerror`
- **描述**: `messageerror` event

## 使用示例

### 基本用法

```javascript
// ServiceWorkerGlobalScope.messageerror_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('ServiceWorkerGlobalScope.messageerror_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 81 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 65 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 | Although the `onmessageerror` property is supported, the `messageerror` event is never fired. See [b... |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 81

### Firefox

- **支持版本**: 65

### Safari

- **支持版本**: 11.1
- **部分实现**: 是
- **注意事项**:
  - Although the `onmessageerror` property is supported, the `messageerror` event is never fired. See [bug 272967](https://webkit.org/b/272967).

### webview_ios

- **支持版本**: 不支持

