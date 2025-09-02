# ImageDecoder.isTypeSupported_static API 兼容性数据

## 基本信息

- **API名称**: `ImageDecoder.isTypeSupported_static`
- **MDN文档**: [ImageDecoder.isTypeSupported_static](https://developer.mozilla.org/docs/Web/API/ImageDecoder/isTypeSupported_static)
- **规范文档**: [查看规范](https://w3c.github.io/webcodecs/#dom-imagedecoder-istypesupported)
- **标签**: `web-features:webcodecs`
- **描述**: `isTypeSupported()` static method

## 使用示例

### 基本用法

```javascript
// ImageDecoder.isTypeSupported_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('ImageDecoder.isTypeSupported_static API');
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
// 检查ImageDecoder.isTypeSupported_static是否支持
function isImageDecoderIsTypeSupported_staticSupported() {
    return 'isTypeSupported_static' in imagedecoder && typeof imagedecoder.isTypeSupported_static === 'function';
}

if (isImageDecoderIsTypeSupported_staticSupported()) {
    console.log('ImageDecoder.isTypeSupported_static 支持');
    // 使用ImageDecoder.isTypeSupported_static
} else {
    console.log('ImageDecoder.isTypeSupported_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ImageDecoder.isTypeSupported_static polyfill
if (!imagedecoder.isTypeSupported_static) {
    // 在这里添加polyfill实现
    console.log('加载ImageDecoder.isTypeSupported_static polyfill');
}
```

