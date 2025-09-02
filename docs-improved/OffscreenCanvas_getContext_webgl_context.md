# OffscreenCanvas.getContext.webgl_context API 兼容性数据

## 基本信息

- **API名称**: `OffscreenCanvas.getContext.webgl_context`
- **标签**: `web-features:offscreen-canvas`
- **描述**: `webgl` context

## 使用示例

### 基本用法

```javascript
// OffscreenCanvas.getContext.webgl_context 使用示例
// 请查阅MDN文档了解具体用法
console.log('OffscreenCanvas.getContext.webgl_context API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 69 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 105 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 69

### Firefox

- **支持版本**: 105

### Safari

- **支持版本**: 17

## 兼容性检查代码

### 特性检测

```javascript
// 检查OffscreenCanvas.getContext.webgl_context是否支持
function isOffscreenCanvasGetContextSupported() {
    return 'getContext' in offscreencanvas && typeof offscreencanvas.getContext === 'function';
}

if (isOffscreenCanvasGetContextSupported()) {
    console.log('OffscreenCanvas.getContext.webgl_context 支持');
    // 使用OffscreenCanvas.getContext.webgl_context
} else {
    console.log('OffscreenCanvas.getContext.webgl_context 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// OffscreenCanvas.getContext.webgl_context polyfill
if (!offscreencanvas.getContext) {
    // 在这里添加polyfill实现
    console.log('加载OffscreenCanvas.getContext.webgl_context polyfill');
}
```

