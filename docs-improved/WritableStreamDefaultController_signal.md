# WritableStreamDefaultController.signal API 兼容性数据

## 基本信息

- **API名称**: `WritableStreamDefaultController.signal`
- **MDN文档**: [WritableStreamDefaultController.signal](https://developer.mozilla.org/docs/Web/API/WritableStreamDefaultController/signal)
- **规范文档**: [查看规范](https://streams.spec.whatwg.org/#ref-for-ws-default-controller-signal①)
- **标签**: `web-features:streams`

## 使用示例

### 基本用法

```javascript
// WritableStreamDefaultController.signal 使用示例
// 请查阅MDN文档了解具体用法
console.log('WritableStreamDefaultController.signal API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 98 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.16 |  |
| Edge | 同主版本 |  |
| Firefox | 100 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 16.5.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 98

### Deno

- **支持版本**: 1.16

### Firefox

- **支持版本**: 100

### Node.js

- **支持版本**: 16.5.0

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查WritableStreamDefaultController.signal是否支持
function isWritableStreamDefaultControllerSignalSupported() {
    return 'signal' in writablestreamdefaultcontroller && typeof writablestreamdefaultcontroller.signal === 'function';
}

if (isWritableStreamDefaultControllerSignalSupported()) {
    console.log('WritableStreamDefaultController.signal 支持');
    // 使用WritableStreamDefaultController.signal
} else {
    console.log('WritableStreamDefaultController.signal 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WritableStreamDefaultController.signal polyfill
if (!writablestreamdefaultcontroller.signal) {
    // 在这里添加polyfill实现
    console.log('加载WritableStreamDefaultController.signal polyfill');
}
```

