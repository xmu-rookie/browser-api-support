# HTMLVideoElement.resize_event API 兼容性数据

## 基本信息

- **API名称**: `HTMLVideoElement.resize_event`
- **MDN文档**: [HTMLVideoElement.resize_event](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/resize_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#event-media-resize,https://html.spec.whatwg.org/multipage/webappapis.html#handler-onresize)
- **标签**: `web-features:video`
- **描述**: `resize` event

## 使用示例

### 基本用法

```javascript
// HTMLVideoElement.resize_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLVideoElement.resize_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 3 |  |
| Chrome Android | 同主版本 |  |
| Edge | 79 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 | The `onresize` event handler property is not supported. |
| Oculus | 同主版本 |  |
| Opera | 10.5 |  |
| Opera Android | 11 |  |
| Safari | 3.1 |  |
| Safari iOS | 3 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 3

### Edge

- **支持版本**: 79
- **支持版本**: 12
- **移除版本**: 79
- **部分实现**: 是
- **注意事项**:
  - The `onresize` event handler property is not supported.

### Firefox

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 9
- **部分实现**: 是
- **注意事项**:
  - The `onresize` event handler property is not supported.

### Opera

- **支持版本**: 10.5

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 3.1

### Safari iOS

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLVideoElement.resize_event是否支持
function isHTMLVideoElementResize_eventSupported() {
    return 'resize_event' in htmlvideoelement && typeof htmlvideoelement.resize_event === 'function';
}

if (isHTMLVideoElementResize_eventSupported()) {
    console.log('HTMLVideoElement.resize_event 支持');
    // 使用HTMLVideoElement.resize_event
} else {
    console.log('HTMLVideoElement.resize_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLVideoElement.resize_event polyfill
if (!htmlvideoelement.resize_event) {
    // 在这里添加polyfill实现
    console.log('加载HTMLVideoElement.resize_event polyfill');
}
```

