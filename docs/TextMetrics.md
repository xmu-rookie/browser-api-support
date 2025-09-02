# TextMetrics API 兼容性数据

## 基本信息

- **API名称**: `TextMetrics`
- **MDN文档**: [TextMetrics](https://developer.mozilla.org/docs/Web/API/TextMetrics)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#textmetrics)
- **标签**: `web-features:canvas-2d`

## 使用示例

### 基本用法

```javascript
// TextMetrics 使用示例
// 请查阅MDN文档了解具体用法
console.log('TextMetrics API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 2 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1.5 |  |
| Firefox Android | 31 |  |
| Internet Explorer | 9 |  |
| oculus | 同主版本 |  |
| Opera | 9 |  |
| Opera Android | 10.1 |  |
| Safari | 4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 2

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1.5

### Firefox Android

- **支持版本**: 31

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 9

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查TextMetrics是否支持
function isTextMetricsSupported() {
    return 'TextMetrics' in window || typeof TextMetrics !== 'undefined';
}

if (isTextMetricsSupported()) {
    console.log('TextMetrics 支持');
    // 使用TextMetrics
} else {
    console.log('TextMetrics 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TextMetrics polyfill
if (!window.TextMetrics) {
    // 在这里添加polyfill实现
    console.log('加载TextMetrics polyfill');
}
```

