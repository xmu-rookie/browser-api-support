# Node.compareDocumentPosition API 兼容性数据

## 基本信息

- **API名称**: `Node.compareDocumentPosition`
- **MDN文档**: [Node.compareDocumentPosition](https://developer.mozilla.org/docs/Web/API/Node/compareDocumentPosition)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-node-comparedocumentposition①)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Node.compareDocumentPosition 使用示例
// 请查阅MDN文档了解具体用法
console.log('Node.compareDocumentPosition API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 2 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 | Only supports `contains` for elements |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 2

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 9
- **注意事项**:
  - Only supports `contains` for elements

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查Node.compareDocumentPosition是否支持
function isNodeCompareDocumentPositionSupported() {
    return 'compareDocumentPosition' in node && typeof node.compareDocumentPosition === 'function';
}

if (isNodeCompareDocumentPositionSupported()) {
    console.log('Node.compareDocumentPosition 支持');
    // 使用Node.compareDocumentPosition
} else {
    console.log('Node.compareDocumentPosition 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Node.compareDocumentPosition polyfill
if (!node.compareDocumentPosition) {
    // 在这里添加polyfill实现
    console.log('加载Node.compareDocumentPosition polyfill');
}
```

