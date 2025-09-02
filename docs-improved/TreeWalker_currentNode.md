# TreeWalker.currentNode API 兼容性数据

## 基本信息

- **API名称**: `TreeWalker.currentNode`
- **MDN文档**: [TreeWalker.currentNode](https://developer.mozilla.org/docs/Web/API/TreeWalker/currentNode)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-treewalker-currentnode)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// TreeWalker.currentNode 使用示例
// 请查阅MDN文档了解具体用法
console.log('TreeWalker.currentNode API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 4 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 9 |  |
| Opera Android | 10.1 |  |
| Safari | 3 |  |
| Safari iOS | 3 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 4

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

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查TreeWalker.currentNode是否支持
function isTreeWalkerCurrentNodeSupported() {
    return 'currentNode' in treewalker && typeof treewalker.currentNode === 'function';
}

if (isTreeWalkerCurrentNodeSupported()) {
    console.log('TreeWalker.currentNode 支持');
    // 使用TreeWalker.currentNode
} else {
    console.log('TreeWalker.currentNode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TreeWalker.currentNode polyfill
if (!treewalker.currentNode) {
    // 在这里添加polyfill实现
    console.log('加载TreeWalker.currentNode polyfill');
}
```

