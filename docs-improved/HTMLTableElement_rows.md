# HTMLTableElement.rows API 兼容性数据

## 基本信息

- **API名称**: `HTMLTableElement.rows`
- **MDN文档**: [HTMLTableElement.rows](https://developer.mozilla.org/docs/Web/API/HTMLTableElement/rows)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/tables.html#dom-table-rows-dev)
- **标签**: `web-features:table`

## 使用示例

### 基本用法

```javascript
// HTMLTableElement.rows 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLTableElement.rows API');
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
// 检查HTMLTableElement.rows是否支持
function isHTMLTableElementRowsSupported() {
    return 'rows' in htmltableelement && typeof htmltableelement.rows === 'function';
}

if (isHTMLTableElementRowsSupported()) {
    console.log('HTMLTableElement.rows 支持');
    // 使用HTMLTableElement.rows
} else {
    console.log('HTMLTableElement.rows 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLTableElement.rows polyfill
if (!htmltableelement.rows) {
    // 在这里添加polyfill实现
    console.log('加载HTMLTableElement.rows polyfill');
}
```

