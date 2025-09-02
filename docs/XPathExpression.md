# XPathExpression API 兼容性数据

## 基本信息

- **API名称**: `XPathExpression`
- **MDN文档**: [XPathExpression](https://developer.mozilla.org/docs/Web/API/XPathExpression)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#interface-xpathexpression)
- **标签**: `web-features:xpath`

## 使用示例

### 基本用法

```javascript
// XPathExpression 使用示例
// 请查阅MDN文档了解具体用法
console.log('XPathExpression API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
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

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查XPathExpression是否支持
function isXPathExpressionSupported() {
    return 'XPathExpression' in window || typeof XPathExpression !== 'undefined';
}

if (isXPathExpressionSupported()) {
    console.log('XPathExpression 支持');
    // 使用XPathExpression
} else {
    console.log('XPathExpression 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XPathExpression polyfill
if (!window.XPathExpression) {
    // 在这里添加polyfill实现
    console.log('加载XPathExpression polyfill');
}
```

