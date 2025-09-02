# ReadableStream.transferable API 兼容性数据

## 基本信息

- **API名称**: `ReadableStream.transferable`
- **MDN文档**: [ReadableStream.transferable](https://developer.mozilla.org/docs/Web/API/Web_Workers_API/Transferable_objects)
- **规范文档**: [查看规范](https://streams.spec.whatwg.org/#rs-transfer)
- **标签**: `web-features:transferable-streams`

## 使用示例

### 基本用法

```javascript
// ReadableStream.transferable 使用示例
// 请查阅MDN文档了解具体用法
console.log('ReadableStream.transferable API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 87 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 103 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 16.5.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 87

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 103

### Node.js

- **支持版本**: 16.5.0

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ReadableStream.transferable是否支持
function isReadableStreamTransferableSupported() {
    return 'transferable' in readablestream && typeof readablestream.transferable === 'function';
}

if (isReadableStreamTransferableSupported()) {
    console.log('ReadableStream.transferable 支持');
    // 使用ReadableStream.transferable
} else {
    console.log('ReadableStream.transferable 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ReadableStream.transferable polyfill
if (!readablestream.transferable) {
    // 在这里添加polyfill实现
    console.log('加载ReadableStream.transferable polyfill');
}
```

