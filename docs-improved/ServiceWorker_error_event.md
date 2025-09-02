# ServiceWorker.error_event API 兼容性数据

## 基本信息

- **API名称**: `ServiceWorker.error_event`
- **MDN文档**: [ServiceWorker.error_event](https://developer.mozilla.org/docs/Web/API/ServiceWorker/error_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/workers.html#handler-abstractworker-onerror)
- **描述**: `error` event

## 使用示例

### 基本用法

```javascript
// ServiceWorker.error_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('ServiceWorker.error_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 40 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 44 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 40

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 44

### Safari

- **支持版本**: 11.1

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查ServiceWorker.error_event是否支持
function isServiceWorkerError_eventSupported() {
    return 'error_event' in serviceworker && typeof serviceworker.error_event === 'function';
}

if (isServiceWorkerError_eventSupported()) {
    console.log('ServiceWorker.error_event 支持');
    // 使用ServiceWorker.error_event
} else {
    console.log('ServiceWorker.error_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ServiceWorker.error_event polyfill
if (!serviceworker.error_event) {
    // 在这里添加polyfill实现
    console.log('加载ServiceWorker.error_event polyfill');
}
```

