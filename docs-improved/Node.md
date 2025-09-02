# Node API 兼容性数据

## 基本信息

- **API名称**: `Node`
- **MDN文档**: [Node](https://developer.mozilla.org/docs/Web/API/Node)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#interface-node)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Node 使用示例
// 请查阅MDN文档了解具体用法
console.log('Node API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 | WebKit and old versions of Blink incorrectly do not make `Node` inherit from `EventTarget`. |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5 |  |
| Oculus | 同主版本 |  |
| Opera | 7 | WebKit and old versions of Blink incorrectly do not make `Node` inherit from `EventTarget`. |
| Opera Android | 10.1 | WebKit and old versions of Blink incorrectly do not make `Node` inherit from `EventTarget`. |
| Safari | 1 | WebKit and old versions of Blink incorrectly do not make `Node` inherit from `EventTarget`. |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1
- **注意事项**:
  - WebKit and old versions of Blink incorrectly do not make `Node` inherit from `EventTarget`.

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 5

### Opera

- **支持版本**: 7
- **注意事项**:
  - WebKit and old versions of Blink incorrectly do not make `Node` inherit from `EventTarget`.

### Opera Android

- **支持版本**: 10.1
- **注意事项**:
  - WebKit and old versions of Blink incorrectly do not make `Node` inherit from `EventTarget`.

### Safari

- **支持版本**: 1
- **注意事项**:
  - WebKit and old versions of Blink incorrectly do not make `Node` inherit from `EventTarget`.

## 兼容性检查代码

### 特性检测

```javascript
// 检查Node是否支持
function isNodeSupported() {
    return 'Node' in window || typeof Node !== 'undefined';
}

if (isNodeSupported()) {
    console.log('Node 支持');
    // 使用Node
} else {
    console.log('Node 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Node polyfill
if (!window.Node) {
    // 在这里添加polyfill实现
    console.log('加载Node polyfill');
}
```

