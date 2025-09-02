# PaymentRequest.PaymentRequest.secure_payment_confirmation_method API 兼容性数据

## 基本信息

- **API名称**: `PaymentRequest.PaymentRequest.secure_payment_confirmation_method`
- **MDN文档**: [PaymentRequest.PaymentRequest.secure_payment_confirmation_method](https://developer.mozilla.org/docs/Web/API/Payment_Request_API/Concepts#secure-payment-confirmation)
- **标签**: `web-features:payment-request`
- **描述**: `secure-payment-confirmation` method

## 使用示例

### 基本用法

```javascript
// PaymentRequest.PaymentRequest.secure_payment_confirmation_method 使用示例
// 请查阅MDN文档了解具体用法
console.log('PaymentRequest.PaymentRequest.secure_payment_confirmation_method API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 95 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
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

- **支持版本**: 95

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Node.js

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PaymentRequest.PaymentRequest.secure_payment_confirmation_method是否支持
function isPaymentRequestPaymentRequestSupported() {
    return 'PaymentRequest' in paymentrequest && typeof paymentrequest.PaymentRequest === 'function';
}

if (isPaymentRequestPaymentRequestSupported()) {
    console.log('PaymentRequest.PaymentRequest.secure_payment_confirmation_method 支持');
    // 使用PaymentRequest.PaymentRequest.secure_payment_confirmation_method
} else {
    console.log('PaymentRequest.PaymentRequest.secure_payment_confirmation_method 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PaymentRequest.PaymentRequest.secure_payment_confirmation_method polyfill
if (!paymentrequest.PaymentRequest) {
    // 在这里添加polyfill实现
    console.log('加载PaymentRequest.PaymentRequest.secure_payment_confirmation_method polyfill');
}
```

