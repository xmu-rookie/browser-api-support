# TextMetrics.alphabeticBaseline API 兼容性数据

## 基本信息

- **API名称**: `TextMetrics.alphabeticBaseline`
- **MDN文档**: [TextMetrics.alphabeticBaseline](https://developer.mozilla.org/docs/Web/API/TextMetrics/alphabeticBaseline)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#dom-textmetrics-alphabeticbaseline-dev)
- **标签**: `web-features:canvas-2d`

## 使用示例

### 基本用法

```javascript
// TextMetrics.alphabeticBaseline 使用示例
// 请查阅MDN文档了解具体用法
console.log('TextMetrics.alphabeticBaseline API');
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
// 检查TextMetrics.alphabeticBaseline是否支持
function isTextMetricsAlphabeticBaselineSupported() {
    return 'alphabeticBaseline' in textmetrics && typeof textmetrics.alphabeticBaseline === 'function';
}

if (isTextMetricsAlphabeticBaselineSupported()) {
    console.log('TextMetrics.alphabeticBaseline 支持');
    // 使用TextMetrics.alphabeticBaseline
} else {
    console.log('TextMetrics.alphabeticBaseline 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TextMetrics.alphabeticBaseline polyfill
if (!textmetrics.alphabeticBaseline) {
    // 在这里添加polyfill实现
    console.log('加载TextMetrics.alphabeticBaseline polyfill');
}
```

