# ReadableStreamDefaultReader.closed API 兼容性数据

## 基本信息

- **API名称**: `ReadableStreamDefaultReader.closed`
- **MDN文档**: [ReadableStreamDefaultReader.closed](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultReader/closed)
- **规范文档**: [查看规范](https://streams.spec.whatwg.org/#ref-for-generic-reader-closed②)
- **标签**: `web-features:streams`

## 使用示例

### 基本用法

```javascript
// ReadableStreamDefaultReader.closed 使用示例
// 请查阅MDN文档了解具体用法
console.log('ReadableStreamDefaultReader.closed API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 43 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 同主版本 |  |
| Firefox | 65 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 16.5.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 43

### Deno

- **支持版本**: 1.0

### Firefox

- **支持版本**: 65

### Node.js

- **支持版本**: 16.5.0

### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查ReadableStreamDefaultReader.closed是否支持
function isReadableStreamDefaultReaderClosedSupported() {
    return 'closed' in readablestreamdefaultreader && typeof readablestreamdefaultreader.closed === 'function';
}

if (isReadableStreamDefaultReaderClosedSupported()) {
    console.log('ReadableStreamDefaultReader.closed 支持');
    // 使用ReadableStreamDefaultReader.closed
} else {
    console.log('ReadableStreamDefaultReader.closed 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ReadableStreamDefaultReader.closed polyfill
if (!readablestreamdefaultreader.closed) {
    // 在这里添加polyfill实现
    console.log('加载ReadableStreamDefaultReader.closed polyfill');
}
```

