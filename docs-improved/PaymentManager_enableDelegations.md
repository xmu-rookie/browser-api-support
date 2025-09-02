# PaymentManager.enableDelegations API 兼容性数据

## 基本信息

- **API名称**: `PaymentManager.enableDelegations`
- **MDN文档**: [PaymentManager.enableDelegations](https://developer.mozilla.org/docs/Web/API/PaymentManager/enableDelegations)
- **规范文档**: [查看规范](https://w3c.github.io/payment-handler/#dom-paymentmanager-enabledelegations)
- **标签**: `web-features:payment-handler`

## 使用示例

### 基本用法

```javascript
// PaymentManager.enableDelegations 使用示例
// 请查阅MDN文档了解具体用法
console.log('PaymentManager.enableDelegations API');
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
// 检查PaymentManager.enableDelegations是否支持
function isPaymentManagerEnableDelegationsSupported() {
    return 'enableDelegations' in paymentmanager && typeof paymentmanager.enableDelegations === 'function';
}

if (isPaymentManagerEnableDelegationsSupported()) {
    console.log('PaymentManager.enableDelegations 支持');
    // 使用PaymentManager.enableDelegations
} else {
    console.log('PaymentManager.enableDelegations 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PaymentManager.enableDelegations polyfill
if (!paymentmanager.enableDelegations) {
    // 在这里添加polyfill实现
    console.log('加载PaymentManager.enableDelegations polyfill');
}
```

