# SharedWorker.error_event API 兼容性数据

## 基本信息

- **API名称**: `SharedWorker.error_event`
- **MDN文档**: [SharedWorker.error_event](https://developer.mozilla.org/docs/Web/API/SharedWorker/error_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/workers.html#handler-abstractworker-onerror)
- **标签**: `web-features:shared-workers`
- **描述**: `error` event

## 使用示例

### 基本用法

```javascript
// SharedWorker.error_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('SharedWorker.error_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 5 |  |
| Chrome Android | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 29 |  |
| Firefox Android | 33 |  |
| Oculus | 同主版本 |  |
| Opera | 10.6 |  |
| Opera Android | 11 |  |
| Safari | 16 |  |
| Safari iOS | 16 |  |
| Samsung Internet | 4.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 5

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 29

### Firefox Android

- **支持版本**: 33

### Opera

- **支持版本**: 10.6

### Opera Android

- **支持版本**: 11
- **移除版本**: 14

### Safari

- **支持版本**: 16
- **支持版本**: 5
- **移除版本**: 7

### Safari iOS

- **支持版本**: 16
- **支持版本**: 5
- **移除版本**: 7

### Samsung Internet

- **支持版本**: 4.0
- **移除版本**: 5.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查SharedWorker.error_event是否支持
function isSharedWorkerError_eventSupported() {
    return 'error_event' in sharedworker && typeof sharedworker.error_event === 'function';
}

if (isSharedWorkerError_eventSupported()) {
    console.log('SharedWorker.error_event 支持');
    // 使用SharedWorker.error_event
} else {
    console.log('SharedWorker.error_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SharedWorker.error_event polyfill
if (!sharedworker.error_event) {
    // 在这里添加polyfill实现
    console.log('加载SharedWorker.error_event polyfill');
}
```

