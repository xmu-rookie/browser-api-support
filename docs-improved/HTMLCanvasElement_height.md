# HTMLCanvasElement.height API 兼容性数据

## 基本信息

- **API名称**: `HTMLCanvasElement.height`
- **MDN文档**: [HTMLCanvasElement.height](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/height)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#dom-canvas-height)
- **标签**: `web-features:canvas`

## 使用示例

### 基本用法

```javascript
// HTMLCanvasElement.height 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLCanvasElement.height API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 9 |  |
| Opera Android | 10.1 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1.5

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 9

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLCanvasElement.height是否支持
function isHTMLCanvasElementHeightSupported() {
    return 'height' in htmlcanvaselement && typeof htmlcanvaselement.height === 'function';
}

if (isHTMLCanvasElementHeightSupported()) {
    console.log('HTMLCanvasElement.height 支持');
    // 使用HTMLCanvasElement.height
} else {
    console.log('HTMLCanvasElement.height 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLCanvasElement.height polyfill
if (!htmlcanvaselement.height) {
    // 在这里添加polyfill实现
    console.log('加载HTMLCanvasElement.height polyfill');
}
```

