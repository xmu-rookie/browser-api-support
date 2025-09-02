# Event.bubbles API 兼容性数据

## 基本信息

- **API名称**: `Event.bubbles`
- **MDN文档**: [Event.bubbles](https://developer.mozilla.org/docs/Web/API/Event/bubbles)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-event-bubbles③)
- **标签**: `web-features:events`

## 使用示例

### 基本用法

```javascript
// Event.bubbles 使用示例
// 请查阅MDN文档了解具体用法
console.log('Event.bubbles API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 1.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Node.js | 14.5.0 | This is not used in Node.js and is provided purely for completeness. |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 1

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1.5

### Internet Explorer

- **支持版本**: 9

### Node.js

- **支持版本**: 14.5.0
- **注意事项**:
  - This is not used in Node.js and is provided purely for completeness.

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Event.bubbles是否支持
function isEventBubblesSupported() {
    return 'bubbles' in event && typeof event.bubbles === 'function';
}

if (isEventBubblesSupported()) {
    console.log('Event.bubbles 支持');
    // 使用Event.bubbles
} else {
    console.log('Event.bubbles 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Event.bubbles polyfill
if (!event.bubbles) {
    // 在这里添加polyfill实现
    console.log('加载Event.bubbles polyfill');
}
```

