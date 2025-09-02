# HTMLFormElement.reportValidity API 兼容性数据

## 基本信息

- **API名称**: `HTMLFormElement.reportValidity`
- **MDN文档**: [HTMLFormElement.reportValidity](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/reportValidity)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#dom-cva-reportvalidity-dev)
- **标签**: `web-features:constraint-validation`

## 使用示例

### 基本用法

```javascript
// HTMLFormElement.reportValidity 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLFormElement.reportValidity API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 40 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 49 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 40

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 49

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLFormElement.reportValidity是否支持
function isHTMLFormElementReportValiditySupported() {
    return 'reportValidity' in htmlformelement && typeof htmlformelement.reportValidity === 'function';
}

if (isHTMLFormElementReportValiditySupported()) {
    console.log('HTMLFormElement.reportValidity 支持');
    // 使用HTMLFormElement.reportValidity
} else {
    console.log('HTMLFormElement.reportValidity 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLFormElement.reportValidity polyfill
if (!htmlformelement.reportValidity) {
    // 在这里添加polyfill实现
    console.log('加载HTMLFormElement.reportValidity polyfill');
}
```

