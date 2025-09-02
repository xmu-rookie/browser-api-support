# HTMLSourceElement.width API 兼容性数据

## 基本信息

- **API名称**: `HTMLSourceElement.width`
- **MDN文档**: [HTMLSourceElement.width](https://developer.mozilla.org/docs/Web/API/HTMLSourceElement/width)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/embedded-content-other.html#dom-dim-width)

## 使用示例

### 基本用法

```javascript
// HTMLSourceElement.width 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLSourceElement.width API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 90 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 108 |  |
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

- **支持版本**: 90

### Firefox

- **支持版本**: 108

### Safari

- **支持版本**: 15

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLSourceElement.width是否支持
function isHTMLSourceElementWidthSupported() {
    return 'width' in htmlsourceelement && typeof htmlsourceelement.width === 'function';
}

if (isHTMLSourceElementWidthSupported()) {
    console.log('HTMLSourceElement.width 支持');
    // 使用HTMLSourceElement.width
} else {
    console.log('HTMLSourceElement.width 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLSourceElement.width polyfill
if (!htmlsourceelement.width) {
    // 在这里添加polyfill实现
    console.log('加载HTMLSourceElement.width polyfill');
}
```

