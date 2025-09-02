# ReadableStreamBYOBReader.read API 兼容性数据

## 基本信息

- **API名称**: `ReadableStreamBYOBReader.read`
- **MDN文档**: [ReadableStreamBYOBReader.read](https://developer.mozilla.org/docs/Web/API/ReadableStreamBYOBReader/read)
- **规范文档**: [查看规范](https://streams.spec.whatwg.org/#byob-reader-read)
- **标签**: `web-features:readable-byte-streams`

## 使用示例

### 基本用法

```javascript
// ReadableStreamBYOBReader.read 使用示例
// 请查阅MDN文档了解具体用法
console.log('ReadableStreamBYOBReader.read API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 89 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.16 |  |
| Edge | 同主版本 |  |
| Firefox | 102 |  |
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

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 89

### Deno

- **支持版本**: 1.16

### Firefox

- **支持版本**: 102

### Node.js

- **支持版本**: 16.5.0

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ReadableStreamBYOBReader.read是否支持
function isReadableStreamBYOBReaderReadSupported() {
    return 'read' in readablestreambyobreader && typeof readablestreambyobreader.read === 'function';
}

if (isReadableStreamBYOBReaderReadSupported()) {
    console.log('ReadableStreamBYOBReader.read 支持');
    // 使用ReadableStreamBYOBReader.read
} else {
    console.log('ReadableStreamBYOBReader.read 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ReadableStreamBYOBReader.read polyfill
if (!readablestreambyobreader.read) {
    // 在这里添加polyfill实现
    console.log('加载ReadableStreamBYOBReader.read polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **options_min_parameter**: `options.min` parameter

