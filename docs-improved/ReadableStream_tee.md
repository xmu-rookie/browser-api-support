# ReadableStream.tee API 兼容性数据

## 基本信息

- **API名称**: `ReadableStream.tee`
- **MDN文档**: [ReadableStream.tee](https://developer.mozilla.org/docs/Web/API/ReadableStream/tee)
- **规范文档**: [查看规范](https://streams.spec.whatwg.org/#ref-for-rs-tee②)
- **标签**: `web-features:streams`

## 使用示例

### 基本用法

```javascript
// ReadableStream.tee 使用示例
// 请查阅MDN文档了解具体用法
console.log('ReadableStream.tee API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 52 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 同主版本 |  |
| Firefox | 65 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 16.5.0 | Before 18.10.0 or 16.18.0, teeing a readable byte stream is not supported. |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 52

### Deno

- **支持版本**: 1.0

### Firefox

- **支持版本**: 65

### Node.js

- **支持版本**: 16.5.0
- **注意事项**:
  - Before 18.10.0 or 16.18.0, teeing a readable byte stream is not supported.

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查ReadableStream.tee是否支持
function isReadableStreamTeeSupported() {
    return 'tee' in readablestream && typeof readablestream.tee === 'function';
}

if (isReadableStreamTeeSupported()) {
    console.log('ReadableStream.tee 支持');
    // 使用ReadableStream.tee
} else {
    console.log('ReadableStream.tee 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ReadableStream.tee polyfill
if (!readablestream.tee) {
    // 在这里添加polyfill实现
    console.log('加载ReadableStream.tee polyfill');
}
```

