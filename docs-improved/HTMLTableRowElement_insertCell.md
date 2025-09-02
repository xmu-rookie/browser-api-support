# HTMLTableRowElement.insertCell API 兼容性数据

## 基本信息

- **API名称**: `HTMLTableRowElement.insertCell`
- **MDN文档**: [HTMLTableRowElement.insertCell](https://developer.mozilla.org/docs/Web/API/HTMLTableRowElement/insertCell)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/tables.html#dom-tr-insertcell-dev)
- **标签**: `web-features:table`

## 使用示例

### 基本用法

```javascript
// HTMLTableRowElement.insertCell 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLTableRowElement.insertCell API');
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
// 检查HTMLTableRowElement.insertCell是否支持
function isHTMLTableRowElementInsertCellSupported() {
    return 'insertCell' in htmltablerowelement && typeof htmltablerowelement.insertCell === 'function';
}

if (isHTMLTableRowElementInsertCellSupported()) {
    console.log('HTMLTableRowElement.insertCell 支持');
    // 使用HTMLTableRowElement.insertCell
} else {
    console.log('HTMLTableRowElement.insertCell 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLTableRowElement.insertCell polyfill
if (!htmltablerowelement.insertCell) {
    // 在这里添加polyfill实现
    console.log('加载HTMLTableRowElement.insertCell polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **index_parameter_negative_one**: `index` parameter can be `-1`
- **index_parameter_optional**: `index` parameter is optional

