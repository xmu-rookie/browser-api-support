# PaymentResponse API 兼容性数据

## 基本信息

- **API名称**: `PaymentResponse`
- **MDN文档**: [PaymentResponse](https://developer.mozilla.org/docs/Web/API/PaymentResponse)
- **规范文档**: [查看规范](https://w3c.github.io/payment-request/#paymentresponse-interface)
- **标签**: `web-features:payment-request`

## 使用示例

### 基本用法

```javascript
// PaymentResponse 使用示例
// 请查阅MDN文档了解具体用法
console.log('PaymentResponse API');
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
| Opera Android | 同主版本 |  |
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
  - dom.payments.request.supportedRegions: A comma-delimited list of one or more 2-character ISO country codes indicating the countries in which to support payments (for example, <code>US,CA</code>).

### Safari

- **支持版本**: 11.1

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PaymentResponse是否支持
function isPaymentResponseSupported() {
    return 'PaymentResponse' in window || typeof PaymentResponse !== 'undefined';
}

if (isPaymentResponseSupported()) {
    console.log('PaymentResponse 支持');
    // 使用PaymentResponse
} else {
    console.log('PaymentResponse 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PaymentResponse polyfill
if (!window.PaymentResponse) {
    // 在这里添加polyfill实现
    console.log('加载PaymentResponse polyfill');
}
```

