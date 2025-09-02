# DedicatedWorkerGlobalScope.message_event API 兼容性数据

## 基本信息

- **API名称**: `DedicatedWorkerGlobalScope.message_event`
- **MDN文档**: [DedicatedWorkerGlobalScope.message_event](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/message_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-message,https://html.spec.whatwg.org/multipage/web-messaging.html#handler-messageeventtarget-onmessage)
- **标签**: `web-features:postmessage`
- **描述**: `message` event

## 使用示例

### 基本用法

```javascript
// DedicatedWorkerGlobalScope.message_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('DedicatedWorkerGlobalScope.message_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 4 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 10.6 |  |
| Opera Android | 11.5 |  |
| Safari | 4 |  |
| Safari iOS | 5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 4

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: 10.6

### Opera Android

- **支持版本**: 11.5

### Safari

- **支持版本**: 4

### Safari iOS

- **支持版本**: 5

## 兼容性检查代码

### 特性检测

```javascript
// 检查DedicatedWorkerGlobalScope.message_event是否支持
function isDedicatedWorkerGlobalScopeMessage_eventSupported() {
    return 'message_event' in dedicatedworkerglobalscope && typeof dedicatedworkerglobalscope.message_event === 'function';
}

if (isDedicatedWorkerGlobalScopeMessage_eventSupported()) {
    console.log('DedicatedWorkerGlobalScope.message_event 支持');
    // 使用DedicatedWorkerGlobalScope.message_event
} else {
    console.log('DedicatedWorkerGlobalScope.message_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DedicatedWorkerGlobalScope.message_event polyfill
if (!dedicatedworkerglobalscope.message_event) {
    // 在这里添加polyfill实现
    console.log('加载DedicatedWorkerGlobalScope.message_event polyfill');
}
```

