# HTMLPictureElement API 兼容性数据

## 基本信息

- **API名称**: `HTMLPictureElement`
- **MDN文档**: [HTMLPictureElement](https://developer.mozilla.org/docs/Web/API/HTMLPictureElement)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/embedded-content.html#htmlpictureelement)
- **标签**: `web-features:picture`

## 使用示例

### 基本用法

```javascript
// HTMLPictureElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLPictureElement API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 38 |  |
| Chrome Android | 同主版本 |  |
| Edge | 13 |  |
| Firefox | 38 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 9.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 38

### Edge

- **支持版本**: 13

### Firefox

- **支持版本**: 38

### Safari

- **支持版本**: 9.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLPictureElement是否支持
function isHTMLPictureElementSupported() {
    return 'HTMLPictureElement' in window || typeof HTMLPictureElement !== 'undefined';
}

if (isHTMLPictureElementSupported()) {
    console.log('HTMLPictureElement 支持');
    // 使用HTMLPictureElement
} else {
    console.log('HTMLPictureElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLPictureElement polyfill
if (!window.HTMLPictureElement) {
    // 在这里添加polyfill实现
    console.log('加载HTMLPictureElement polyfill');
}
```

