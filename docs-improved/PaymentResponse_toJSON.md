# PaymentResponse.toJSON API 兼容性数据

## 基本信息

- **API名称**: `PaymentResponse.toJSON`
- **MDN文档**: [PaymentResponse.toJSON](https://developer.mozilla.org/docs/Web/API/PaymentResponse/toJSON)
- **标签**: `web-features:payment-request`
- **描述**: `toJSON()`

## 使用示例

### 基本用法

```javascript
// PaymentResponse.toJSON 使用示例
// 请查阅MDN文档了解具体用法
console.log('PaymentResponse.toJSON API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 60 |  |
| Chrome Android | 55 |  |
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

- **支持版本**: 55

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
// 检查PaymentResponse.toJSON是否支持
function isPaymentResponseToJSONSupported() {
    return 'toJSON' in paymentresponse && typeof paymentresponse.toJSON === 'function';
}

if (isPaymentResponseToJSONSupported()) {
    console.log('PaymentResponse.toJSON 支持');
    // 使用PaymentResponse.toJSON
} else {
    console.log('PaymentResponse.toJSON 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PaymentResponse.toJSON polyfill
if (!paymentresponse.toJSON) {
    // 在这里添加polyfill实现
    console.log('加载PaymentResponse.toJSON polyfill');
}
```

