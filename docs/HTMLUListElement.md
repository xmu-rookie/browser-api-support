# HTMLUListElement API 兼容性数据

## 基本信息

- **API名称**: `HTMLUListElement`
- **MDN文档**: [HTMLUListElement](https://developer.mozilla.org/docs/Web/API/HTMLUListElement)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/grouping-content.html#htmlulistelement)
- **标签**: `web-features:list-elements`

## 使用示例

### 基本用法

```javascript
// HTMLUListElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLUListElement API');
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
// 检查HTMLUListElement是否支持
function isHTMLUListElementSupported() {
    return typeof HTMLUListElement !== 'undefined';
}

if (isHTMLUListElementSupported()) {
    console.log('HTMLUListElement 支持');
    // 使用HTMLUListElement
} else {
    console.log('HTMLUListElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLUListElement polyfill
if (!window.HTMLUListElement) {
    // 在这里添加polyfill实现
    console.log('加载HTMLUListElement polyfill');
}
```

