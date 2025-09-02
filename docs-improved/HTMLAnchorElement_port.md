# HTMLAnchorElement.port API 兼容性数据

## 基本信息

- **API名称**: `HTMLAnchorElement.port`
- **MDN文档**: [HTMLAnchorElement.port](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/port)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/links.html#dom-hyperlink-port-dev)
- **标签**: `web-features:a`

## 使用示例

### 基本用法

```javascript
// HTMLAnchorElement.port 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLAnchorElement.port API');
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
// 检查HTMLAnchorElement.port是否支持
function isHTMLAnchorElementPortSupported() {
    return 'port' in htmlanchorelement && typeof htmlanchorelement.port === 'function';
}

if (isHTMLAnchorElementPortSupported()) {
    console.log('HTMLAnchorElement.port 支持');
    // 使用HTMLAnchorElement.port
} else {
    console.log('HTMLAnchorElement.port 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLAnchorElement.port polyfill
if (!htmlanchorelement.port) {
    // 在这里添加polyfill实现
    console.log('加载HTMLAnchorElement.port polyfill');
}
```

