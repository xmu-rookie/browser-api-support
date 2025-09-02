# ServiceWorkerGlobalScope.push_event API 兼容性数据

## 基本信息

- **API名称**: `ServiceWorkerGlobalScope.push_event`
- **MDN文档**: [ServiceWorkerGlobalScope.push_event](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/push_event)
- **规范文档**: [查看规范](https://w3c.github.io/push-api/#extensions-to-the-serviceworkerglobalscope-interface,https://w3c.github.io/push-api/#dom-serviceworkerglobalscope-onpush)
- **标签**: `web-features:push`
- **描述**: `push` event

## 使用示例

### 基本用法

```javascript
// ServiceWorkerGlobalScope.push_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('ServiceWorkerGlobalScope.push_event API');
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
| Opera | 24 |  |
| Opera Android | 24 |  |
| Safari | 16 | Notifications are supported on macOS Ventura and later. |
| Safari iOS | 16.4 | Notifications are supported in web apps saved to the home screen. |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
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

### Opera

- **支持版本**: 24

### Opera Android

- **支持版本**: 24

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

## 兼容性检查代码

### 特性检测

```javascript
// 检查ServiceWorkerGlobalScope.push_event是否支持
function isServiceWorkerGlobalScopePush_eventSupported() {
    return 'push_event' in serviceworkerglobalscope && typeof serviceworkerglobalscope.push_event === 'function';
}

if (isServiceWorkerGlobalScopePush_eventSupported()) {
    console.log('ServiceWorkerGlobalScope.push_event 支持');
    // 使用ServiceWorkerGlobalScope.push_event
} else {
    console.log('ServiceWorkerGlobalScope.push_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ServiceWorkerGlobalScope.push_event polyfill
if (!serviceworkerglobalscope.push_event) {
    // 在这里添加polyfill实现
    console.log('加载ServiceWorkerGlobalScope.push_event polyfill');
}
```

