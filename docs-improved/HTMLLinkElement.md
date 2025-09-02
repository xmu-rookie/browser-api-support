# HTMLLinkElement API 兼容性数据

## 基本信息

- **API名称**: `HTMLLinkElement`
- **MDN文档**: [HTMLLinkElement](https://developer.mozilla.org/docs/Web/API/HTMLLinkElement)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/semantics.html#htmllinkelement)
- **标签**: `web-features:link`

## 使用示例

### 基本用法

```javascript
// HTMLLinkElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLLinkElement API');
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
// 检查HTMLLinkElement是否支持
function isHTMLLinkElementSupported() {
    return 'HTMLLinkElement' in window || typeof HTMLLinkElement !== 'undefined';
}

if (isHTMLLinkElementSupported()) {
    console.log('HTMLLinkElement 支持');
    // 使用HTMLLinkElement
} else {
    console.log('HTMLLinkElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLLinkElement polyfill
if (!window.HTMLLinkElement) {
    // 在这里添加polyfill实现
    console.log('加载HTMLLinkElement polyfill');
}
```

