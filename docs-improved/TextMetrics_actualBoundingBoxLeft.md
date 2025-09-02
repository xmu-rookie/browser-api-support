# TextMetrics.actualBoundingBoxLeft API 兼容性数据

## 基本信息

- **API名称**: `TextMetrics.actualBoundingBoxLeft`
- **MDN文档**: [TextMetrics.actualBoundingBoxLeft](https://developer.mozilla.org/docs/Web/API/TextMetrics/actualBoundingBoxLeft)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#dom-textmetrics-actualboundingboxleft-dev)
- **标签**: `web-features:canvas-2d`

## 使用示例

### 基本用法

```javascript
// TextMetrics.actualBoundingBoxLeft 使用示例
// 请查阅MDN文档了解具体用法
console.log('TextMetrics.actualBoundingBoxLeft API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 77 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 74 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 77

### Firefox

- **支持版本**: 74

### Safari

- **支持版本**: 11.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查TextMetrics.actualBoundingBoxLeft是否支持
function isTextMetricsActualBoundingBoxLeftSupported() {
    return 'actualBoundingBoxLeft' in textmetrics && typeof textmetrics.actualBoundingBoxLeft === 'function';
}

if (isTextMetricsActualBoundingBoxLeftSupported()) {
    console.log('TextMetrics.actualBoundingBoxLeft 支持');
    // 使用TextMetrics.actualBoundingBoxLeft
} else {
    console.log('TextMetrics.actualBoundingBoxLeft 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TextMetrics.actualBoundingBoxLeft polyfill
if (!textmetrics.actualBoundingBoxLeft) {
    // 在这里添加polyfill实现
    console.log('加载TextMetrics.actualBoundingBoxLeft polyfill');
}
```

