# TextDecoderStream.encoding API 兼容性数据

## 基本信息

- **API名称**: `TextDecoderStream.encoding`
- **MDN文档**: [TextDecoderStream.encoding](https://developer.mozilla.org/docs/Web/API/TextDecoderStream/encoding)
- **规范文档**: [查看规范](https://encoding.spec.whatwg.org/#dom-textdecoder-encoding)
- **标签**: `web-features:text-encoding`

## 使用示例

### 基本用法

```javascript
// TextDecoderStream.encoding 使用示例
// 请查阅MDN文档了解具体用法
console.log('TextDecoderStream.encoding API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.1.23 |  |
| Chrome | 71 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.11 |  |
| Edge | 同主版本 |  |
| Firefox | 105 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 16.6.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.1.23

### Chrome

- **支持版本**: 71

### Deno

- **支持版本**: 1.11

### Firefox

- **支持版本**: 105

### Node.js

- **支持版本**: 16.6.0

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查TextDecoderStream.encoding是否支持
function isTextDecoderStreamEncodingSupported() {
    return 'encoding' in textdecoderstream && typeof textdecoderstream.encoding === 'function';
}

if (isTextDecoderStreamEncodingSupported()) {
    console.log('TextDecoderStream.encoding 支持');
    // 使用TextDecoderStream.encoding
} else {
    console.log('TextDecoderStream.encoding 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TextDecoderStream.encoding polyfill
if (!textdecoderstream.encoding) {
    // 在这里添加polyfill实现
    console.log('加载TextDecoderStream.encoding polyfill');
}
```

