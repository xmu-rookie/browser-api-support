# HTMLTableElement.cellSpacing API 兼容性数据

## 基本信息

- **API名称**: `HTMLTableElement.cellSpacing`
- **MDN文档**: [HTMLTableElement.cellSpacing](https://developer.mozilla.org/docs/Web/API/HTMLTableElement/cellSpacing)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/obsolete.html#dom-table-cellspacing)
- **标签**: `web-features:table-discouraged`

## 使用示例

### 基本用法

```javascript
// HTMLTableElement.cellSpacing 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLTableElement.cellSpacing API');
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
// 检查HTMLTableElement.cellSpacing是否支持
function isHTMLTableElementCellSpacingSupported() {
    return 'cellSpacing' in htmltableelement && typeof htmltableelement.cellSpacing === 'function';
}

if (isHTMLTableElementCellSpacingSupported()) {
    console.log('HTMLTableElement.cellSpacing 支持');
    // 使用HTMLTableElement.cellSpacing
} else {
    console.log('HTMLTableElement.cellSpacing 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLTableElement.cellSpacing polyfill
if (!htmltableelement.cellSpacing) {
    // 在这里添加polyfill实现
    console.log('加载HTMLTableElement.cellSpacing polyfill');
}
```

