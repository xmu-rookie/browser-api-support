# HTMLVideoElement.poster API 兼容性数据

## 基本信息

- **API名称**: `HTMLVideoElement.poster`
- **MDN文档**: [HTMLVideoElement.poster](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement/poster)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#dom-video-poster)
- **标签**: `web-features:video`

## 使用示例

### 基本用法

```javascript
// HTMLVideoElement.poster 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLVideoElement.poster API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 3 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.6 |  |
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

- **支持版本**: 3.6

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
// 检查HTMLVideoElement.poster是否支持
function isHTMLVideoElementPosterSupported() {
    return 'poster' in htmlvideoelement && typeof htmlvideoelement.poster === 'function';
}

if (isHTMLVideoElementPosterSupported()) {
    console.log('HTMLVideoElement.poster 支持');
    // 使用HTMLVideoElement.poster
} else {
    console.log('HTMLVideoElement.poster 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLVideoElement.poster polyfill
if (!htmlvideoelement.poster) {
    // 在这里添加polyfill实现
    console.log('加载HTMLVideoElement.poster polyfill');
}
```

