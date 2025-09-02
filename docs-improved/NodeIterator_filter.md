# NodeIterator.filter API 兼容性数据

## 基本信息

- **API名称**: `NodeIterator.filter`
- **MDN文档**: [NodeIterator.filter](https://developer.mozilla.org/docs/Web/API/NodeIterator/filter)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-nodeiterator-filter)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// NodeIterator.filter 使用示例
// 请查阅MDN文档了解具体用法
console.log('NodeIterator.filter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 9 |  |
| Opera Android | 10.1 |  |
| Safari | 3 |  |
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

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 9

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查NodeIterator.filter是否支持
function isNodeIteratorFilterSupported() {
    return 'filter' in nodeiterator && typeof nodeiterator.filter === 'function';
}

if (isNodeIteratorFilterSupported()) {
    console.log('NodeIterator.filter 支持');
    // 使用NodeIterator.filter
} else {
    console.log('NodeIterator.filter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// NodeIterator.filter polyfill
if (!nodeiterator.filter) {
    // 在这里添加polyfill实现
    console.log('加载NodeIterator.filter polyfill');
}
```

