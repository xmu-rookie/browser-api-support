# PaymentRequest.PaymentRequest API 兼容性数据

## 基本信息

- **API名称**: `PaymentRequest.PaymentRequest`
- **MDN文档**: [PaymentRequest.PaymentRequest](https://developer.mozilla.org/docs/Web/API/PaymentRequest/PaymentRequest)
- **规范文档**: [查看规范](https://w3c.github.io/payment-request/#constructor)
- **标签**: `web-features:payment-request`
- **描述**: `PaymentRequest()` constructor

## 使用示例

### 基本用法

```javascript
// PaymentRequest.PaymentRequest 使用示例
// 请查阅MDN文档了解具体用法
console.log('PaymentRequest.PaymentRequest API');
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
// 检查PaymentRequest.PaymentRequest是否支持
function isPaymentRequestPaymentRequestSupported() {
    return 'PaymentRequest' in paymentrequest && typeof paymentrequest.PaymentRequest === 'function';
}

if (isPaymentRequestPaymentRequestSupported()) {
    console.log('PaymentRequest.PaymentRequest 支持');
    // 使用PaymentRequest.PaymentRequest
} else {
    console.log('PaymentRequest.PaymentRequest 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PaymentRequest.PaymentRequest polyfill
if (!paymentrequest.PaymentRequest) {
    // 在这里添加polyfill实现
    console.log('加载PaymentRequest.PaymentRequest polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **secure_payment_confirmation_method**: `secure-payment-confirmation` method

