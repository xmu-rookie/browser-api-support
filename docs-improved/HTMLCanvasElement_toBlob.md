# HTMLCanvasElement.toBlob API 兼容性数据

## 基本信息

- **API名称**: `HTMLCanvasElement.toBlob`
- **MDN文档**: [HTMLCanvasElement.toBlob](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/toBlob)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#dom-canvas-toblob-dev)
- **标签**: `web-features:canvas`

## 使用示例

### 基本用法

```javascript
// HTMLCanvasElement.toBlob 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLCanvasElement.toBlob API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 50 |  |
| Chrome Android | 同主版本 |  |
| Edge | 79 |  |
| Firefox | 18 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 50

### Edge

- **支持版本**: 79
- **支持版本**: 12
- **移除版本**: 79
- **前缀**: ms

### Firefox

- **支持版本**: 18

### Internet Explorer

- **支持版本**: 10
- **前缀**: ms

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLCanvasElement.toBlob是否支持
function isHTMLCanvasElementToBlobSupported() {
    return 'toBlob' in htmlcanvaselement && typeof htmlcanvaselement.toBlob === 'function';
}

if (isHTMLCanvasElementToBlobSupported()) {
    console.log('HTMLCanvasElement.toBlob 支持');
    // 使用HTMLCanvasElement.toBlob
} else {
    console.log('HTMLCanvasElement.toBlob 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLCanvasElement.toBlob polyfill
if (!htmlcanvaselement.toBlob) {
    // 在这里添加polyfill实现
    console.log('加载HTMLCanvasElement.toBlob polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **quality_parameter**: `quality` parameter
- **type_parameter_jpeg**: `type` parameter supports `"image/jpeg"`
- **type_parameter_png**: `type` parameter supports `"image/png"`
- **type_parameter_webp**: `type` parameter supports `"image/webp"`

