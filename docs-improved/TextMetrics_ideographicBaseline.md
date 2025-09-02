# TextMetrics.ideographicBaseline API 兼容性数据

## 基本信息

- **API名称**: `TextMetrics.ideographicBaseline`
- **MDN文档**: [TextMetrics.ideographicBaseline](https://developer.mozilla.org/docs/Web/API/TextMetrics/ideographicBaseline)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#dom-textmetrics-ideographicbaseline-dev)
- **标签**: `web-features:canvas-2d`

## 使用示例

### 基本用法

```javascript
// TextMetrics.ideographicBaseline 使用示例
// 请查阅MDN文档了解具体用法
console.log('TextMetrics.ideographicBaseline API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 118 |  |
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

- **支持版本**: 118

### Firefox

- **支持版本**: 116

### Safari

- **支持版本**: 11.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查TextMetrics.ideographicBaseline是否支持
function isTextMetricsIdeographicBaselineSupported() {
    return 'ideographicBaseline' in textmetrics && typeof textmetrics.ideographicBaseline === 'function';
}

if (isTextMetricsIdeographicBaselineSupported()) {
    console.log('TextMetrics.ideographicBaseline 支持');
    // 使用TextMetrics.ideographicBaseline
} else {
    console.log('TextMetrics.ideographicBaseline 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TextMetrics.ideographicBaseline polyfill
if (!textmetrics.ideographicBaseline) {
    // 在这里添加polyfill实现
    console.log('加载TextMetrics.ideographicBaseline polyfill');
}
```

