# HTMLInputElement.validationMessage API 兼容性数据

## 基本信息

- **API名称**: `HTMLInputElement.validationMessage`
- **MDN文档**: [HTMLInputElement.validationMessage](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/validationMessage)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#dom-cva-validationmessage-dev)
- **标签**: `web-features:constraint-validation`

## 使用示例

### 基本用法

```javascript
// HTMLInputElement.validationMessage 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLInputElement.validationMessage API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 5 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 4 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 5 |  |
| Safari iOS | 4 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 5

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

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLInputElement.validationMessage是否支持
function isHTMLInputElementValidationMessageSupported() {
    return 'validationMessage' in htmlinputelement && typeof htmlinputelement.validationMessage === 'function';
}

if (isHTMLInputElementValidationMessageSupported()) {
    console.log('HTMLInputElement.validationMessage 支持');
    // 使用HTMLInputElement.validationMessage
} else {
    console.log('HTMLInputElement.validationMessage 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLInputElement.validationMessage polyfill
if (!htmlinputelement.validationMessage) {
    // 在这里添加polyfill实现
    console.log('加载HTMLInputElement.validationMessage polyfill');
}
```

