# PushSubscription.subscriptionId API 兼容性数据

## 基本信息

- **API名称**: `PushSubscription.subscriptionId`
- **MDN文档**: [PushSubscription.subscriptionId](https://developer.mozilla.org/docs/Web/API/PushSubscription/subscriptionId)

## 使用示例

### 基本用法

```javascript
// PushSubscription.subscriptionId 使用示例
// 请查阅MDN文档了解具体用法
console.log('PushSubscription.subscriptionId API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 42 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
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

- **支持版本**: 42

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查PushSubscription.subscriptionId是否支持
function isPushSubscriptionSubscriptionIdSupported() {
    return 'subscriptionId' in pushsubscription && typeof pushsubscription.subscriptionId === 'function';
}

if (isPushSubscriptionSubscriptionIdSupported()) {
    console.log('PushSubscription.subscriptionId 支持');
    // 使用PushSubscription.subscriptionId
} else {
    console.log('PushSubscription.subscriptionId 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PushSubscription.subscriptionId polyfill
if (!pushsubscription.subscriptionId) {
    // 在这里添加polyfill实现
    console.log('加载PushSubscription.subscriptionId polyfill');
}
```

