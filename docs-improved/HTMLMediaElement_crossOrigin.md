# HTMLMediaElement.crossOrigin API 兼容性数据

## 基本信息

- **API名称**: `HTMLMediaElement.crossOrigin`
- **MDN文档**: [HTMLMediaElement.crossOrigin](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/crossOrigin)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#dom-media-crossorigin)
- **标签**: `web-features:video`

## 使用示例

### 基本用法

```javascript
// HTMLMediaElement.crossOrigin 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLMediaElement.crossOrigin API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 33 |  |
| Chrome Android | 同主版本 |  |
| Edge | 13 |  |
| Firefox | 22 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 33

### Edge

- **支持版本**: 13

### Firefox

- **支持版本**: 22
- **支持版本**: 12
- **移除版本**: 22

### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLMediaElement.crossOrigin是否支持
function isHTMLMediaElementCrossOriginSupported() {
    return 'crossOrigin' in htmlmediaelement && typeof htmlmediaelement.crossOrigin === 'function';
}

if (isHTMLMediaElementCrossOriginSupported()) {
    console.log('HTMLMediaElement.crossOrigin 支持');
    // 使用HTMLMediaElement.crossOrigin
} else {
    console.log('HTMLMediaElement.crossOrigin 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLMediaElement.crossOrigin polyfill
if (!htmlmediaelement.crossOrigin) {
    // 在这里添加polyfill实现
    console.log('加载HTMLMediaElement.crossOrigin polyfill');
}
```

