# VisualViewport API 兼容性数据

## 基本信息

- **API名称**: `VisualViewport`
- **MDN文档**: [VisualViewport](https://developer.mozilla.org/docs/Web/API/VisualViewport)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#the-visualviewport-interface)
- **标签**: `web-features:visual-viewport`

## 使用示例

### 基本用法

```javascript
// VisualViewport 使用示例
// 请查阅MDN文档了解具体用法
console.log('VisualViewport API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 61 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 91 |  |
| Firefox Android | 68 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 61

### Firefox

- **支持版本**: 91

### Firefox Android

- **支持版本**: 68

### Safari

- **支持版本**: 13

## 兼容性检查代码

### 特性检测

```javascript
// 检查VisualViewport是否支持
function isVisualViewportSupported() {
    return 'VisualViewport' in window || typeof VisualViewport !== 'undefined';
}

if (isVisualViewportSupported()) {
    console.log('VisualViewport 支持');
    // 使用VisualViewport
} else {
    console.log('VisualViewport 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VisualViewport polyfill
if (!window.VisualViewport) {
    // 在这里添加polyfill实现
    console.log('加载VisualViewport polyfill');
}
```

