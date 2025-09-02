# Worker.error_event API 兼容性数据

## 基本信息

- **API名称**: `Worker.error_event`
- **MDN文档**: [Worker.error_event](https://developer.mozilla.org/docs/Web/API/Worker/error_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/workers.html#handler-abstractworker-onerror)
- **标签**: `web-features:dedicated-workers`
- **描述**: `error` event

## 使用示例

### 基本用法

```javascript
// Worker.error_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Worker.error_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 4 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Node.js | 11.7.0 | Supports the event, but only via Node `EventEmitter`. |
| Oculus | 同主版本 |  |
| Opera | 10.6 |  |
| Opera Android | 11 |  |
| Safari | 4 |  |
| Safari iOS | 5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 4

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.5

### Internet Explorer

- **支持版本**: 10

### Node.js

- **支持版本**: 11.7.0
- **部分实现**: 是
- **注意事项**:
  - Supports the event, but only via Node `EventEmitter`.

### Opera

- **支持版本**: 10.6

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 4

### Safari iOS

- **支持版本**: 5

## 兼容性检查代码

### 特性检测

```javascript
// 检查Worker.error_event是否支持
function isWorkerError_eventSupported() {
    return 'error_event' in worker && typeof worker.error_event === 'function';
}

if (isWorkerError_eventSupported()) {
    console.log('Worker.error_event 支持');
    // 使用Worker.error_event
} else {
    console.log('Worker.error_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Worker.error_event polyfill
if (!worker.error_event) {
    // 在这里添加polyfill实现
    console.log('加载Worker.error_event polyfill');
}
```

