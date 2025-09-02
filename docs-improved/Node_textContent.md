# Node.textContent API 兼容性数据

## 基本信息

- **API名称**: `Node.textContent`
- **MDN文档**: [Node.textContent](https://developer.mozilla.org/docs/Web/API/Node/textContent)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-node-textcontent)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Node.textContent 使用示例
// 请查阅MDN文档了解具体用法
console.log('Node.textContent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 9 |  |
| Opera Android | 10.1 |  |
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

- **支持版本**: 9

### Opera

- **支持版本**: 9

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Node.textContent是否支持
function isNodeTextContentSupported() {
    return 'textContent' in node && typeof node.textContent === 'function';
}

if (isNodeTextContentSupported()) {
    console.log('Node.textContent 支持');
    // 使用Node.textContent
} else {
    console.log('Node.textContent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Node.textContent polyfill
if (!node.textContent) {
    // 在这里添加polyfill实现
    console.log('加载Node.textContent polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **enforces_trusted_types**: Requires `TrustedScript` instance in `HTMLScriptElement` when trusted types are enforced.

