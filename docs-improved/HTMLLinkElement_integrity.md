# HTMLLinkElement.integrity API 兼容性数据

## 基本信息

- **API名称**: `HTMLLinkElement.integrity`
- **MDN文档**: [HTMLLinkElement.integrity](https://developer.mozilla.org/docs/Web/API/HTMLLinkElement/integrity)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/semantics.html#dom-link-integrity)
- **标签**: `web-features:link`

## 使用示例

### 基本用法

```javascript
// HTMLLinkElement.integrity 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLLinkElement.integrity API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 45 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 43 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 45

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 43

### Safari

- **支持版本**: 11.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLLinkElement.integrity是否支持
function isHTMLLinkElementIntegritySupported() {
    return 'integrity' in htmllinkelement && typeof htmllinkelement.integrity === 'function';
}

if (isHTMLLinkElementIntegritySupported()) {
    console.log('HTMLLinkElement.integrity 支持');
    // 使用HTMLLinkElement.integrity
} else {
    console.log('HTMLLinkElement.integrity 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLLinkElement.integrity polyfill
if (!htmllinkelement.integrity) {
    // 在这里添加polyfill实现
    console.log('加载HTMLLinkElement.integrity polyfill');
}
```

