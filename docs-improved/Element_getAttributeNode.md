# Element.getAttributeNode API 兼容性数据

## 基本信息

- **API名称**: `Element.getAttributeNode`
- **MDN文档**: [Element.getAttributeNode](https://developer.mozilla.org/docs/Web/API/Element/getAttributeNode)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-element-getattributenode)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Element.getAttributeNode 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.getAttributeNode API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 6 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 1 |  |
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

- **支持版本**: 6

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.getAttributeNode是否支持
function isElementGetAttributeNodeSupported() {
    return 'getAttributeNode' in element && typeof element.getAttributeNode === 'function';
}

if (isElementGetAttributeNodeSupported()) {
    console.log('Element.getAttributeNode 支持');
    // 使用Element.getAttributeNode
} else {
    console.log('Element.getAttributeNode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.getAttributeNode polyfill
if (!element.getAttributeNode) {
    // 在这里添加polyfill实现
    console.log('加载Element.getAttributeNode polyfill');
}
```

