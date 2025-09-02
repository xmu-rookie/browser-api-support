# DedicatedWorkerGlobalScope.postMessage API 兼容性数据

## 基本信息

- **API名称**: `DedicatedWorkerGlobalScope.postMessage`
- **MDN文档**: [DedicatedWorkerGlobalScope.postMessage](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/postMessage)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/workers.html#dom-dedicatedworkerglobalscope-postmessage-dev)
- **标签**: `web-features:postmessage`

## 使用示例

### 基本用法

```javascript
// DedicatedWorkerGlobalScope.postMessage 使用示例
// 请查阅MDN文档了解具体用法
console.log('DedicatedWorkerGlobalScope.postMessage API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 4 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.14 | The `message` parameter does not support cloning `Blob` values. |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 10.6 |  |
| Opera Android | 11 |  |
| Safari | 4 |  |
| Safari iOS | 5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 4

### Deno

- **支持版本**: 1.14
- **注意事项**:
  - The `message` parameter does not support cloning `Blob` values.
- **支持版本**: 1.12
- **移除版本**: 1.14
- **部分实现**: 是
- **注意事项**:
  - The `message` parameter does not support cloning `Blob` values.
  - The `transfer` parameter does not accept `ArrayBuffer` items. Passing an `ArrayBuffer` results in an error being thrown.
- **支持版本**: 1.10
- **移除版本**: 1.12
- **部分实现**: 是
- **注意事项**:
  - The `message` parameter does not support cloning `SharedArrayBuffer` or `Blob` values.
  - The `transfer` parameter is ignored.
- **支持版本**: 1.0
- **移除版本**: 1.10
- **部分实现**: 是
- **注意事项**:
  - Data passed in the `message` parameter is serialized with JSON, not the structured clone algorithm.
  - The `transfer` parameter is ignored.

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: 10.6

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 4

### Safari iOS

- **支持版本**: 5

