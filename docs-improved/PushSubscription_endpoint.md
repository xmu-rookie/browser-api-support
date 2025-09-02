# PushSubscription.endpoint API 兼容性数据

## 基本信息

- **API名称**: `PushSubscription.endpoint`
- **MDN文档**: [PushSubscription.endpoint](https://developer.mozilla.org/docs/Web/API/PushSubscription/endpoint)
- **规范文档**: [查看规范](https://w3c.github.io/push-api/#dom-pushsubscription-endpoint)
- **标签**: `web-features:push`

## 使用示例

### 基本用法

```javascript
// PushSubscription.endpoint 使用示例
// 请查阅MDN文档了解具体用法
console.log('PushSubscription.endpoint API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 42 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 44 |  |
| Firefox Android | 48 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16 | Notifications are supported on macOS Ventura and later. |
| Safari iOS | 16.4 | Notifications are supported in web apps saved to the home screen. |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 不支持 | Notifications are supported in web apps saved to the home screen. |

## 详细兼容性信息

### Chrome

- **支持版本**: 42

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 44

### Firefox Android

- **支持版本**: 48

### Safari

- **支持版本**: 16
- **注意事项**:
  - Notifications are supported on macOS Ventura and later.

### Safari iOS

- **支持版本**: 16.4
- **注意事项**:
  - Notifications are supported in web apps saved to the home screen.

### WebView Android

- **支持版本**: 不支持

### webview_ios

- **支持版本**: 不支持
- **注意事项**:
  - Notifications are supported in web apps saved to the home screen.

## 兼容性检查代码

### 特性检测

```javascript
// 检查PushSubscription.endpoint是否支持
function isPushSubscriptionEndpointSupported() {
    return 'endpoint' in pushsubscription && typeof pushsubscription.endpoint === 'function';
}

if (isPushSubscriptionEndpointSupported()) {
    console.log('PushSubscription.endpoint 支持');
    // 使用PushSubscription.endpoint
} else {
    console.log('PushSubscription.endpoint 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PushSubscription.endpoint polyfill
if (!pushsubscription.endpoint) {
    // 在这里添加polyfill实现
    console.log('加载PushSubscription.endpoint polyfill');
}
```

