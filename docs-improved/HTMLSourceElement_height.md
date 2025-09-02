# HTMLSourceElement.height API 兼容性数据

## 基本信息

- **API名称**: `HTMLSourceElement.height`
- **MDN文档**: [HTMLSourceElement.height](https://developer.mozilla.org/docs/Web/API/HTMLSourceElement/height)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/embedded-content-other.html#dom-dim-height)

## 使用示例

### 基本用法

```javascript
// HTMLSourceElement.height 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLSourceElement.height API');
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
// 检查HTMLSourceElement.height是否支持
function isHTMLSourceElementHeightSupported() {
    return 'height' in htmlsourceelement && typeof htmlsourceelement.height === 'function';
}

if (isHTMLSourceElementHeightSupported()) {
    console.log('HTMLSourceElement.height 支持');
    // 使用HTMLSourceElement.height
} else {
    console.log('HTMLSourceElement.height 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLSourceElement.height polyfill
if (!htmlsourceelement.height) {
    // 在这里添加polyfill实现
    console.log('加载HTMLSourceElement.height polyfill');
}
```

