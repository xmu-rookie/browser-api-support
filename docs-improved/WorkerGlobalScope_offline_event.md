# WorkerGlobalScope.offline_event API 兼容性数据

## 基本信息

- **API名称**: `WorkerGlobalScope.offline_event`
- **MDN文档**: [WorkerGlobalScope.offline_event](https://developer.mozilla.org/docs/Web/API/WorkerGlobalScope/offline_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/workers.html#handler-workerglobalscope-onoffline)
- **标签**: `web-features:online`
- **描述**: `offline` event

## 使用示例

### 基本用法

```javascript
// WorkerGlobalScope.offline_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('WorkerGlobalScope.offline_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 29 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 29

### Safari

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查WorkerGlobalScope.offline_event是否支持
function isWorkerGlobalScopeOffline_eventSupported() {
    return 'offline_event' in workerglobalscope && typeof workerglobalscope.offline_event === 'function';
}

if (isWorkerGlobalScopeOffline_eventSupported()) {
    console.log('WorkerGlobalScope.offline_event 支持');
    // 使用WorkerGlobalScope.offline_event
} else {
    console.log('WorkerGlobalScope.offline_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WorkerGlobalScope.offline_event polyfill
if (!workerglobalscope.offline_event) {
    // 在这里添加polyfill实现
    console.log('加载WorkerGlobalScope.offline_event polyfill');
}
```

