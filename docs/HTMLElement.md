# HTMLElement API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement`
- **MDN文档**: [HTMLElement](https://developer.mozilla.org/docs/Web/API/HTMLElement)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dom.html#htmlelement)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// HTMLElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement API');
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
| oculus | 同主版本 |  |
| Opera | 8 |  |
| Opera Android | 10.1 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 1 |  |
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

- **支持版本**: 8

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1

### WebView Android

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement是否支持
function isHTMLElementSupported() {
    return typeof HTMLElement !== 'undefined';
}

if (isHTMLElementSupported()) {
    console.log('HTMLElement 支持');
    // 使用HTMLElement
} else {
    console.log('HTMLElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement polyfill
if (!window.HTMLElement) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement polyfill');
}
```

