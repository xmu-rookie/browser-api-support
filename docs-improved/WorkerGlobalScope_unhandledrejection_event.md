# WorkerGlobalScope.unhandledrejection_event API 兼容性数据

## 基本信息

- **API名称**: `WorkerGlobalScope.unhandledrejection_event`
- **MDN文档**: [WorkerGlobalScope.unhandledrejection_event](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/unhandledrejection_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/workers.html#handler-workerglobalscope-onunhandledrejection)
- **标签**: `web-features:dedicated-workers`
- **描述**: `unhandledrejection` event

## 使用示例

### 基本用法

```javascript
// WorkerGlobalScope.unhandledrejection_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('WorkerGlobalScope.unhandledrejection_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 49 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 69 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 49

### Firefox

- **支持版本**: 69

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查WorkerGlobalScope.unhandledrejection_event是否支持
function isWorkerGlobalScopeUnhandledrejection_eventSupported() {
    return 'unhandledrejection_event' in workerglobalscope && typeof workerglobalscope.unhandledrejection_event === 'function';
}

if (isWorkerGlobalScopeUnhandledrejection_eventSupported()) {
    console.log('WorkerGlobalScope.unhandledrejection_event 支持');
    // 使用WorkerGlobalScope.unhandledrejection_event
} else {
    console.log('WorkerGlobalScope.unhandledrejection_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WorkerGlobalScope.unhandledrejection_event polyfill
if (!workerglobalscope.unhandledrejection_event) {
    // 在这里添加polyfill实现
    console.log('加载WorkerGlobalScope.unhandledrejection_event polyfill');
}
```

