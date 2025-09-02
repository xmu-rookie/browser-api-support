# DedicatedWorkerGlobalScope.messageerror_event API 兼容性数据

## 基本信息

- **API名称**: `DedicatedWorkerGlobalScope.messageerror_event`
- **MDN文档**: [DedicatedWorkerGlobalScope.messageerror_event](https://developer.mozilla.org/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-messageerror,https://html.spec.whatwg.org/multipage/web-messaging.html#handler-messageeventtarget-onmessageerror)
- **标签**: `web-features:messageerror`
- **描述**: `messageerror` event

## 使用示例

### 基本用法

```javascript
// DedicatedWorkerGlobalScope.messageerror_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('DedicatedWorkerGlobalScope.messageerror_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 60 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 18 |  |
| Firefox | 57 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 47 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 60

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 18

### Firefox

- **支持版本**: 57

### Opera Android

- **支持版本**: 47

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查DedicatedWorkerGlobalScope.messageerror_event是否支持
function isDedicatedWorkerGlobalScopeMessageerror_eventSupported() {
    return 'messageerror_event' in dedicatedworkerglobalscope && typeof dedicatedworkerglobalscope.messageerror_event === 'function';
}

if (isDedicatedWorkerGlobalScopeMessageerror_eventSupported()) {
    console.log('DedicatedWorkerGlobalScope.messageerror_event 支持');
    // 使用DedicatedWorkerGlobalScope.messageerror_event
} else {
    console.log('DedicatedWorkerGlobalScope.messageerror_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// DedicatedWorkerGlobalScope.messageerror_event polyfill
if (!dedicatedworkerglobalscope.messageerror_event) {
    // 在这里添加polyfill实现
    console.log('加载DedicatedWorkerGlobalScope.messageerror_event polyfill');
}
```

