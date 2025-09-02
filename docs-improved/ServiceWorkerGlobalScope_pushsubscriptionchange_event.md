# ServiceWorkerGlobalScope.pushsubscriptionchange_event API 兼容性数据

## 基本信息

- **API名称**: `ServiceWorkerGlobalScope.pushsubscriptionchange_event`
- **MDN文档**: [ServiceWorkerGlobalScope.pushsubscriptionchange_event](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event)
- **规范文档**: [查看规范](https://w3c.github.io/push-api/#the-pushsubscriptionchange-event,https://w3c.github.io/push-api/#dom-serviceworkerglobalscope-onpushsubscriptionchange)
- **标签**: `web-features:push`
- **描述**: `pushsubscriptionchange` event

## 使用示例

### 基本用法

```javascript
// ServiceWorkerGlobalScope.pushsubscriptionchange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('ServiceWorkerGlobalScope.pushsubscriptionchange_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 138 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 44 | The event does not have the `oldSubscription` and `newSubscription` properties. See [bug 1497429](ht... |
| Firefox Android | 48 | The event does not have the `oldSubscription` and `newSubscription` properties. See [bug 1497429](ht... |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16 | Notifications are supported on macOS Ventura and later. |
| Safari iOS | 不支持 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 138

### Edge

- **支持版本**: 17
- **移除版本**: 79

### Firefox

- **支持版本**: 44
- **部分实现**: 是
- **注意事项**:
  - The event does not have the `oldSubscription` and `newSubscription` properties. See [bug 1497429](https://bugzil.la/1497429).

### Firefox Android

- **支持版本**: 48
- **部分实现**: 是
- **注意事项**:
  - The event does not have the `oldSubscription` and `newSubscription` properties. See [bug 1497429](https://bugzil.la/1497429).

### Safari

- **支持版本**: 16
- **注意事项**:
  - Notifications are supported on macOS Ventura and later.

### Safari iOS

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ServiceWorkerGlobalScope.pushsubscriptionchange_event是否支持
function isServiceWorkerGlobalScopePushsubscriptionchange_eventSupported() {
    return 'pushsubscriptionchange_event' in serviceworkerglobalscope && typeof serviceworkerglobalscope.pushsubscriptionchange_event === 'function';
}

if (isServiceWorkerGlobalScopePushsubscriptionchange_eventSupported()) {
    console.log('ServiceWorkerGlobalScope.pushsubscriptionchange_event 支持');
    // 使用ServiceWorkerGlobalScope.pushsubscriptionchange_event
} else {
    console.log('ServiceWorkerGlobalScope.pushsubscriptionchange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ServiceWorkerGlobalScope.pushsubscriptionchange_event polyfill
if (!serviceworkerglobalscope.pushsubscriptionchange_event) {
    // 在这里添加polyfill实现
    console.log('加载ServiceWorkerGlobalScope.pushsubscriptionchange_event polyfill');
}
```

