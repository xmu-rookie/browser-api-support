# PushSubscriptionChangeEvent.PushSubscriptionChangeEvent API 兼容性数据

## 基本信息

- **API名称**: `PushSubscriptionChangeEvent.PushSubscriptionChangeEvent`
- **规范文档**: [查看规范](https://w3c.github.io/push-api/#dom-pushsubscriptionchangeevent-constructor)
- **标签**: `web-features:push`
- **描述**: `PushSubscriptionChangeEvent()` constructor

## 使用示例

### 基本用法

```javascript
// PushSubscriptionChangeEvent.PushSubscriptionChangeEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('PushSubscriptionChangeEvent.PushSubscriptionChangeEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 138 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 137 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.1 |  |
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

### Safari

- **支持版本**: 16.1

### Safari iOS

- **支持版本**: 16.4
- **注意事项**:
  - Notifications are supported in web apps saved to the home screen.

### webview_ios

- **支持版本**: 不支持
- **注意事项**:
  - Notifications are supported in web apps saved to the home screen.

## 兼容性检查代码

### 特性检测

```javascript
// 检查PushSubscriptionChangeEvent.PushSubscriptionChangeEvent是否支持
function isPushSubscriptionChangeEventPushSubscriptionChangeEventSupported() {
    return 'PushSubscriptionChangeEvent' in pushsubscriptionchangeevent && typeof pushsubscriptionchangeevent.PushSubscriptionChangeEvent === 'function';
}

if (isPushSubscriptionChangeEventPushSubscriptionChangeEventSupported()) {
    console.log('PushSubscriptionChangeEvent.PushSubscriptionChangeEvent 支持');
    // 使用PushSubscriptionChangeEvent.PushSubscriptionChangeEvent
} else {
    console.log('PushSubscriptionChangeEvent.PushSubscriptionChangeEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// PushSubscriptionChangeEvent.PushSubscriptionChangeEvent polyfill
if (!pushsubscriptionchangeevent.PushSubscriptionChangeEvent) {
    // 在这里添加polyfill实现
    console.log('加载PushSubscriptionChangeEvent.PushSubscriptionChangeEvent polyfill');
}
```

