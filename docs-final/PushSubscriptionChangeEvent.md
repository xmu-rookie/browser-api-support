# PushSubscriptionChangeEvent API 兼容性数据

## 基本信息

- **API名称**: `PushSubscriptionChangeEvent`
- **规范文档**: [查看规范](https://w3c.github.io/push-api/#pushsubscriptionchangeevent-interface)
- **标签**: `web-features:push`

## 使用示例

### 基本用法

```javascript
// PushSubscriptionChangeEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('PushSubscriptionChangeEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 138 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 137 | Before Firefox 137, The `pushsubscriptionchange` event is fired, but does not have the `oldSubscript... |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16 | Notifications are supported on macOS Ventura and later. |
| Safari iOS | 16.4 | Notifications are supported in web apps saved to the home screen. |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 不支持 | Notifications are supported in web apps saved to the home screen. |

## 详细兼容性信息

### Chrome

- **支持版本**: 138

### Edge

- **支持版本**: 17
- **移除版本**: 79

### Firefox

- **支持版本**: 137
- **注意事项**:
  - Before Firefox 137, The `pushsubscriptionchange` event is fired, but does not have the `oldSubscription` and `newSubscription` properties. See [bug 1635524](https://bugzil.la/1635524).

### Safari

- **支持版本**: 16
- **注意事项**:
  - Notifications are supported on macOS Ventura and later.

### Safari iOS

- **支持版本**: 16.4
- **注意事项**:
  - Notifications are supported in web apps saved to the home screen.

### webview_ios

- **支持版本**: 不支持
- **注意事项**:
  - Notifications are supported in web apps saved to the home screen.

