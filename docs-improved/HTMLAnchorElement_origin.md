# HTMLAnchorElement.origin API 兼容性数据

## 基本信息

- **API名称**: `HTMLAnchorElement.origin`
- **MDN文档**: [HTMLAnchorElement.origin](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/origin)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/links.html#dom-hyperlink-origin-dev)
- **标签**: `web-features:a`

## 使用示例

### 基本用法

```javascript
// HTMLAnchorElement.origin 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLAnchorElement.origin API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 8 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 26 | Before Firefox 49, results for URL using the `blob` scheme incorrectly returned `null`. |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 5.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 8

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 26
- **注意事项**:
  - Before Firefox 49, results for URL using the `blob` scheme incorrectly returned `null`.

### Safari

- **支持版本**: 5.1

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLAnchorElement.origin是否支持
function isHTMLAnchorElementOriginSupported() {
    return 'origin' in htmlanchorelement && typeof htmlanchorelement.origin === 'function';
}

if (isHTMLAnchorElementOriginSupported()) {
    console.log('HTMLAnchorElement.origin 支持');
    // 使用HTMLAnchorElement.origin
} else {
    console.log('HTMLAnchorElement.origin 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLAnchorElement.origin polyfill
if (!htmlanchorelement.origin) {
    // 在这里添加polyfill实现
    console.log('加载HTMLAnchorElement.origin polyfill');
}
```

