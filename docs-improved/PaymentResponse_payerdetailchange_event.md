# PaymentResponse.payerdetailchange_event API 兼容性数据

## 基本信息

- **API名称**: `PaymentResponse.payerdetailchange_event`
- **MDN文档**: [PaymentResponse.payerdetailchange_event](https://developer.mozilla.org/docs/Web/API/PaymentResponse/payerdetailchange_event)
- **规范文档**: [查看规范](https://w3c.github.io/payment-request/#dfn-payerdetailchange)
- **标签**: `web-features:payment-request`
- **描述**: `payerdetailchange` event

## 使用示例

### 基本用法

```javascript
// PaymentResponse.payerdetailchange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('PaymentResponse.payerdetailchange_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 78 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 55 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 47 |  |
| Opera Android | 43 |  |
| Safari | 12.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 78

### Firefox

- **支持版本**: 55
- **需要标志**: 
  - dom.payments.request.enabled: true
  - dom.payments.request.supportedRegions: A comma-delimited list of one or more 2-character ISO country codes indicating the countries in which to support payments (for example, <code>US,CA</code>).

### Opera

- **支持版本**: 47

### Opera Android

- **支持版本**: 43

### Safari

- **支持版本**: 12.1

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PaymentResponse.payerdetailchange_event是否支持
function isPaymentResponsePayerdetailchange_eventSupported() {
    return 'payerdetailchange_event' in paymentresponse && typeof paymentresponse.payerdetailchange_event === 'function';
}

if (isPaymentResponsePayerdetailchange_eventSupported()) {
    console.log('PaymentResponse.payerdetailchange_event 支持');
    // 使用PaymentResponse.payerdetailchange_event
} else {
    console.log('PaymentResponse.payerdetailchange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PaymentResponse.payerdetailchange_event polyfill
if (!paymentresponse.payerdetailchange_event) {
    // 在这里添加polyfill实现
    console.log('加载PaymentResponse.payerdetailchange_event polyfill');
}
```

