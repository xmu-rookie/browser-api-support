# HTMLMetaElement.media API 兼容性数据

## 基本信息

- **API名称**: `HTMLMetaElement.media`
- **MDN文档**: [HTMLMetaElement.media](https://developer.mozilla.org/docs/Web/API/HTMLMetaElement/media)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/semantics.html#dom-meta-media)
- **标签**: `web-features:meta`

## 使用示例

### 基本用法

```javascript
// HTMLMetaElement.media 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLMetaElement.media API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 93 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 106 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 93

### Firefox

- **支持版本**: 106

### Safari

- **支持版本**: 15

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLMetaElement.media是否支持
function isHTMLMetaElementMediaSupported() {
    return 'media' in htmlmetaelement && typeof htmlmetaelement.media === 'function';
}

if (isHTMLMetaElementMediaSupported()) {
    console.log('HTMLMetaElement.media 支持');
    // 使用HTMLMetaElement.media
} else {
    console.log('HTMLMetaElement.media 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLMetaElement.media polyfill
if (!htmlmetaelement.media) {
    // 在这里添加polyfill实现
    console.log('加载HTMLMetaElement.media polyfill');
}
```

