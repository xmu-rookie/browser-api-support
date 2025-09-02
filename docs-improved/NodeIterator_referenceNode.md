# NodeIterator.referenceNode API 兼容性数据

## 基本信息

- **API名称**: `NodeIterator.referenceNode`
- **MDN文档**: [NodeIterator.referenceNode](https://developer.mozilla.org/docs/Web/API/NodeIterator/referenceNode)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-nodeiterator-referencenode)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// NodeIterator.referenceNode 使用示例
// 请查阅MDN文档了解具体用法
console.log('NodeIterator.referenceNode API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | ≤15 |  |
| Opera Android | ≤14 |  |
| Safari | 3 |  |
| Safari iOS | 3 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 3.5

### Opera

- **支持版本**: ≤15

### Opera Android

- **支持版本**: ≤14

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查NodeIterator.referenceNode是否支持
function isNodeIteratorReferenceNodeSupported() {
    return 'referenceNode' in nodeiterator && typeof nodeiterator.referenceNode === 'function';
}

if (isNodeIteratorReferenceNodeSupported()) {
    console.log('NodeIterator.referenceNode 支持');
    // 使用NodeIterator.referenceNode
} else {
    console.log('NodeIterator.referenceNode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// NodeIterator.referenceNode polyfill
if (!nodeiterator.referenceNode) {
    // 在这里添加polyfill实现
    console.log('加载NodeIterator.referenceNode polyfill');
}
```

