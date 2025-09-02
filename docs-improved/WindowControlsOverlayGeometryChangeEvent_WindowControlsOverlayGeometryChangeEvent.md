# WindowControlsOverlayGeometryChangeEvent.WindowControlsOverlayGeometryChangeEvent API 兼容性数据

## 基本信息

- **API名称**: `WindowControlsOverlayGeometryChangeEvent.WindowControlsOverlayGeometryChangeEvent`
- **MDN文档**: [WindowControlsOverlayGeometryChangeEvent.WindowControlsOverlayGeometryChangeEvent](https://developer.mozilla.org/docs/Web/API/WindowControlsOverlayGeometryChangeEvent/WindowControlsOverlayGeometryChangeEvent)
- **规范文档**: [查看规范](https://wicg.github.io/window-controls-overlay/#windowcontrolsoverlay-interface)
- **标签**: `web-features:window-controls-overlay`
- **描述**: `WindowControlsOverlayGeometryChangeEvent()` constructor

## 使用示例

### 基本用法

```javascript
// WindowControlsOverlayGeometryChangeEvent.WindowControlsOverlayGeometryChangeEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('WindowControlsOverlayGeometryChangeEvent.WindowControlsOverlayGeometryChangeEvent API');
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
// 检查WindowControlsOverlayGeometryChangeEvent.WindowControlsOverlayGeometryChangeEvent是否支持
function isWindowControlsOverlayGeometryChangeEventWindowControlsOverlayGeometryChangeEventSupported() {
    return 'WindowControlsOverlayGeometryChangeEvent' in windowcontrolsoverlaygeometrychangeevent && typeof windowcontrolsoverlaygeometrychangeevent.WindowControlsOverlayGeometryChangeEvent === 'function';
}

if (isWindowControlsOverlayGeometryChangeEventWindowControlsOverlayGeometryChangeEventSupported()) {
    console.log('WindowControlsOverlayGeometryChangeEvent.WindowControlsOverlayGeometryChangeEvent 支持');
    // 使用WindowControlsOverlayGeometryChangeEvent.WindowControlsOverlayGeometryChangeEvent
} else {
    console.log('WindowControlsOverlayGeometryChangeEvent.WindowControlsOverlayGeometryChangeEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WindowControlsOverlayGeometryChangeEvent.WindowControlsOverlayGeometryChangeEvent polyfill
if (!windowcontrolsoverlaygeometrychangeevent.WindowControlsOverlayGeometryChangeEvent) {
    // 在这里添加polyfill实现
    console.log('加载WindowControlsOverlayGeometryChangeEvent.WindowControlsOverlayGeometryChangeEvent polyfill');
}
```

