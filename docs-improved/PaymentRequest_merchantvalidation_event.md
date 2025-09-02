# PaymentRequest.merchantvalidation_event API 兼容性数据

## 基本信息

- **API名称**: `PaymentRequest.merchantvalidation_event`
- **MDN文档**: [PaymentRequest.merchantvalidation_event](https://developer.mozilla.org/docs/Web/API/PaymentRequest/merchantvalidation_event)
- **描述**: `merchantvalidation` event

## 使用示例

### 基本用法

```javascript
// PaymentRequest.merchantvalidation_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('PaymentRequest.merchantvalidation_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 55 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 55
- **需要标志**: 
  - dom.payments.request.enabled: true

### Safari

- **支持版本**: 11.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查PaymentRequest.merchantvalidation_event是否支持
function isPaymentRequestMerchantvalidation_eventSupported() {
    return 'merchantvalidation_event' in paymentrequest && typeof paymentrequest.merchantvalidation_event === 'function';
}

if (isPaymentRequestMerchantvalidation_eventSupported()) {
    console.log('PaymentRequest.merchantvalidation_event 支持');
    // 使用PaymentRequest.merchantvalidation_event
} else {
    console.log('PaymentRequest.merchantvalidation_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PaymentRequest.merchantvalidation_event polyfill
if (!paymentrequest.merchantvalidation_event) {
    // 在这里添加polyfill实现
    console.log('加载PaymentRequest.merchantvalidation_event polyfill');
}
```

