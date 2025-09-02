# ServiceWorkerGlobalScope.abortpayment_event API 兼容性数据

## 基本信息

- **API名称**: `ServiceWorkerGlobalScope.abortpayment_event`
- **描述**: `abortpayment` event

## 使用示例

### 基本用法

```javascript
// ServiceWorkerGlobalScope.abortpayment_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('ServiceWorkerGlobalScope.abortpayment_event API');
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
// 检查ServiceWorkerGlobalScope.abortpayment_event是否支持
function isServiceWorkerGlobalScopeAbortpayment_eventSupported() {
    return 'abortpayment_event' in serviceworkerglobalscope && typeof serviceworkerglobalscope.abortpayment_event === 'function';
}

if (isServiceWorkerGlobalScopeAbortpayment_eventSupported()) {
    console.log('ServiceWorkerGlobalScope.abortpayment_event 支持');
    // 使用ServiceWorkerGlobalScope.abortpayment_event
} else {
    console.log('ServiceWorkerGlobalScope.abortpayment_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ServiceWorkerGlobalScope.abortpayment_event polyfill
if (!serviceworkerglobalscope.abortpayment_event) {
    // 在这里添加polyfill实现
    console.log('加载ServiceWorkerGlobalScope.abortpayment_event polyfill');
}
```

