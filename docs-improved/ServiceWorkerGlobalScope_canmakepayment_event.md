# ServiceWorkerGlobalScope.canmakepayment_event API 兼容性数据

## 基本信息

- **API名称**: `ServiceWorkerGlobalScope.canmakepayment_event`
- **MDN文档**: [ServiceWorkerGlobalScope.canmakepayment_event](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event)
- **规范文档**: [查看规范](https://w3c.github.io/payment-handler/#the-canmakepaymentevent)
- **标签**: `web-features:payment-handler`
- **描述**: `canmakepayment` event

## 使用示例

### 基本用法

```javascript
// ServiceWorkerGlobalScope.canmakepayment_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('ServiceWorkerGlobalScope.canmakepayment_event API');
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
// 检查ServiceWorkerGlobalScope.canmakepayment_event是否支持
function isServiceWorkerGlobalScopeCanmakepayment_eventSupported() {
    return 'canmakepayment_event' in serviceworkerglobalscope && typeof serviceworkerglobalscope.canmakepayment_event === 'function';
}

if (isServiceWorkerGlobalScopeCanmakepayment_eventSupported()) {
    console.log('ServiceWorkerGlobalScope.canmakepayment_event 支持');
    // 使用ServiceWorkerGlobalScope.canmakepayment_event
} else {
    console.log('ServiceWorkerGlobalScope.canmakepayment_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ServiceWorkerGlobalScope.canmakepayment_event polyfill
if (!serviceworkerglobalscope.canmakepayment_event) {
    // 在这里添加polyfill实现
    console.log('加载ServiceWorkerGlobalScope.canmakepayment_event polyfill');
}
```

