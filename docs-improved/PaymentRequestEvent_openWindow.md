# PaymentRequestEvent.openWindow API 兼容性数据

## 基本信息

- **API名称**: `PaymentRequestEvent.openWindow`
- **MDN文档**: [PaymentRequestEvent.openWindow](https://developer.mozilla.org/docs/Web/API/PaymentRequestEvent/openWindow)
- **规范文档**: [查看规范](https://w3c.github.io/payment-handler/#dom-paymentrequestevent-openwindow)
- **标签**: `web-features:payment-handler`
- **描述**: `openWindow()`

## 使用示例

### 基本用法

```javascript
// PaymentRequestEvent.openWindow 使用示例
// 请查阅MDN文档了解具体用法
console.log('PaymentRequestEvent.openWindow API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 70 |  |
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

- **支持版本**: 70

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PaymentRequestEvent.openWindow是否支持
function isPaymentRequestEventOpenWindowSupported() {
    return 'openWindow' in paymentrequestevent && typeof paymentrequestevent.openWindow === 'function';
}

if (isPaymentRequestEventOpenWindowSupported()) {
    console.log('PaymentRequestEvent.openWindow 支持');
    // 使用PaymentRequestEvent.openWindow
} else {
    console.log('PaymentRequestEvent.openWindow 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PaymentRequestEvent.openWindow polyfill
if (!paymentrequestevent.openWindow) {
    // 在这里添加polyfill实现
    console.log('加载PaymentRequestEvent.openWindow polyfill');
}
```

