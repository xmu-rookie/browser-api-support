# WindowControlsOverlay.geometrychange_event API 兼容性数据

## 基本信息

- **API名称**: `WindowControlsOverlay.geometrychange_event`
- **MDN文档**: [WindowControlsOverlay.geometrychange_event](https://developer.mozilla.org/docs/Web/API/WindowControlsOverlay/geometrychange_event)
- **规范文档**: [查看规范](https://wicg.github.io/window-controls-overlay/#the-ongeometrychange-attribute)
- **标签**: `web-features:window-controls-overlay`
- **描述**: `geometrychange` event

## 使用示例

### 基本用法

```javascript
// WindowControlsOverlay.geometrychange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('WindowControlsOverlay.geometrychange_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 105 |  |
| Chrome Android | 不支持 |  |
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

- **支持版本**: 105

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查WindowControlsOverlay.geometrychange_event是否支持
function isWindowControlsOverlayGeometrychange_eventSupported() {
    return 'geometrychange_event' in windowcontrolsoverlay && typeof windowcontrolsoverlay.geometrychange_event === 'function';
}

if (isWindowControlsOverlayGeometrychange_eventSupported()) {
    console.log('WindowControlsOverlay.geometrychange_event 支持');
    // 使用WindowControlsOverlay.geometrychange_event
} else {
    console.log('WindowControlsOverlay.geometrychange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WindowControlsOverlay.geometrychange_event polyfill
if (!windowcontrolsoverlay.geometrychange_event) {
    // 在这里添加polyfill实现
    console.log('加载WindowControlsOverlay.geometrychange_event polyfill');
}
```

