# Node.contains API 兼容性数据

## 基本信息

- **API名称**: `Node.contains`
- **MDN文档**: [Node.contains](https://developer.mozilla.org/docs/Web/API/Node/contains)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-node-contains①)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Node.contains 使用示例
// 请查阅MDN文档了解具体用法
console.log('Node.contains API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 16 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 9 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 | Only supported for [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement), not all ... |
| Oculus | 同主版本 |  |
| Opera | 7 |  |
| Opera Android | 10.1 |  |
| Safari | 1.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 16

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 9

### Internet Explorer

- **支持版本**: 9
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement), not all `Node` objects.

### Opera

- **支持版本**: 7

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Node.contains是否支持
function isNodeContainsSupported() {
    return 'contains' in node && typeof node.contains === 'function';
}

if (isNodeContainsSupported()) {
    console.log('Node.contains 支持');
    // 使用Node.contains
} else {
    console.log('Node.contains 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Node.contains polyfill
if (!node.contains) {
    // 在这里添加polyfill实现
    console.log('加载Node.contains polyfill');
}
```

