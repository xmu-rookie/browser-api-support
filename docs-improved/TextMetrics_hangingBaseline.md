# TextMetrics.hangingBaseline API 兼容性数据

## 基本信息

- **API名称**: `TextMetrics.hangingBaseline`
- **MDN文档**: [TextMetrics.hangingBaseline](https://developer.mozilla.org/docs/Web/API/TextMetrics/hangingBaseline)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#dom-textmetrics-hangingbaseline-dev)
- **标签**: `web-features:canvas-2d`

## 使用示例

### 基本用法

```javascript
// TextMetrics.hangingBaseline 使用示例
// 请查阅MDN文档了解具体用法
console.log('TextMetrics.hangingBaseline API');
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
// 检查TextMetrics.hangingBaseline是否支持
function isTextMetricsHangingBaselineSupported() {
    return 'hangingBaseline' in textmetrics && typeof textmetrics.hangingBaseline === 'function';
}

if (isTextMetricsHangingBaselineSupported()) {
    console.log('TextMetrics.hangingBaseline 支持');
    // 使用TextMetrics.hangingBaseline
} else {
    console.log('TextMetrics.hangingBaseline 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TextMetrics.hangingBaseline polyfill
if (!textmetrics.hangingBaseline) {
    // 在这里添加polyfill实现
    console.log('加载TextMetrics.hangingBaseline polyfill');
}
```

