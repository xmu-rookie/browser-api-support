# ServiceWorkerGlobalScope.sync_event API 兼容性数据

## 基本信息

- **API名称**: `ServiceWorkerGlobalScope.sync_event`
- **MDN文档**: [ServiceWorkerGlobalScope.sync_event](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/sync_event)
- **规范文档**: [查看规范](https://wicg.github.io/background-sync/spec/#dom-serviceworkerglobalscope-onsync)
- **标签**: `web-features:background-sync`
- **描述**: `sync` event

## 使用示例

### 基本用法

```javascript
// ServiceWorkerGlobalScope.sync_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('ServiceWorkerGlobalScope.sync_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 49 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 24 |  |
| Opera Android | 24 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 49

### Firefox

- **支持版本**: 不支持

### Opera

- **支持版本**: 24

### Opera Android

- **支持版本**: 24

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ServiceWorkerGlobalScope.sync_event是否支持
function isServiceWorkerGlobalScopeSync_eventSupported() {
    return 'sync_event' in serviceworkerglobalscope && typeof serviceworkerglobalscope.sync_event === 'function';
}

if (isServiceWorkerGlobalScopeSync_eventSupported()) {
    console.log('ServiceWorkerGlobalScope.sync_event 支持');
    // 使用ServiceWorkerGlobalScope.sync_event
} else {
    console.log('ServiceWorkerGlobalScope.sync_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ServiceWorkerGlobalScope.sync_event polyfill
if (!serviceworkerglobalscope.sync_event) {
    // 在这里添加polyfill实现
    console.log('加载ServiceWorkerGlobalScope.sync_event polyfill');
}
```

