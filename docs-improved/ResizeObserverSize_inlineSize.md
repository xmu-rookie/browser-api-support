# ResizeObserverSize.inlineSize API 兼容性数据

## 基本信息

- **API名称**: `ResizeObserverSize.inlineSize`
- **MDN文档**: [ResizeObserverSize.inlineSize](https://developer.mozilla.org/docs/Web/API/ResizeObserverSize/inlineSize)
- **规范文档**: [查看规范](https://drafts.csswg.org/resize-observer/#dom-resizeobserversize-inlinesize)
- **标签**: `web-features:resize-observer`

## 使用示例

### 基本用法

```javascript
// ResizeObserverSize.inlineSize 使用示例
// 请查阅MDN文档了解具体用法
console.log('ResizeObserverSize.inlineSize API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 84 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 69 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 84

### Firefox

- **支持版本**: 69

### Safari

- **支持版本**: 15.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查ResizeObserverSize.inlineSize是否支持
function isResizeObserverSizeInlineSizeSupported() {
    return 'inlineSize' in resizeobserversize && typeof resizeobserversize.inlineSize === 'function';
}

if (isResizeObserverSizeInlineSizeSupported()) {
    console.log('ResizeObserverSize.inlineSize 支持');
    // 使用ResizeObserverSize.inlineSize
} else {
    console.log('ResizeObserverSize.inlineSize 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ResizeObserverSize.inlineSize polyfill
if (!resizeobserversize.inlineSize) {
    // 在这里添加polyfill实现
    console.log('加载ResizeObserverSize.inlineSize polyfill');
}
```

