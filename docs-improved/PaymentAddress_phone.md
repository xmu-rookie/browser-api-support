# PaymentAddress.phone API 兼容性数据

## 基本信息

- **API名称**: `PaymentAddress.phone`
- **MDN文档**: [PaymentAddress.phone](https://developer.mozilla.org/docs/Web/API/PaymentAddress/phone)

## 使用示例

### 基本用法

```javascript
// PaymentAddress.phone 使用示例
// 请查阅MDN文档了解具体用法
console.log('PaymentAddress.phone API');
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
// 检查PaymentAddress.phone是否支持
function isPaymentAddressPhoneSupported() {
    return 'phone' in paymentaddress && typeof paymentaddress.phone === 'function';
}

if (isPaymentAddressPhoneSupported()) {
    console.log('PaymentAddress.phone 支持');
    // 使用PaymentAddress.phone
} else {
    console.log('PaymentAddress.phone 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PaymentAddress.phone polyfill
if (!paymentaddress.phone) {
    // 在这里添加polyfill实现
    console.log('加载PaymentAddress.phone polyfill');
}
```

