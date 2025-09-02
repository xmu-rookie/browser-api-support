# Node.isConnected API 兼容性数据

## 基本信息

- **API名称**: `Node.isConnected`
- **MDN文档**: [Node.isConnected](https://developer.mozilla.org/docs/Web/API/Node/isConnected)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-node-isconnected①)
- **标签**: `web-features:shadow-dom`

## 使用示例

### 基本用法

```javascript
// Node.isConnected 使用示例
// 请查阅MDN文档了解具体用法
console.log('Node.isConnected API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 51 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 49 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 6.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 51

### Firefox

- **支持版本**: 49

### Safari

- **支持版本**: 10

### Samsung Internet

- **支持版本**: 6.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查Node.isConnected是否支持
function isNodeIsConnectedSupported() {
    return 'isConnected' in node && typeof node.isConnected === 'function';
}

if (isNodeIsConnectedSupported()) {
    console.log('Node.isConnected 支持');
    // 使用Node.isConnected
} else {
    console.log('Node.isConnected 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Node.isConnected polyfill
if (!node.isConnected) {
    // 在这里添加polyfill实现
    console.log('加载Node.isConnected polyfill');
}
```

