# ServiceWorkerGlobalScope.backgroundfetchabort_event API 兼容性数据

## 基本信息

- **API名称**: `ServiceWorkerGlobalScope.backgroundfetchabort_event`
- **MDN文档**: [ServiceWorkerGlobalScope.backgroundfetchabort_event](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchabort_event)
- **规范文档**: [查看规范](https://wicg.github.io/background-fetch/#dom-serviceworkerglobalscope-onbackgroundfetchabort)
- **标签**: `web-features:background-fetch`
- **描述**: `backgroundfetchabort` event

## 使用示例

### 基本用法

```javascript
// ServiceWorkerGlobalScope.backgroundfetchabort_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('ServiceWorkerGlobalScope.backgroundfetchabort_event API');
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
// 检查ServiceWorkerGlobalScope.backgroundfetchabort_event是否支持
function isServiceWorkerGlobalScopeBackgroundfetchabort_eventSupported() {
    return 'backgroundfetchabort_event' in serviceworkerglobalscope && typeof serviceworkerglobalscope.backgroundfetchabort_event === 'function';
}

if (isServiceWorkerGlobalScopeBackgroundfetchabort_eventSupported()) {
    console.log('ServiceWorkerGlobalScope.backgroundfetchabort_event 支持');
    // 使用ServiceWorkerGlobalScope.backgroundfetchabort_event
} else {
    console.log('ServiceWorkerGlobalScope.backgroundfetchabort_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ServiceWorkerGlobalScope.backgroundfetchabort_event polyfill
if (!serviceworkerglobalscope.backgroundfetchabort_event) {
    // 在这里添加polyfill实现
    console.log('加载ServiceWorkerGlobalScope.backgroundfetchabort_event polyfill');
}
```

