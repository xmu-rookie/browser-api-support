# HTMLElement.title API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.title`
- **MDN文档**: [HTMLElement.title](https://developer.mozilla.org/docs/Web/API/HTMLElement/title)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dom.html#dom-title)
- **标签**: `web-features:title-attr`

## 使用示例

### 基本用法

```javascript
// HTMLElement.title 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.title API');
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

- **支持版本**: 5.5

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
// 检查HTMLElement.title是否支持
function isHTMLElementTitleSupported() {
    return 'title' in htmlelement && typeof htmlelement.title === 'function';
}

if (isHTMLElementTitleSupported()) {
    console.log('HTMLElement.title 支持');
    // 使用HTMLElement.title
} else {
    console.log('HTMLElement.title 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.title polyfill
if (!htmlelement.title) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.title polyfill');
}
```

