# ServiceWorkerGlobalScope.periodicsync_event API 兼容性数据

## 基本信息

- **API名称**: `ServiceWorkerGlobalScope.periodicsync_event`
- **MDN文档**: [ServiceWorkerGlobalScope.periodicsync_event](https://developer.mozilla.org/docs/Web/API/ServiceWorkerGlobalScope/periodicsync_event)
- **规范文档**: [查看规范](https://wicg.github.io/periodic-background-sync/#periodicsync-event,https://wicg.github.io/periodic-background-sync/#dom-serviceworkerglobalscope-onperiodicsync)
- **描述**: `periodicsync` event

## 使用示例

### 基本用法

```javascript
// ServiceWorkerGlobalScope.periodicsync_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('ServiceWorkerGlobalScope.periodicsync_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 80 |  |
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

- **支持版本**: 80

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ServiceWorkerGlobalScope.periodicsync_event是否支持
function isServiceWorkerGlobalScopePeriodicsync_eventSupported() {
    return 'periodicsync_event' in serviceworkerglobalscope && typeof serviceworkerglobalscope.periodicsync_event === 'function';
}

if (isServiceWorkerGlobalScopePeriodicsync_eventSupported()) {
    console.log('ServiceWorkerGlobalScope.periodicsync_event 支持');
    // 使用ServiceWorkerGlobalScope.periodicsync_event
} else {
    console.log('ServiceWorkerGlobalScope.periodicsync_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ServiceWorkerGlobalScope.periodicsync_event polyfill
if (!serviceworkerglobalscope.periodicsync_event) {
    // 在这里添加polyfill实现
    console.log('加载ServiceWorkerGlobalScope.periodicsync_event polyfill');
}
```

