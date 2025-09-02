# HTMLAnchorElement.hostname API 兼容性数据

## 基本信息

- **API名称**: `HTMLAnchorElement.hostname`
- **MDN文档**: [HTMLAnchorElement.hostname](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/hostname)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/links.html#dom-hyperlink-hostname-dev)
- **标签**: `web-features:a`

## 使用示例

### 基本用法

```javascript
// HTMLAnchorElement.hostname 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLAnchorElement.hostname API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
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

### Internet Explorer

- **支持版本**: 5.5

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLAnchorElement.hostname是否支持
function isHTMLAnchorElementHostnameSupported() {
    return 'hostname' in htmlanchorelement && typeof htmlanchorelement.hostname === 'function';
}

if (isHTMLAnchorElementHostnameSupported()) {
    console.log('HTMLAnchorElement.hostname 支持');
    // 使用HTMLAnchorElement.hostname
} else {
    console.log('HTMLAnchorElement.hostname 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLAnchorElement.hostname polyfill
if (!htmlanchorelement.hostname) {
    // 在这里添加polyfill实现
    console.log('加载HTMLAnchorElement.hostname polyfill');
}
```

