# WindowControlsOverlay API 兼容性数据

## 基本信息

- **API名称**: `WindowControlsOverlay`
- **MDN文档**: [WindowControlsOverlay](https://developer.mozilla.org/docs/Web/API/WindowControlsOverlay)
- **规范文档**: [查看规范](https://wicg.github.io/window-controls-overlay/#windowcontrolsoverlay-interface)
- **标签**: `web-features:window-controls-overlay`

## 使用示例

### 基本用法

```javascript
// WindowControlsOverlay 使用示例
// 请查阅MDN文档了解具体用法
console.log('WindowControlsOverlay API');
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
// 检查WindowControlsOverlay是否支持
function isWindowControlsOverlaySupported() {
    return 'WindowControlsOverlay' in window || typeof WindowControlsOverlay !== 'undefined';
}

if (isWindowControlsOverlaySupported()) {
    console.log('WindowControlsOverlay 支持');
    // 使用WindowControlsOverlay
} else {
    console.log('WindowControlsOverlay 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WindowControlsOverlay polyfill
if (!window.WindowControlsOverlay) {
    // 在这里添加polyfill实现
    console.log('加载WindowControlsOverlay polyfill');
}
```

