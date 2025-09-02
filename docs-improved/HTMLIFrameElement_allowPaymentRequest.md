# HTMLIFrameElement.allowPaymentRequest API 兼容性数据

## 基本信息

- **API名称**: `HTMLIFrameElement.allowPaymentRequest`
- **MDN文档**: [HTMLIFrameElement.allowPaymentRequest](https://developer.mozilla.org/docs/Web/API/HTMLIFrameElement/allowPaymentRequest)

## 使用示例

### 基本用法

```javascript
// HTMLIFrameElement.allowPaymentRequest 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLIFrameElement.allowPaymentRequest API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 60 |  |
| Chrome Android | 57 |  |
| Edge | 15 |  |
| Firefox | 56 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 60

### Chrome Android

- **支持版本**: 57

### Edge

- **支持版本**: 15

### Firefox

- **支持版本**: 56
- **移除版本**: 83

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLIFrameElement.allowPaymentRequest是否支持
function isHTMLIFrameElementAllowPaymentRequestSupported() {
    return 'allowPaymentRequest' in htmliframeelement && typeof htmliframeelement.allowPaymentRequest === 'function';
}

if (isHTMLIFrameElementAllowPaymentRequestSupported()) {
    console.log('HTMLIFrameElement.allowPaymentRequest 支持');
    // 使用HTMLIFrameElement.allowPaymentRequest
} else {
    console.log('HTMLIFrameElement.allowPaymentRequest 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLIFrameElement.allowPaymentRequest polyfill
if (!htmliframeelement.allowPaymentRequest) {
    // 在这里添加polyfill实现
    console.log('加载HTMLIFrameElement.allowPaymentRequest polyfill');
}
```

