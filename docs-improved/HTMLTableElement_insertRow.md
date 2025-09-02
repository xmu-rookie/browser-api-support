# HTMLTableElement.insertRow API 兼容性数据

## 基本信息

- **API名称**: `HTMLTableElement.insertRow`
- **MDN文档**: [HTMLTableElement.insertRow](https://developer.mozilla.org/docs/Web/API/HTMLTableElement/insertRow)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/tables.html#dom-table-insertrow-dev)
- **标签**: `web-features:table`

## 使用示例

### 基本用法

```javascript
// HTMLTableElement.insertRow 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLTableElement.insertRow API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 | Starting with Firefox 20, the `index` parameter has been made optional and defaults to -1 as per HTM... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5.5 |  |
| Oculus | 同主版本 |  |
| Opera | 10 |  |
| Opera Android | 10.1 |  |
| Safari | 4 |  |
| Safari iOS | 3 |  |
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
- **注意事项**:
  - Starting with Firefox 20, the `index` parameter has been made optional and defaults to -1 as per HTML specification.

### Internet Explorer

- **支持版本**: 5.5

### Opera

- **支持版本**: 10

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 4

### Safari iOS

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLTableElement.insertRow是否支持
function isHTMLTableElementInsertRowSupported() {
    return 'insertRow' in htmltableelement && typeof htmltableelement.insertRow === 'function';
}

if (isHTMLTableElementInsertRowSupported()) {
    console.log('HTMLTableElement.insertRow 支持');
    // 使用HTMLTableElement.insertRow
} else {
    console.log('HTMLTableElement.insertRow 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLTableElement.insertRow polyfill
if (!htmltableelement.insertRow) {
    // 在这里添加polyfill实现
    console.log('加载HTMLTableElement.insertRow polyfill');
}
```

