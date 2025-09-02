# Node.childNodes API 兼容性数据

## 基本信息

- **API名称**: `Node.childNodes`
- **MDN文档**: [Node.childNodes](https://developer.mozilla.org/docs/Web/API/Node/childNodes)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-node-childnodes①)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Node.childNodes 使用示例
// 请查阅MDN文档了解具体用法
console.log('Node.childNodes API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5 |  |
| Oculus | 同主版本 |  |
| Opera | 7 |  |
| Opera Android | 10.1 |  |
| Safari | 1.2 |  |
| Safari iOS | 同主版本 |  |
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

- **支持版本**: 5

### Opera

- **支持版本**: 7

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查Node.childNodes是否支持
function isNodeChildNodesSupported() {
    return 'childNodes' in node && typeof node.childNodes === 'function';
}

if (isNodeChildNodesSupported()) {
    console.log('Node.childNodes 支持');
    // 使用Node.childNodes
} else {
    console.log('Node.childNodes 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Node.childNodes polyfill
if (!node.childNodes) {
    // 在这里添加polyfill实现
    console.log('加载Node.childNodes polyfill');
}
```

