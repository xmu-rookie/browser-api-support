# Element.hasPointerCapture API 兼容性数据

## 基本信息

- **API名称**: `Element.hasPointerCapture`
- **MDN文档**: [Element.hasPointerCapture](https://developer.mozilla.org/docs/Web/API/Element/hasPointerCapture)
- **规范文档**: [查看规范](https://w3c.github.io/pointerevents/#dom-element-haspointercapture)
- **标签**: `web-features:pointer-events-api`

## 使用示例

### 基本用法

```javascript
// Element.hasPointerCapture 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.hasPointerCapture API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 55 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 59 |  |
| Firefox Android | 79 |  |
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

### Firefox

- **支持版本**: 59

### Firefox Android

- **支持版本**: 79

### Safari

- **支持版本**: 13

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.hasPointerCapture是否支持
function isElementHasPointerCaptureSupported() {
    return 'hasPointerCapture' in element && typeof element.hasPointerCapture === 'function';
}

if (isElementHasPointerCaptureSupported()) {
    console.log('Element.hasPointerCapture 支持');
    // 使用Element.hasPointerCapture
} else {
    console.log('Element.hasPointerCapture 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.hasPointerCapture polyfill
if (!element.hasPointerCapture) {
    // 在这里添加polyfill实现
    console.log('加载Element.hasPointerCapture polyfill');
}
```

