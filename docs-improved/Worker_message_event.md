# Worker.message_event API 兼容性数据

## 基本信息

- **API名称**: `Worker.message_event`
- **MDN文档**: [Worker.message_event](https://developer.mozilla.org/docs/Web/API/Worker/message_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-message)
- **标签**: `web-features:postmessage`
- **描述**: `message` event

## 使用示例

### 基本用法

```javascript
// Worker.message_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('Worker.message_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 4 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 3.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Node.js | 11.7.0 | Supports the event, but only via Node `EventEmitter`. |
| Oculus | 同主版本 |  |
| Opera | 10.6 |  |
| Opera Android | 11.5 |  |
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

### Deno

- **支持版本**: 1.0

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

- **支持版本**: 11.5

### Safari

- **支持版本**: 4

### Safari iOS

- **支持版本**: 5

## 兼容性检查代码

### 特性检测

```javascript
// 检查Worker.message_event是否支持
function isWorkerMessage_eventSupported() {
    return 'message_event' in worker && typeof worker.message_event === 'function';
}

if (isWorkerMessage_eventSupported()) {
    console.log('Worker.message_event 支持');
    // 使用Worker.message_event
} else {
    console.log('Worker.message_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Worker.message_event polyfill
if (!worker.message_event) {
    // 在这里添加polyfill实现
    console.log('加载Worker.message_event polyfill');
}
```

