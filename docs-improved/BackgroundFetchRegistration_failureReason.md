# BackgroundFetchRegistration.failureReason API 兼容性数据

## 基本信息

- **API名称**: `BackgroundFetchRegistration.failureReason`
- **MDN文档**: [BackgroundFetchRegistration.failureReason](https://developer.mozilla.org/docs/Web/API/BackgroundFetchRegistration/failureReason)
- **规范文档**: [查看规范](https://wicg.github.io/background-fetch/#dom-backgroundfetchregistration-failurereason)
- **标签**: `web-features:background-fetch`

## 使用示例

### 基本用法

```javascript
// BackgroundFetchRegistration.failureReason 使用示例
// 请查阅MDN文档了解具体用法
console.log('BackgroundFetchRegistration.failureReason API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 74 |  |
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

- **支持版本**: 74

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查BackgroundFetchRegistration.failureReason是否支持
function isBackgroundFetchRegistrationFailureReasonSupported() {
    return 'failureReason' in backgroundfetchregistration && typeof backgroundfetchregistration.failureReason === 'function';
}

if (isBackgroundFetchRegistrationFailureReasonSupported()) {
    console.log('BackgroundFetchRegistration.failureReason 支持');
    // 使用BackgroundFetchRegistration.failureReason
} else {
    console.log('BackgroundFetchRegistration.failureReason 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BackgroundFetchRegistration.failureReason polyfill
if (!backgroundfetchregistration.failureReason) {
    // 在这里添加polyfill实现
    console.log('加载BackgroundFetchRegistration.failureReason polyfill');
}
```

