# Node.parentElement API 兼容性数据

## 基本信息

- **API名称**: `Node.parentElement`
- **MDN文档**: [Node.parentElement](https://developer.mozilla.org/docs/Web/API/Node/parentElement)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-node-parentelement①)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Node.parentElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('Node.parentElement API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 9 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 8 | Only supported on `Element`. |
| Oculus | 同主版本 |  |
| Opera | 7 | Before Opera 15, this feature was only supported on `Element`. |
| Opera Android | 10.1 | Before Opera Android 14, this feature was only supported on `Element`. |
| Safari | 1.1 |  |
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

- **支持版本**: 9

### Internet Explorer

- **支持版本**: 8
- **注意事项**:
  - Only supported on `Element`.

### Opera

- **支持版本**: 7
- **注意事项**:
  - Before Opera 15, this feature was only supported on `Element`.

### Opera Android

- **支持版本**: 10.1
- **注意事项**:
  - Before Opera Android 14, this feature was only supported on `Element`.

### Safari

- **支持版本**: 1.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Node.parentElement是否支持
function isNodeParentElementSupported() {
    return 'parentElement' in node && typeof node.parentElement === 'function';
}

if (isNodeParentElementSupported()) {
    console.log('Node.parentElement 支持');
    // 使用Node.parentElement
} else {
    console.log('Node.parentElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Node.parentElement polyfill
if (!node.parentElement) {
    // 在这里添加polyfill实现
    console.log('加载Node.parentElement polyfill');
}
```

