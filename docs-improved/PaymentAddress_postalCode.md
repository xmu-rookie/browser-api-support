# PaymentAddress.postalCode API 兼容性数据

## 基本信息

- **API名称**: `PaymentAddress.postalCode`
- **MDN文档**: [PaymentAddress.postalCode](https://developer.mozilla.org/docs/Web/API/PaymentAddress/postalCode)

## 使用示例

### 基本用法

```javascript
// PaymentAddress.postalCode 使用示例
// 请查阅MDN文档了解具体用法
console.log('PaymentAddress.postalCode API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 60 |  |
| Chrome Android | 53 |  |
| Edge | 15 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 不支持

### Opera Android

- **支持版本**: 44

### Safari

- **支持版本**: 11.1

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PaymentAddress.postalCode是否支持
function isPaymentAddressPostalCodeSupported() {
    return 'postalCode' in paymentaddress && typeof paymentaddress.postalCode === 'function';
}

if (isPaymentAddressPostalCodeSupported()) {
    console.log('PaymentAddress.postalCode 支持');
    // 使用PaymentAddress.postalCode
} else {
    console.log('PaymentAddress.postalCode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PaymentAddress.postalCode polyfill
if (!paymentaddress.postalCode) {
    // 在这里添加polyfill实现
    console.log('加载PaymentAddress.postalCode polyfill');
}
```

