# TextDecoder.decode API 兼容性数据

## 基本信息

- **API名称**: `TextDecoder.decode`
- **MDN文档**: [TextDecoder.decode](https://developer.mozilla.org/docs/Web/API/TextDecoder/decode)
- **规范文档**: [查看规范](https://encoding.spec.whatwg.org/#ref-for-dom-textdecoder-decode①)
- **标签**: `web-features:text-encoding`

## 使用示例

### 基本用法

```javascript
// TextDecoder.decode 使用示例
// 请查阅MDN文档了解具体用法
console.log('TextDecoder.decode API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 38 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 | Before Deno 1.11, passing `option.stream` is not supported and results in an error being thrown. |
| Edge | 同主版本 |  |
| Firefox | 19 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 8.3.0 |  |
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

- **支持版本**: 38

### Deno

- **支持版本**: 1.0
- **注意事项**:
  - Before Deno 1.11, passing `option.stream` is not supported and results in an error being thrown.

### Firefox

- **支持版本**: 19
- **支持版本**: 18
- **移除版本**: 19
- **部分实现**: 是
- **注意事项**:
  - Implemented a slightly different version of the spec.

### Node.js

- **支持版本**: 8.3.0

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查TextDecoder.decode是否支持
function isTextDecoderDecodeSupported() {
    return 'decode' in textdecoder && typeof textdecoder.decode === 'function';
}

if (isTextDecoderDecodeSupported()) {
    console.log('TextDecoder.decode 支持');
    // 使用TextDecoder.decode
} else {
    console.log('TextDecoder.decode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TextDecoder.decode polyfill
if (!textdecoder.decode) {
    // 在这里添加polyfill实现
    console.log('加载TextDecoder.decode polyfill');
}
```

