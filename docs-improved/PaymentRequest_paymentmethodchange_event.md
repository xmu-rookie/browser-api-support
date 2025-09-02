# PaymentRequest.paymentmethodchange_event API 兼容性数据

## 基本信息

- **API名称**: `PaymentRequest.paymentmethodchange_event`
- **MDN文档**: [PaymentRequest.paymentmethodchange_event](https://developer.mozilla.org/docs/Web/API/PaymentRequest/paymentmethodchange_event)
- **规范文档**: [查看规范](https://w3c.github.io/payment-request/#dfn-paymentmethodchange,https://w3c.github.io/payment-request/#onpaymentmethodchange-attribute)
- **标签**: `web-features:payment-request`
- **描述**: `paymentmethodchange` event

## 使用示例

### 基本用法

```javascript
// PaymentRequest.paymentmethodchange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('PaymentRequest.paymentmethodchange_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 76 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 55 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 47 |  |
| Opera Android | 44 |  |
| Safari | 12.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 76

### Firefox

- **支持版本**: 55
- **需要标志**: 
  - dom.payments.request.enabled: true

### Opera

- **支持版本**: 47

### Opera Android

- **支持版本**: 44

### Safari

- **支持版本**: 12.1

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PaymentRequest.paymentmethodchange_event是否支持
function isPaymentRequestPaymentmethodchange_eventSupported() {
    return 'paymentmethodchange_event' in paymentrequest && typeof paymentrequest.paymentmethodchange_event === 'function';
}

if (isPaymentRequestPaymentmethodchange_eventSupported()) {
    console.log('PaymentRequest.paymentmethodchange_event 支持');
    // 使用PaymentRequest.paymentmethodchange_event
} else {
    console.log('PaymentRequest.paymentmethodchange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PaymentRequest.paymentmethodchange_event polyfill
if (!paymentrequest.paymentmethodchange_event) {
    // 在这里添加polyfill实现
    console.log('加载PaymentRequest.paymentmethodchange_event polyfill');
}
```

