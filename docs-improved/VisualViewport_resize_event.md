# VisualViewport.resize_event API 兼容性数据

## 基本信息

- **API名称**: `VisualViewport.resize_event`
- **MDN文档**: [VisualViewport.resize_event](https://developer.mozilla.org/docs/Web/API/VisualViewport/resize_event)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#eventdef-window-resize)
- **标签**: `web-features:visual-viewport`
- **描述**: `resize` event

## 使用示例

### 基本用法

```javascript
// VisualViewport.resize_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('VisualViewport.resize_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 62 |  |
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

- **支持版本**: 62
- **支持版本**: 61
- **移除版本**: 62
- **部分实现**: 是
- **注意事项**:
  - The `onresize` event handler property is not supported.

### Firefox

- **支持版本**: 91

### Firefox Android

- **支持版本**: 68

### Safari

- **支持版本**: 13

## 兼容性检查代码

### 特性检测

```javascript
// 检查VisualViewport.resize_event是否支持
function isVisualViewportResize_eventSupported() {
    return 'resize_event' in visualviewport && typeof visualviewport.resize_event === 'function';
}

if (isVisualViewportResize_eventSupported()) {
    console.log('VisualViewport.resize_event 支持');
    // 使用VisualViewport.resize_event
} else {
    console.log('VisualViewport.resize_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VisualViewport.resize_event polyfill
if (!visualviewport.resize_event) {
    // 在这里添加polyfill实现
    console.log('加载VisualViewport.resize_event polyfill');
}
```

