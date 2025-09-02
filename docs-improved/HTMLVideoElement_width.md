# HTMLVideoElement.width API 兼容性数据

## 基本信息

- **API名称**: `HTMLVideoElement.width`
- **MDN文档**: [HTMLVideoElement.width](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/width)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/embedded-content-other.html#dom-dim-width)
- **标签**: `web-features:video`

## 使用示例

### 基本用法

```javascript
// HTMLVideoElement.width 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLVideoElement.width API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 3 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
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

- **支持版本**: 12

### Firefox

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 9

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
// 检查HTMLVideoElement.width是否支持
function isHTMLVideoElementWidthSupported() {
    return 'width' in htmlvideoelement && typeof htmlvideoelement.width === 'function';
}

if (isHTMLVideoElementWidthSupported()) {
    console.log('HTMLVideoElement.width 支持');
    // 使用HTMLVideoElement.width
} else {
    console.log('HTMLVideoElement.width 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLVideoElement.width polyfill
if (!htmlvideoelement.width) {
    // 在这里添加polyfill实现
    console.log('加载HTMLVideoElement.width polyfill');
}
```

