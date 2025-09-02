# TextDecoder.fatal API 兼容性数据

## 基本信息

- **API名称**: `TextDecoder.fatal`
- **MDN文档**: [TextDecoder.fatal](https://developer.mozilla.org/docs/Web/API/TextDecoder/fatal)
- **规范文档**: [查看规范](https://encoding.spec.whatwg.org/#ref-for-dom-textdecoder-fatal①)
- **标签**: `web-features:text-encoding`

## 使用示例

### 基本用法

```javascript
// TextDecoder.fatal 使用示例
// 请查阅MDN文档了解具体用法
console.log('TextDecoder.fatal API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 38 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 同主版本 |  |
| Firefox | 36 |  |
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

### Firefox

- **支持版本**: 36

### Node.js

- **支持版本**: 8.3.0

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查TextDecoder.fatal是否支持
function isTextDecoderFatalSupported() {
    return 'fatal' in textdecoder && typeof textdecoder.fatal === 'function';
}

if (isTextDecoderFatalSupported()) {
    console.log('TextDecoder.fatal 支持');
    // 使用TextDecoder.fatal
} else {
    console.log('TextDecoder.fatal 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TextDecoder.fatal polyfill
if (!textdecoder.fatal) {
    // 在这里添加polyfill实现
    console.log('加载TextDecoder.fatal polyfill');
}
```

