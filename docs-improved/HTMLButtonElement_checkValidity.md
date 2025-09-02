# HTMLButtonElement.checkValidity API 兼容性数据

## 基本信息

- **API名称**: `HTMLButtonElement.checkValidity`
- **MDN文档**: [HTMLButtonElement.checkValidity](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement/checkValidity)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#dom-cva-checkvalidity-dev)
- **标签**: `web-features:constraint-validation`

## 使用示例

### 基本用法

```javascript
// HTMLButtonElement.checkValidity 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLButtonElement.checkValidity API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 4 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 4 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 5 |  |
| Safari iOS | 5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 4

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 4

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 5

### Safari iOS

- **支持版本**: 5

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLButtonElement.checkValidity是否支持
function isHTMLButtonElementCheckValiditySupported() {
    return 'checkValidity' in htmlbuttonelement && typeof htmlbuttonelement.checkValidity === 'function';
}

if (isHTMLButtonElementCheckValiditySupported()) {
    console.log('HTMLButtonElement.checkValidity 支持');
    // 使用HTMLButtonElement.checkValidity
} else {
    console.log('HTMLButtonElement.checkValidity 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLButtonElement.checkValidity polyfill
if (!htmlbuttonelement.checkValidity) {
    // 在这里添加polyfill实现
    console.log('加载HTMLButtonElement.checkValidity polyfill');
}
```

