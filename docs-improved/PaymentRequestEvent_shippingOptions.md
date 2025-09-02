# PaymentRequestEvent.shippingOptions API 兼容性数据

## 基本信息

- **API名称**: `PaymentRequestEvent.shippingOptions`
- **规范文档**: [查看规范](https://w3c.github.io/payment-handler/#shippingoptions-attribute)
- **标签**: `web-features:payment-handler`

## 使用示例

### 基本用法

```javascript
// PaymentRequestEvent.shippingOptions 使用示例
// 请查阅MDN文档了解具体用法
console.log('PaymentRequestEvent.shippingOptions API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 80 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 80

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PaymentRequestEvent.shippingOptions是否支持
function isPaymentRequestEventShippingOptionsSupported() {
    return 'shippingOptions' in paymentrequestevent && typeof paymentrequestevent.shippingOptions === 'function';
}

if (isPaymentRequestEventShippingOptionsSupported()) {
    console.log('PaymentRequestEvent.shippingOptions 支持');
    // 使用PaymentRequestEvent.shippingOptions
} else {
    console.log('PaymentRequestEvent.shippingOptions 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PaymentRequestEvent.shippingOptions polyfill
if (!paymentrequestevent.shippingOptions) {
    // 在这里添加polyfill实现
    console.log('加载PaymentRequestEvent.shippingOptions polyfill');
}
```

