# PaymentRequest.shippingoptionchange_event API 兼容性数据

## 基本信息

- **API名称**: `PaymentRequest.shippingoptionchange_event`
- **MDN文档**: [PaymentRequest.shippingoptionchange_event](https://developer.mozilla.org/docs/Web/API/PaymentRequest/shippingoptionchange_event)
- **描述**: `shippingoptionchange` event

## 使用示例

### 基本用法

```javascript
// PaymentRequest.shippingoptionchange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('PaymentRequest.shippingoptionchange_event API');
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
// 检查PaymentRequest.shippingoptionchange_event是否支持
function isPaymentRequestShippingoptionchange_eventSupported() {
    return 'shippingoptionchange_event' in paymentrequest && typeof paymentrequest.shippingoptionchange_event === 'function';
}

if (isPaymentRequestShippingoptionchange_eventSupported()) {
    console.log('PaymentRequest.shippingoptionchange_event 支持');
    // 使用PaymentRequest.shippingoptionchange_event
} else {
    console.log('PaymentRequest.shippingoptionchange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PaymentRequest.shippingoptionchange_event polyfill
if (!paymentrequest.shippingoptionchange_event) {
    // 在这里添加polyfill实现
    console.log('加载PaymentRequest.shippingoptionchange_event polyfill');
}
```

