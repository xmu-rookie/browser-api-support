# Node.getRootNode API 兼容性数据

## 基本信息

- **API名称**: `Node.getRootNode`
- **MDN文档**: [Node.getRootNode](https://developer.mozilla.org/docs/Web/API/Node/getRootNode)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-node-getrootnode①)
- **标签**: `web-features:shadow-dom`

## 使用示例

### 基本用法

```javascript
// Node.getRootNode 使用示例
// 请查阅MDN文档了解具体用法
console.log('Node.getRootNode API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 54 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 53 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 54

### Firefox

- **支持版本**: 53

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Node.getRootNode是否支持
function isNodeGetRootNodeSupported() {
    return 'getRootNode' in node && typeof node.getRootNode === 'function';
}

if (isNodeGetRootNodeSupported()) {
    console.log('Node.getRootNode 支持');
    // 使用Node.getRootNode
} else {
    console.log('Node.getRootNode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Node.getRootNode polyfill
if (!node.getRootNode) {
    // 在这里添加polyfill实现
    console.log('加载Node.getRootNode polyfill');
}
```

