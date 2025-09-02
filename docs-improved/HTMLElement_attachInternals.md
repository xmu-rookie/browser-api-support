# HTMLElement.attachInternals API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.attachInternals`
- **MDN文档**: [HTMLElement.attachInternals](https://developer.mozilla.org/docs/Web/API/HTMLElement/attachInternals)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/custom-elements.html#dom-attachinternals)
- **标签**: `web-features:form-associated-custom-elements`

## 使用示例

### 基本用法

```javascript
// HTMLElement.attachInternals 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.attachInternals API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 77 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 93 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 77

### Firefox

- **支持版本**: 93

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.attachInternals是否支持
function isHTMLElementAttachInternalsSupported() {
    return 'attachInternals' in htmlelement && typeof htmlelement.attachInternals === 'function';
}

if (isHTMLElementAttachInternalsSupported()) {
    console.log('HTMLElement.attachInternals 支持');
    // 使用HTMLElement.attachInternals
} else {
    console.log('HTMLElement.attachInternals 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.attachInternals polyfill
if (!htmlelement.attachInternals) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.attachInternals polyfill');
}
```

