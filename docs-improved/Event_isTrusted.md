# Event.isTrusted API 兼容性数据

## 基本信息

- **API名称**: `Event.isTrusted`
- **MDN文档**: [Event.isTrusted](https://developer.mozilla.org/docs/Web/API/Event/isTrusted)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-event-istrusted①)
- **标签**: `web-features:events`

## 使用示例

### 基本用法

```javascript
// Event.isTrusted 使用示例
// 请查阅MDN文档了解具体用法
console.log('Event.isTrusted API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 46 | Starting with Chrome 53 and Opera 40, untrusted events do not invoke the default action. |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 1.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 | In Internet Explorer, all events are trusted except those that are created with the `createEvent()` ... |
| Node.js | 14.5.0 |  |
| Oculus | 同主版本 |  |
| Opera | 33 | Starting with Chrome 53 and Opera 40, untrusted events do not invoke the default action. |
| Opera Android | 33 | Starting with Chrome 53 and Opera 40, untrusted events do not invoke the default action. |
| Safari | 10 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 46 | Starting with version 53, untrusted events do not invoke the default action. |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 46
- **注意事项**:
  - Starting with Chrome 53 and Opera 40, untrusted events do not invoke the default action.

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1.5

### Internet Explorer

- **支持版本**: 9
- **注意事项**:
  - In Internet Explorer, all events are trusted except those that are created with the `createEvent()` method.

### Node.js

- **支持版本**: 14.5.0

### Opera

- **支持版本**: 33
- **注意事项**:
  - Starting with Chrome 53 and Opera 40, untrusted events do not invoke the default action.

### Opera Android

- **支持版本**: 33
- **注意事项**:
  - Starting with Chrome 53 and Opera 40, untrusted events do not invoke the default action.

### Safari

- **支持版本**: 10

### WebView Android

- **支持版本**: 46
- **注意事项**:
  - Starting with version 53, untrusted events do not invoke the default action.

## 兼容性检查代码

### 特性检测

```javascript
// 检查Event.isTrusted是否支持
function isEventIsTrustedSupported() {
    return 'isTrusted' in event && typeof event.isTrusted === 'function';
}

if (isEventIsTrustedSupported()) {
    console.log('Event.isTrusted 支持');
    // 使用Event.isTrusted
} else {
    console.log('Event.isTrusted 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Event.isTrusted polyfill
if (!event.isTrusted) {
    // 在这里添加polyfill实现
    console.log('加载Event.isTrusted polyfill');
}
```

