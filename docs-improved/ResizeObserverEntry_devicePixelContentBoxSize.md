# ResizeObserverEntry.devicePixelContentBoxSize API 兼容性数据

## 基本信息

- **API名称**: `ResizeObserverEntry.devicePixelContentBoxSize`
- **MDN文档**: [ResizeObserverEntry.devicePixelContentBoxSize](https://developer.mozilla.org/docs/Web/API/ResizeObserverEntry/devicePixelContentBoxSize)
- **规范文档**: [查看规范](https://drafts.csswg.org/resize-observer/#dom-resizeobserverentry-devicepixelcontentboxsize)
- **标签**: `web-features:resize-observer`

## 使用示例

### 基本用法

```javascript
// ResizeObserverEntry.devicePixelContentBoxSize 使用示例
// 请查阅MDN文档了解具体用法
console.log('ResizeObserverEntry.devicePixelContentBoxSize API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 84 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 93 |  |
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

- **支持版本**: 84

### Firefox

- **支持版本**: 93

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ResizeObserverEntry.devicePixelContentBoxSize是否支持
function isResizeObserverEntryDevicePixelContentBoxSizeSupported() {
    return 'devicePixelContentBoxSize' in resizeobserverentry && typeof resizeobserverentry.devicePixelContentBoxSize === 'function';
}

if (isResizeObserverEntryDevicePixelContentBoxSizeSupported()) {
    console.log('ResizeObserverEntry.devicePixelContentBoxSize 支持');
    // 使用ResizeObserverEntry.devicePixelContentBoxSize
} else {
    console.log('ResizeObserverEntry.devicePixelContentBoxSize 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ResizeObserverEntry.devicePixelContentBoxSize polyfill
if (!resizeobserverentry.devicePixelContentBoxSize) {
    // 在这里添加polyfill实现
    console.log('加载ResizeObserverEntry.devicePixelContentBoxSize polyfill');
}
```

