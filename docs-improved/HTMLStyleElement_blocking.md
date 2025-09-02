# HTMLStyleElement.blocking API 兼容性数据

## 基本信息

- **API名称**: `HTMLStyleElement.blocking`
- **MDN文档**: [HTMLStyleElement.blocking](https://developer.mozilla.org/docs/Web/API/HTMLStyleElement/blocking)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/semantics.html#dom-style-blocking)
- **标签**: `web-features:blocking-render`

## 使用示例

### 基本用法

```javascript
// HTMLStyleElement.blocking 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLStyleElement.blocking API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 105 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18.2 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 105

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 18.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLStyleElement.blocking是否支持
function isHTMLStyleElementBlockingSupported() {
    return 'blocking' in htmlstyleelement && typeof htmlstyleelement.blocking === 'function';
}

if (isHTMLStyleElementBlockingSupported()) {
    console.log('HTMLStyleElement.blocking 支持');
    // 使用HTMLStyleElement.blocking
} else {
    console.log('HTMLStyleElement.blocking 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLStyleElement.blocking polyfill
if (!htmlstyleelement.blocking) {
    // 在这里添加polyfill实现
    console.log('加载HTMLStyleElement.blocking polyfill');
}
```

