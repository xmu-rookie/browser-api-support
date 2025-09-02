# ReadableStreamDefaultReader.ReadableStreamDefaultReader API 兼容性数据

## 基本信息

- **API名称**: `ReadableStreamDefaultReader.ReadableStreamDefaultReader`
- **MDN文档**: [ReadableStreamDefaultReader.ReadableStreamDefaultReader](https://developer.mozilla.org/docs/Web/API/ReadableStreamDefaultReader/ReadableStreamDefaultReader)
- **规范文档**: [查看规范](https://streams.spec.whatwg.org/#ref-for-default-reader-constructor①)
- **标签**: `web-features:streams`
- **描述**: `ReadableStreamDefaultReader()` constructor

## 使用示例

### 基本用法

```javascript
// ReadableStreamDefaultReader.ReadableStreamDefaultReader 使用示例
// 请查阅MDN文档了解具体用法
console.log('ReadableStreamDefaultReader.ReadableStreamDefaultReader API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 78 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 同主版本 |  |
| Firefox | 100 |  |
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

### Chrome

- **支持版本**: 78

### Deno

- **支持版本**: 1.0

### Firefox

- **支持版本**: 100

### Node.js

- **支持版本**: 16.5.0

### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查ReadableStreamDefaultReader.ReadableStreamDefaultReader是否支持
function isReadableStreamDefaultReaderReadableStreamDefaultReaderSupported() {
    return 'ReadableStreamDefaultReader' in readablestreamdefaultreader && typeof readablestreamdefaultreader.ReadableStreamDefaultReader === 'function';
}

if (isReadableStreamDefaultReaderReadableStreamDefaultReaderSupported()) {
    console.log('ReadableStreamDefaultReader.ReadableStreamDefaultReader 支持');
    // 使用ReadableStreamDefaultReader.ReadableStreamDefaultReader
} else {
    console.log('ReadableStreamDefaultReader.ReadableStreamDefaultReader 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ReadableStreamDefaultReader.ReadableStreamDefaultReader polyfill
if (!readablestreamdefaultreader.ReadableStreamDefaultReader) {
    // 在这里添加polyfill实现
    console.log('加载ReadableStreamDefaultReader.ReadableStreamDefaultReader polyfill');
}
```

