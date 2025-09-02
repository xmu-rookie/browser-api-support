# VisualViewport.scrollend_event API 兼容性数据

## 基本信息

- **API名称**: `VisualViewport.scrollend_event`
- **MDN文档**: [VisualViewport.scrollend_event](https://developer.mozilla.org/docs/Web/API/VisualViewport/scrollend_event)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom-view/#eventdef-document-scrollend)
- **标签**: `web-features:visual-viewport`
- **描述**: `scrollend` event

## 使用示例

### 基本用法

```javascript
// VisualViewport.scrollend_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('VisualViewport.scrollend_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 126 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 126
- **支持版本**: 114
- **移除版本**: 126
- **部分实现**: 是
- **注意事项**:
  - The `onscrollend` event handler property is not supported. See [bug 325307785](https://crbug.com/325307785).

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查VisualViewport.scrollend_event是否支持
function isVisualViewportScrollend_eventSupported() {
    return 'scrollend_event' in visualviewport && typeof visualviewport.scrollend_event === 'function';
}

if (isVisualViewportScrollend_eventSupported()) {
    console.log('VisualViewport.scrollend_event 支持');
    // 使用VisualViewport.scrollend_event
} else {
    console.log('VisualViewport.scrollend_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VisualViewport.scrollend_event polyfill
if (!visualviewport.scrollend_event) {
    // 在这里添加polyfill实现
    console.log('加载VisualViewport.scrollend_event polyfill');
}
```

