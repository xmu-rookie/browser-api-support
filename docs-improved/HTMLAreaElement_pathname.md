# HTMLAreaElement.pathname API 兼容性数据

## 基本信息

- **API名称**: `HTMLAreaElement.pathname`
- **MDN文档**: [HTMLAreaElement.pathname](https://developer.mozilla.org/docs/Web/API/HTMLAreaElement/pathname)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/links.html#dom-hyperlink-pathname-dev)
- **标签**: `web-features:image-maps`

## 使用示例

### 基本用法

```javascript
// HTMLAreaElement.pathname 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLAreaElement.pathname API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 | Before Firefox 53, the `pathname` and `search` `HTMLHyperlinkElementUtils` properties returned the w... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5.5 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1
- **注意事项**:
  - Before Firefox 53, the `pathname` and `search` `HTMLHyperlinkElementUtils` properties returned the wrong parts of the URL. For example, for a URL of `https://z.com/x?a=true&amp;b=false`, `pathname` would return `'/x?a=true&amp;b=false'` and `search` would return '', rather than `'/x'` and `'?a=true&amp;b=false'` respectively. This has now been fixed.

### Internet Explorer

- **支持版本**: 5.5

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLAreaElement.pathname是否支持
function isHTMLAreaElementPathnameSupported() {
    return 'pathname' in htmlareaelement && typeof htmlareaelement.pathname === 'function';
}

if (isHTMLAreaElementPathnameSupported()) {
    console.log('HTMLAreaElement.pathname 支持');
    // 使用HTMLAreaElement.pathname
} else {
    console.log('HTMLAreaElement.pathname 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLAreaElement.pathname polyfill
if (!htmlareaelement.pathname) {
    // 在这里添加polyfill实现
    console.log('加载HTMLAreaElement.pathname polyfill');
}
```

