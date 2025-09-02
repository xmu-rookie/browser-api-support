# PaymentResponse.requestId API 兼容性数据

## 基本信息

- **API名称**: `PaymentResponse.requestId`
- **MDN文档**: [PaymentResponse.requestId](https://developer.mozilla.org/docs/Web/API/PaymentResponse/requestId)
- **规范文档**: [查看规范](https://w3c.github.io/payment-request/#dom-paymentresponse-requestid)
- **标签**: `web-features:payment-request`

## 使用示例

### 基本用法

```javascript
// PaymentResponse.requestId 使用示例
// 请查阅MDN文档了解具体用法
console.log('PaymentResponse.requestId API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 60 |  |
| Chrome Android | 同主版本 |  |
| Edge | 16 |  |
| Firefox | 55 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 43 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 60

### Edge

- **支持版本**: 16

### Firefox

- **支持版本**: 55
- **需要标志**: 
  - dom.payments.request.enabled: true
  - dom.payments.request.supportedRegions: A comma-delimited list of one or more 2-character ISO country codes indicating the countries in which to support payments (for example, <code>US,CA</code>).

### Opera Android

- **支持版本**: 43

### Safari

- **支持版本**: 11.1

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PaymentResponse.requestId是否支持
function isPaymentResponseRequestIdSupported() {
    return 'requestId' in paymentresponse && typeof paymentresponse.requestId === 'function';
}

if (isPaymentResponseRequestIdSupported()) {
    console.log('PaymentResponse.requestId 支持');
    // 使用PaymentResponse.requestId
} else {
    console.log('PaymentResponse.requestId 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PaymentResponse.requestId polyfill
if (!paymentresponse.requestId) {
    // 在这里添加polyfill实现
    console.log('加载PaymentResponse.requestId polyfill');
}
```

