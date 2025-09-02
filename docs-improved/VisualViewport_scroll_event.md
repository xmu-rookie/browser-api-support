# VisualViewport.scroll_event API 兼容性数据

## 基本信息

- **API名称**: `VisualViewport.scroll_event`
- **MDN文档**: [VisualViewport.scroll_event](https://developer.mozilla.org/docs/Web/API/VisualViewport/scroll_event)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#eventdef-document-scroll)
- **标签**: `web-features:visual-viewport`
- **描述**: `scroll` event

## 使用示例

### 基本用法

```javascript
// VisualViewport.scroll_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('VisualViewport.scroll_event API');
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
  - The `onscroll` event handler property is not supported.

### Firefox

- **支持版本**: 91

### Firefox Android

- **支持版本**: 68

### Safari

- **支持版本**: 13

## 兼容性检查代码

### 特性检测

```javascript
// 检查VisualViewport.scroll_event是否支持
function isVisualViewportScroll_eventSupported() {
    return 'scroll_event' in visualviewport && typeof visualviewport.scroll_event === 'function';
}

if (isVisualViewportScroll_eventSupported()) {
    console.log('VisualViewport.scroll_event 支持');
    // 使用VisualViewport.scroll_event
} else {
    console.log('VisualViewport.scroll_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VisualViewport.scroll_event polyfill
if (!visualviewport.scroll_event) {
    // 在这里添加polyfill实现
    console.log('加载VisualViewport.scroll_event polyfill');
}
```

