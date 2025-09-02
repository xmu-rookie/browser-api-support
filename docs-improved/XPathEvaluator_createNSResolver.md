# XPathEvaluator.createNSResolver API 兼容性数据

## 基本信息

- **API名称**: `XPathEvaluator.createNSResolver`
- **MDN文档**: [XPathEvaluator.createNSResolver](https://developer.mozilla.org/docs/Web/API/XPathEvaluator/createNSResolver)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-xpathevaluatorbase-creatensresolver)

## 使用示例

### 基本用法

```javascript
// XPathEvaluator.createNSResolver 使用示例
// 请查阅MDN文档了解具体用法
console.log('XPathEvaluator.createNSResolver API');
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
// 检查XPathEvaluator.createNSResolver是否支持
function isXPathEvaluatorCreateNSResolverSupported() {
    return 'createNSResolver' in xpathevaluator && typeof xpathevaluator.createNSResolver === 'function';
}

if (isXPathEvaluatorCreateNSResolverSupported()) {
    console.log('XPathEvaluator.createNSResolver 支持');
    // 使用XPathEvaluator.createNSResolver
} else {
    console.log('XPathEvaluator.createNSResolver 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XPathEvaluator.createNSResolver polyfill
if (!xpathevaluator.createNSResolver) {
    // 在这里添加polyfill实现
    console.log('加载XPathEvaluator.createNSResolver polyfill');
}
```

