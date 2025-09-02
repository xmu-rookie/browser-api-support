# PaymentRequest.abort API 兼容性数据

## 基本信息

- **API名称**: `PaymentRequest.abort`
- **MDN文档**: [PaymentRequest.abort](https://developer.mozilla.org/docs/Web/API/PaymentRequest/abort)
- **规范文档**: [查看规范](https://w3c.github.io/payment-request/#dom-paymentrequest-abort)
- **标签**: `web-features:payment-request`
- **描述**: `abort()`

## 使用示例

### 基本用法

```javascript
// PaymentRequest.abort 使用示例
// 请查阅MDN文档了解具体用法
console.log('PaymentRequest.abort API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 60 |  |
| Chrome Android | 53 |  |
| Edge | 15 |  |
| Firefox | 55 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 44 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 60

### Chrome Android

- **支持版本**: 53

### Edge

- **支持版本**: 15

### Firefox

- **支持版本**: 55
- **需要标志**: 
  - dom.payments.request.enabled: true

### Opera Android

- **支持版本**: 44

### Safari

- **支持版本**: 11.1

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PaymentRequest.abort是否支持
function isPaymentRequestAbortSupported() {
    return 'abort' in paymentrequest && typeof paymentrequest.abort === 'function';
}

if (isPaymentRequestAbortSupported()) {
    console.log('PaymentRequest.abort 支持');
    // 使用PaymentRequest.abort
} else {
    console.log('PaymentRequest.abort 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PaymentRequest.abort polyfill
if (!paymentrequest.abort) {
    // 在这里添加polyfill实现
    console.log('加载PaymentRequest.abort polyfill');
}
```

