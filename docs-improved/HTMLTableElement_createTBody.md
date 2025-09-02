# HTMLTableElement.createTBody API 兼容性数据

## 基本信息

- **API名称**: `HTMLTableElement.createTBody`
- **MDN文档**: [HTMLTableElement.createTBody](https://developer.mozilla.org/docs/Web/API/HTMLTableElement/createTBody)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/tables.html#dom-table-createtbody-dev)
- **标签**: `web-features:table`

## 使用示例

### 基本用法

```javascript
// HTMLTableElement.createTBody 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLTableElement.createTBody API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 20 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 25 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
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

- **支持版本**: 20

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 25

### Internet Explorer

- **支持版本**: 9

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLTableElement.createTBody是否支持
function isHTMLTableElementCreateTBodySupported() {
    return 'createTBody' in htmltableelement && typeof htmltableelement.createTBody === 'function';
}

if (isHTMLTableElementCreateTBodySupported()) {
    console.log('HTMLTableElement.createTBody 支持');
    // 使用HTMLTableElement.createTBody
} else {
    console.log('HTMLTableElement.createTBody 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLTableElement.createTBody polyfill
if (!htmltableelement.createTBody) {
    // 在这里添加polyfill实现
    console.log('加载HTMLTableElement.createTBody polyfill');
}
```

