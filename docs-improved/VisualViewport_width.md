# VisualViewport.width API 兼容性数据

## 基本信息

- **API名称**: `VisualViewport.width`
- **MDN文档**: [VisualViewport.width](https://developer.mozilla.org/docs/Web/API/VisualViewport/width)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#dom-visualviewport-width)
- **标签**: `web-features:visual-viewport`

## 使用示例

### 基本用法

```javascript
// VisualViewport.width 使用示例
// 请查阅MDN文档了解具体用法
console.log('VisualViewport.width API');
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
// 检查VisualViewport.width是否支持
function isVisualViewportWidthSupported() {
    return 'width' in visualviewport && typeof visualviewport.width === 'function';
}

if (isVisualViewportWidthSupported()) {
    console.log('VisualViewport.width 支持');
    // 使用VisualViewport.width
} else {
    console.log('VisualViewport.width 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VisualViewport.width polyfill
if (!visualviewport.width) {
    // 在这里添加polyfill实现
    console.log('加载VisualViewport.width polyfill');
}
```

