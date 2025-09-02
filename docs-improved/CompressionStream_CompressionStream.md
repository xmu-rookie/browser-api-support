# CompressionStream.CompressionStream API 兼容性数据

## 基本信息

- **API名称**: `CompressionStream.CompressionStream`
- **MDN文档**: [CompressionStream.CompressionStream](https://developer.mozilla.org/docs/Web/API/CompressionStream/CompressionStream)
- **规范文档**: [查看规范](https://compression.spec.whatwg.org/#dom-compressionstream-compressionstream)
- **标签**: `web-features:compression-streams`
- **描述**: `CompressionStream()` constructor

## 使用示例

### 基本用法

```javascript
// CompressionStream.CompressionStream 使用示例
// 请查阅MDN文档了解具体用法
console.log('CompressionStream.CompressionStream API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 80 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.19 |  |
| Edge | 同主版本 |  |
| Firefox | 113 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 17.0.0 |  |
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

- **支持版本**: 80

### Deno

- **支持版本**: 1.19

### Firefox

- **支持版本**: 113

### Node.js

- **支持版本**: 17.0.0

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查CompressionStream.CompressionStream是否支持
function isCompressionStreamCompressionStreamSupported() {
    return 'CompressionStream' in compressionstream && typeof compressionstream.CompressionStream === 'function';
}

if (isCompressionStreamCompressionStreamSupported()) {
    console.log('CompressionStream.CompressionStream 支持');
    // 使用CompressionStream.CompressionStream
} else {
    console.log('CompressionStream.CompressionStream 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CompressionStream.CompressionStream polyfill
if (!compressionstream.CompressionStream) {
    // 在这里添加polyfill实现
    console.log('加载CompressionStream.CompressionStream polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **deflate**: "deflate" compression
- **deflate-raw**: "deflate-raw" compression
- **gzip**: "gzip" compression

