# OffscreenCanvas.contextrestored_event API 兼容性数据

## 基本信息

- **API名称**: `OffscreenCanvas.contextrestored_event`
- **MDN文档**: [OffscreenCanvas.contextrestored_event](https://developer.mozilla.org/docs/Web/API/OffscreenCanvas/contextrestored_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-contextrestored,https://html.spec.whatwg.org/multipage/canvas.html#handler-offscreencanvas-oncontextrestored)
- **标签**: `web-features:canvas-context-lost`
- **描述**: `contextrestored` event

## 使用示例

### 基本用法

```javascript
// OffscreenCanvas.contextrestored_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('OffscreenCanvas.contextrestored_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 99 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 125 |  |
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

- **支持版本**: 99

### Firefox

- **支持版本**: 125

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查OffscreenCanvas.contextrestored_event是否支持
function isOffscreenCanvasContextrestored_eventSupported() {
    return 'contextrestored_event' in offscreencanvas && typeof offscreencanvas.contextrestored_event === 'function';
}

if (isOffscreenCanvasContextrestored_eventSupported()) {
    console.log('OffscreenCanvas.contextrestored_event 支持');
    // 使用OffscreenCanvas.contextrestored_event
} else {
    console.log('OffscreenCanvas.contextrestored_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// OffscreenCanvas.contextrestored_event polyfill
if (!offscreencanvas.contextrestored_event) {
    // 在这里添加polyfill实现
    console.log('加载OffscreenCanvas.contextrestored_event polyfill');
}
```

