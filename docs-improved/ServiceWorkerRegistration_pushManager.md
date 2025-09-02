# ServiceWorkerRegistration.pushManager API 兼容性数据

## 基本信息

- **API名称**: `ServiceWorkerRegistration.pushManager`
- **MDN文档**: [ServiceWorkerRegistration.pushManager](https://developer.mozilla.org/docs/Web/API/ServiceWorkerRegistration/pushManager)
- **规范文档**: [查看规范](https://w3c.github.io/push-api/#dom-serviceworkerregistration-pushmanager)
- **标签**: `web-features:push`

## 使用示例

### 基本用法

```javascript
// ServiceWorkerRegistration.pushManager 使用示例
// 请查阅MDN文档了解具体用法
console.log('ServiceWorkerRegistration.pushManager API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 40 |  |
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

- **支持版本**: 40

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
// 检查ServiceWorkerRegistration.pushManager是否支持
function isServiceWorkerRegistrationPushManagerSupported() {
    return 'pushManager' in serviceworkerregistration && typeof serviceworkerregistration.pushManager === 'function';
}

if (isServiceWorkerRegistrationPushManagerSupported()) {
    console.log('ServiceWorkerRegistration.pushManager 支持');
    // 使用ServiceWorkerRegistration.pushManager
} else {
    console.log('ServiceWorkerRegistration.pushManager 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ServiceWorkerRegistration.pushManager polyfill
if (!serviceworkerregistration.pushManager) {
    // 在这里添加polyfill实现
    console.log('加载ServiceWorkerRegistration.pushManager polyfill');
}
```

