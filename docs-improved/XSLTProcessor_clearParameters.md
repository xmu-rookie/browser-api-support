# XSLTProcessor.clearParameters API 兼容性数据

## 基本信息

- **API名称**: `XSLTProcessor.clearParameters`
- **MDN文档**: [XSLTProcessor.clearParameters](https://developer.mozilla.org/docs/Web/API/XSLTProcessor/clearParameters)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-xsltprocessor-clearparameters)
- **标签**: `web-features:xslt`

## 使用示例

### 基本用法

```javascript
// XSLTProcessor.clearParameters 使用示例
// 请查阅MDN文档了解具体用法
console.log('XSLTProcessor.clearParameters API');
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
| Safari | 3.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 |  |
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

- **支持版本**: 3.1

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查XSLTProcessor.clearParameters是否支持
function isXSLTProcessorClearParametersSupported() {
    return 'clearParameters' in xsltprocessor && typeof xsltprocessor.clearParameters === 'function';
}

if (isXSLTProcessorClearParametersSupported()) {
    console.log('XSLTProcessor.clearParameters 支持');
    // 使用XSLTProcessor.clearParameters
} else {
    console.log('XSLTProcessor.clearParameters 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XSLTProcessor.clearParameters polyfill
if (!xsltprocessor.clearParameters) {
    // 在这里添加polyfill实现
    console.log('加载XSLTProcessor.clearParameters polyfill');
}
```

