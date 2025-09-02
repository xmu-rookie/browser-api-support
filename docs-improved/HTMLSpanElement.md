# HTMLSpanElement API 兼容性数据

## 基本信息

- **API名称**: `HTMLSpanElement`
- **MDN文档**: [HTMLSpanElement](https://developer.mozilla.org/docs/Web/API/HTMLSpanElement)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/text-level-semantics.html#htmlspanelement)
- **标签**: `web-features:span`

## 使用示例

### 基本用法

```javascript
// HTMLSpanElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLSpanElement API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 15 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5.5 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 15

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 5.5

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLSpanElement是否支持
function isHTMLSpanElementSupported() {
    return 'HTMLSpanElement' in window || typeof HTMLSpanElement !== 'undefined';
}

if (isHTMLSpanElementSupported()) {
    console.log('HTMLSpanElement 支持');
    // 使用HTMLSpanElement
} else {
    console.log('HTMLSpanElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLSpanElement polyfill
if (!window.HTMLSpanElement) {
    // 在这里添加polyfill实现
    console.log('加载HTMLSpanElement polyfill');
}
```

