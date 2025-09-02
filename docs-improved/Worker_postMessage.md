# Worker.postMessage API 兼容性数据

## 基本信息

- **API名称**: `Worker.postMessage`
- **MDN文档**: [Worker.postMessage](https://developer.mozilla.org/docs/Web/API/Worker/postMessage)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/workers.html#dom-worker-postmessage-dev)
- **标签**: `web-features:postmessage`

## 使用示例

### 基本用法

```javascript
// Worker.postMessage 使用示例
// 请查阅MDN文档了解具体用法
console.log('Worker.postMessage API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 2 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.14 | The `message` parameter does not support cloning `Blob` values. |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 | Internet Explorer does not support `Transferable` objects. |
| Node.js | 11.7.0 | Only accepts an array of transfer objects as the second parameter, not an options object with a `tra... |
| Oculus | 同主版本 |  |
| Opera | 10.6 |  |
| Opera Android | 11 |  |
| Safari | 4 |  |
| Safari iOS | 5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 2

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
  - The `message` parameter does not support `SharedArrayBuffer`.
  - The `transfer` parameter is not supported, and results in an error being thrown.
- **支持版本**: 1.0
- **移除版本**: 1.10
- **部分实现**: 是
- **注意事项**:
  - Data passed in the `message` parameter is serialized with JSON, not the structured clone algorithm.
  - The `transfer` parameter is not supported, and results in an error being thrown.

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 10
- **注意事项**:
  - Internet Explorer does not support `Transferable` objects.

### Node.js

- **支持版本**: 11.7.0
- **部分实现**: 是
- **注意事项**:
  - Only accepts an array of transfer objects as the second parameter, not an options object with a `transfer` property.
  - Only supports transferring `ArrayBuffer` and `MessagePort` objects.

### Opera

- **支持版本**: 10.6

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 4

### Safari iOS

- **支持版本**: 5

## 兼容性检查代码

### 特性检测

```javascript
// 检查Worker.postMessage是否支持
function isWorkerPostMessageSupported() {
    return 'postMessage' in worker && typeof worker.postMessage === 'function';
}

if (isWorkerPostMessageSupported()) {
    console.log('Worker.postMessage 支持');
    // 使用Worker.postMessage
} else {
    console.log('Worker.postMessage 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Worker.postMessage polyfill
if (!worker.postMessage) {
    // 在这里添加polyfill实现
    console.log('加载Worker.postMessage polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **options_includeUserActivation_parameter**: `options.includeUserActivation` parameter

