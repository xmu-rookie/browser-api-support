# HTMLEmbedElement.height API 兼容性数据

## 基本信息

- **API名称**: `HTMLEmbedElement.height`
- **MDN文档**: [HTMLEmbedElement.height](https://developer.mozilla.org/docs/Web/API/HTMLEmbedElement/height)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/embedded-content-other.html#dom-dim-height)
- **标签**: `web-features:embed`

## 使用示例

### 基本用法

```javascript
// HTMLEmbedElement.height 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLEmbedElement.height API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 6 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
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

- **支持版本**: 6

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLEmbedElement.height是否支持
function isHTMLEmbedElementHeightSupported() {
    return 'height' in htmlembedelement && typeof htmlembedelement.height === 'function';
}

if (isHTMLEmbedElementHeightSupported()) {
    console.log('HTMLEmbedElement.height 支持');
    // 使用HTMLEmbedElement.height
} else {
    console.log('HTMLEmbedElement.height 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLEmbedElement.height polyfill
if (!htmlembedelement.height) {
    // 在这里添加polyfill实现
    console.log('加载HTMLEmbedElement.height polyfill');
}
```

