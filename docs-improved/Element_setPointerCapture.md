# Element.setPointerCapture API 兼容性数据

## 基本信息

- **API名称**: `Element.setPointerCapture`
- **MDN文档**: [Element.setPointerCapture](https://developer.mozilla.org/docs/Web/API/Element/setPointerCapture)
- **规范文档**: [查看规范](https://w3c.github.io/pointerevents/#dom-element-setpointercapture)
- **标签**: `web-features:pointer-events-api`

## 使用示例

### 基本用法

```javascript
// Element.setPointerCapture 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.setPointerCapture API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 55 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 59 | Before Firefox 82, `setPointerCapture()` throws `InvalidPointerId` for an invalid `pointerId` argume... |
| Firefox Android | 79 | Before Firefox 82, `setPointerCapture()` throws `InvalidPointerId` for an invalid `pointerId` argume... |
| Internet Explorer | 11 |  |
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

- **支持版本**: 55

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 59
- **注意事项**:
  - Before Firefox 82, `setPointerCapture()` throws `InvalidPointerId` for an invalid `pointerId` argument. From Firefox 82, it throws [the specified](https://w3c.github.io/pointerevents/#setting-pointer-capture) `NotFoundError` exception. See [bug 1662124](https://bugzil.la/1662124).

### Firefox Android

- **支持版本**: 79
- **注意事项**:
  - Before Firefox 82, `setPointerCapture()` throws `InvalidPointerId` for an invalid `pointerId` argument. From Firefox 82, it throws [the specified](https://w3c.github.io/pointerevents/#setting-pointer-capture) `NotFoundError` exception. See [bug 1662124](https://bugzil.la/1662124).

### Internet Explorer

- **支持版本**: 11
- **支持版本**: 10
- **前缀**: ms

### Safari

- **支持版本**: 13

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.setPointerCapture是否支持
function isElementSetPointerCaptureSupported() {
    return 'setPointerCapture' in element && typeof element.setPointerCapture === 'function';
}

if (isElementSetPointerCaptureSupported()) {
    console.log('Element.setPointerCapture 支持');
    // 使用Element.setPointerCapture
} else {
    console.log('Element.setPointerCapture 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.setPointerCapture polyfill
if (!element.setPointerCapture) {
    // 在这里添加polyfill实现
    console.log('加载Element.setPointerCapture polyfill');
}
```

