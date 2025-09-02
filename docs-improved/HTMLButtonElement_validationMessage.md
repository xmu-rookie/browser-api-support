# HTMLButtonElement.validationMessage API 兼容性数据

## 基本信息

- **API名称**: `HTMLButtonElement.validationMessage`
- **MDN文档**: [HTMLButtonElement.validationMessage](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement/validationMessage)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#dom-cva-validationmessage-dev)
- **标签**: `web-features:constraint-validation`

## 使用示例

### 基本用法

```javascript
// HTMLButtonElement.validationMessage 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLButtonElement.validationMessage API');
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
// 检查HTMLButtonElement.validationMessage是否支持
function isHTMLButtonElementValidationMessageSupported() {
    return 'validationMessage' in htmlbuttonelement && typeof htmlbuttonelement.validationMessage === 'function';
}

if (isHTMLButtonElementValidationMessageSupported()) {
    console.log('HTMLButtonElement.validationMessage 支持');
    // 使用HTMLButtonElement.validationMessage
} else {
    console.log('HTMLButtonElement.validationMessage 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLButtonElement.validationMessage polyfill
if (!htmlbuttonelement.validationMessage) {
    // 在这里添加polyfill实现
    console.log('加载HTMLButtonElement.validationMessage polyfill');
}
```

