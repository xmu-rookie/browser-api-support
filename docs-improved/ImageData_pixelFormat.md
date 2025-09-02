# ImageData.pixelFormat API 兼容性数据

## 基本信息

- **API名称**: `ImageData.pixelFormat`
- **MDN文档**: [ImageData.pixelFormat](https://developer.mozilla.org/docs/Web/API/ImageData/pixelFormat)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#dom-imagedata-pixelformat)

## 使用示例

### 基本用法

```javascript
// ImageData.pixelFormat 使用示例
// 请查阅MDN文档了解具体用法
console.log('ImageData.pixelFormat API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 137 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 137

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ImageData.pixelFormat是否支持
function isImageDataPixelFormatSupported() {
    return 'pixelFormat' in imagedata && typeof imagedata.pixelFormat === 'function';
}

if (isImageDataPixelFormatSupported()) {
    console.log('ImageData.pixelFormat 支持');
    // 使用ImageData.pixelFormat
} else {
    console.log('ImageData.pixelFormat 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ImageData.pixelFormat polyfill
if (!imagedata.pixelFormat) {
    // 在这里添加polyfill实现
    console.log('加载ImageData.pixelFormat polyfill');
}
```

