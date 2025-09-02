# HTMLLinkElement.crossOrigin API 兼容性数据

## 基本信息

- **API名称**: `HTMLLinkElement.crossOrigin`
- **MDN文档**: [HTMLLinkElement.crossOrigin](https://developer.mozilla.org/docs/Web/API/HTMLLinkElement/crossOrigin)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/semantics.html#dom-link-crossorigin)
- **标签**: `web-features:link`

## 使用示例

### 基本用法

```javascript
// HTMLLinkElement.crossOrigin 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLLinkElement.crossOrigin API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 34 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 18 |  |
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

- **支持版本**: 34

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 18

### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLLinkElement.crossOrigin是否支持
function isHTMLLinkElementCrossOriginSupported() {
    return 'crossOrigin' in htmllinkelement && typeof htmllinkelement.crossOrigin === 'function';
}

if (isHTMLLinkElementCrossOriginSupported()) {
    console.log('HTMLLinkElement.crossOrigin 支持');
    // 使用HTMLLinkElement.crossOrigin
} else {
    console.log('HTMLLinkElement.crossOrigin 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLLinkElement.crossOrigin polyfill
if (!htmllinkelement.crossOrigin) {
    // 在这里添加polyfill实现
    console.log('加载HTMLLinkElement.crossOrigin polyfill');
}
```

