# TextMetrics.fontBoundingBoxDescent API 兼容性数据

## 基本信息

- **API名称**: `TextMetrics.fontBoundingBoxDescent`
- **MDN文档**: [TextMetrics.fontBoundingBoxDescent](https://developer.mozilla.org/docs/Web/API/TextMetrics/fontBoundingBoxDescent)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#dom-textmetrics-fontboundingboxdescent-dev)
- **标签**: `web-features:canvas-2d`

## 使用示例

### 基本用法

```javascript
// TextMetrics.fontBoundingBoxDescent 使用示例
// 请查阅MDN文档了解具体用法
console.log('TextMetrics.fontBoundingBoxDescent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 87 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 116 |  |
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

- **支持版本**: 87

### Firefox

- **支持版本**: 116

### Safari

- **支持版本**: 11.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查TextMetrics.fontBoundingBoxDescent是否支持
function isTextMetricsFontBoundingBoxDescentSupported() {
    return 'fontBoundingBoxDescent' in textmetrics && typeof textmetrics.fontBoundingBoxDescent === 'function';
}

if (isTextMetricsFontBoundingBoxDescentSupported()) {
    console.log('TextMetrics.fontBoundingBoxDescent 支持');
    // 使用TextMetrics.fontBoundingBoxDescent
} else {
    console.log('TextMetrics.fontBoundingBoxDescent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TextMetrics.fontBoundingBoxDescent polyfill
if (!textmetrics.fontBoundingBoxDescent) {
    // 在这里添加polyfill实现
    console.log('加载TextMetrics.fontBoundingBoxDescent polyfill');
}
```

