# HTMLTableRowElement API 兼容性数据

## 基本信息

- **API名称**: `HTMLTableRowElement`
- **MDN文档**: [HTMLTableRowElement](https://developer.mozilla.org/docs/Web/API/HTMLTableRowElement)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/tables.html#htmltablerowelement)
- **标签**: `web-features:table`

## 使用示例

### 基本用法

```javascript
// HTMLTableRowElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLTableRowElement API');
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
// 检查HTMLTableRowElement是否支持
function isHTMLTableRowElementSupported() {
    return typeof HTMLTableRowElement !== 'undefined';
}

if (isHTMLTableRowElementSupported()) {
    console.log('HTMLTableRowElement 支持');
    // 使用HTMLTableRowElement
} else {
    console.log('HTMLTableRowElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLTableRowElement polyfill
if (!window.HTMLTableRowElement) {
    // 在这里添加polyfill实现
    console.log('加载HTMLTableRowElement polyfill');
}
```

