# MessagePort.messageerror_event API 兼容性数据

## 基本信息

- **API名称**: `MessagePort.messageerror_event`
- **MDN文档**: [MessagePort.messageerror_event](https://developer.mozilla.org/docs/Web/API/MessagePort/messageerror_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-messageerror,https://html.spec.whatwg.org/multipage/web-messaging.html#handler-messageport-onmessageerror)
- **标签**: `web-features:messageerror`
- **描述**: `messageerror` event

## 使用示例

### 基本用法

```javascript
// MessagePort.messageerror_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('MessagePort.messageerror_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 60 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.12 |  |
| Edge | 18 |  |
| Firefox | 57 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 14.7.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 47 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 60

### Deno

- **支持版本**: 1.12

### Edge

- **支持版本**: 18

### Firefox

- **支持版本**: 57

### Node.js

- **支持版本**: 14.7.0
- **支持版本**: 14.5.0
- **移除版本**: 14.7.0
- **部分实现**: 是
- **注意事项**:
  - Supports the event, but only via Node `EventEmitter`.
- **支持版本**: 12.19.0
- **移除版本**: 13.0.0
- **部分实现**: 是
- **注意事项**:
  - Supports the event, but only via Node `EventEmitter`.

### Opera Android

- **支持版本**: 47

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查MessagePort.messageerror_event是否支持
function isMessagePortMessageerror_eventSupported() {
    return 'messageerror_event' in messageport && typeof messageport.messageerror_event === 'function';
}

if (isMessagePortMessageerror_eventSupported()) {
    console.log('MessagePort.messageerror_event 支持');
    // 使用MessagePort.messageerror_event
} else {
    console.log('MessagePort.messageerror_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MessagePort.messageerror_event polyfill
if (!messageport.messageerror_event) {
    // 在这里添加polyfill实现
    console.log('加载MessagePort.messageerror_event polyfill');
}
```

