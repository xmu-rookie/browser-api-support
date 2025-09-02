# HTMLOutputElement.checkValidity API 兼容性数据

## 基本信息

- **API名称**: `HTMLOutputElement.checkValidity`
- **MDN文档**: [HTMLOutputElement.checkValidity](https://developer.mozilla.org/docs/Web/API/HTMLOutputElement/checkValidity)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#dom-cva-checkvalidity-dev)
- **标签**: `web-features:constraint-validation`

## 使用示例

### 基本用法

```javascript
// HTMLOutputElement.checkValidity 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLOutputElement.checkValidity API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 9 |  |
| Chrome Android | 同主版本 |  |
| Edge | 14 |  |
| Firefox | 4 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 5.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 9

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 4

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 5.1

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLOutputElement.checkValidity是否支持
function isHTMLOutputElementCheckValiditySupported() {
    return 'checkValidity' in htmloutputelement && typeof htmloutputelement.checkValidity === 'function';
}

if (isHTMLOutputElementCheckValiditySupported()) {
    console.log('HTMLOutputElement.checkValidity 支持');
    // 使用HTMLOutputElement.checkValidity
} else {
    console.log('HTMLOutputElement.checkValidity 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLOutputElement.checkValidity polyfill
if (!htmloutputelement.checkValidity) {
    // 在这里添加polyfill实现
    console.log('加载HTMLOutputElement.checkValidity polyfill');
}
```

