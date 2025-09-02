# HTMLAreaElement.href API 兼容性数据

## 基本信息

- **API名称**: `HTMLAreaElement.href`
- **MDN文档**: [HTMLAreaElement.href](https://developer.mozilla.org/docs/Web/API/HTMLAreaElement/href)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/links.html#dom-hyperlink-href-dev)
- **标签**: `web-features:image-maps`

## 使用示例

### 基本用法

```javascript
// HTMLAreaElement.href 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLAreaElement.href API');
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
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
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

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLAreaElement.href是否支持
function isHTMLAreaElementHrefSupported() {
    return 'href' in htmlareaelement && typeof htmlareaelement.href === 'function';
}

if (isHTMLAreaElementHrefSupported()) {
    console.log('HTMLAreaElement.href 支持');
    // 使用HTMLAreaElement.href
} else {
    console.log('HTMLAreaElement.href 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLAreaElement.href polyfill
if (!htmlareaelement.href) {
    // 在这里添加polyfill实现
    console.log('加载HTMLAreaElement.href polyfill');
}
```

