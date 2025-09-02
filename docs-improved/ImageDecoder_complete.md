# ImageDecoder.complete API 兼容性数据

## 基本信息

- **API名称**: `ImageDecoder.complete`
- **MDN文档**: [ImageDecoder.complete](https://developer.mozilla.org/docs/Web/API/ImageDecoder/complete)
- **规范文档**: [查看规范](https://w3c.github.io/webcodecs/#dom-imagedecoder-complete)
- **标签**: `web-features:webcodecs`

## 使用示例

### 基本用法

```javascript
// ImageDecoder.complete 使用示例
// 请查阅MDN文档了解具体用法
console.log('ImageDecoder.complete API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 94 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 133 |  |
| Firefox Android | 同主版本 |  |
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

- **支持版本**: 94

### Firefox

- **支持版本**: 133

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ImageDecoder.complete是否支持
function isImageDecoderCompleteSupported() {
    return 'complete' in imagedecoder && typeof imagedecoder.complete === 'function';
}

if (isImageDecoderCompleteSupported()) {
    console.log('ImageDecoder.complete 支持');
    // 使用ImageDecoder.complete
} else {
    console.log('ImageDecoder.complete 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ImageDecoder.complete polyfill
if (!imagedecoder.complete) {
    // 在这里添加polyfill实现
    console.log('加载ImageDecoder.complete polyfill');
}
```

