# ImageDecoder.completed API 兼容性数据

## 基本信息

- **API名称**: `ImageDecoder.completed`
- **MDN文档**: [ImageDecoder.completed](https://developer.mozilla.org/docs/Web/API/ImageDecoder/completed)
- **规范文档**: [查看规范](https://w3c.github.io/webcodecs/#dom-imagedecoder-completed)
- **标签**: `web-features:webcodecs`

## 使用示例

### 基本用法

```javascript
// ImageDecoder.completed 使用示例
// 请查阅MDN文档了解具体用法
console.log('ImageDecoder.completed API');
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
// 检查ImageDecoder.completed是否支持
function isImageDecoderCompletedSupported() {
    return 'completed' in imagedecoder && typeof imagedecoder.completed === 'function';
}

if (isImageDecoderCompletedSupported()) {
    console.log('ImageDecoder.completed 支持');
    // 使用ImageDecoder.completed
} else {
    console.log('ImageDecoder.completed 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ImageDecoder.completed polyfill
if (!imagedecoder.completed) {
    // 在这里添加polyfill实现
    console.log('加载ImageDecoder.completed polyfill');
}
```

