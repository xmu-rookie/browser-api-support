# XPathResult.singleNodeValue API 兼容性数据

## 基本信息

- **API名称**: `XPathResult.singleNodeValue`
- **MDN文档**: [XPathResult.singleNodeValue](https://developer.mozilla.org/docs/Web/API/XPathResult/singleNodeValue)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-xpathresult-singlenodevalue)
- **标签**: `web-features:xpath`

## 使用示例

### 基本用法

```javascript
// XPathResult.singleNodeValue 使用示例
// 请查阅MDN文档了解具体用法
console.log('XPathResult.singleNodeValue API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
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
// 检查XPathResult.singleNodeValue是否支持
function isXPathResultSingleNodeValueSupported() {
    return 'singleNodeValue' in xpathresult && typeof xpathresult.singleNodeValue === 'function';
}

if (isXPathResultSingleNodeValueSupported()) {
    console.log('XPathResult.singleNodeValue 支持');
    // 使用XPathResult.singleNodeValue
} else {
    console.log('XPathResult.singleNodeValue 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XPathResult.singleNodeValue polyfill
if (!xpathresult.singleNodeValue) {
    // 在这里添加polyfill实现
    console.log('加载XPathResult.singleNodeValue polyfill');
}
```

