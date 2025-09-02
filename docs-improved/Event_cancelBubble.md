# Event.cancelBubble API 兼容性数据

## 基本信息

- **API名称**: `Event.cancelBubble`
- **MDN文档**: [Event.cancelBubble](https://developer.mozilla.org/docs/Web/API/Event/cancelBubble)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-event-cancelbubble)

## 使用示例

### 基本用法

```javascript
// Event.cancelBubble 使用示例
// 请查阅MDN文档了解具体用法
console.log('Event.cancelBubble API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 1 | Starting with Chrome 58 and Opera 45, setting this property to false does nothing, as per [spec disc... |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 53 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Node.js | 14.5.0 | This is not used in Node.js and is provided purely for completeness. |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 | Starting with Chrome 58 and Opera 45, setting this property to false does nothing, as per [spec disc... |
| Opera Android | ≤12.1 | Starting with Chrome 58 and Opera 45, setting this property to false does nothing, as per [spec disc... |
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
- **注意事项**:
  - Starting with Chrome 58 and Opera 45, setting this property to false does nothing, as per [spec discussion](https://github.com/whatwg/dom/issues/211).

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 53
- **支持版本**: 1
- **移除版本**: 53
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`UIEvent`](https://developer.mozilla.org/docs/Web/API/UIEvent), not all `Event` objects.

### Internet Explorer

- **支持版本**: 9

### Node.js

- **支持版本**: 14.5.0
- **注意事项**:
  - This is not used in Node.js and is provided purely for completeness.

### Opera

- **支持版本**: ≤12.1
- **注意事项**:
  - Starting with Chrome 58 and Opera 45, setting this property to false does nothing, as per [spec discussion](https://github.com/whatwg/dom/issues/211).

### Opera Android

- **支持版本**: ≤12.1
- **注意事项**:
  - Starting with Chrome 58 and Opera 45, setting this property to false does nothing, as per [spec discussion](https://github.com/whatwg/dom/issues/211).

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Event.cancelBubble是否支持
function isEventCancelBubbleSupported() {
    return 'cancelBubble' in event && typeof event.cancelBubble === 'function';
}

if (isEventCancelBubbleSupported()) {
    console.log('Event.cancelBubble 支持');
    // 使用Event.cancelBubble
} else {
    console.log('Event.cancelBubble 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Event.cancelBubble polyfill
if (!event.cancelBubble) {
    // 在这里添加polyfill实现
    console.log('加载Event.cancelBubble polyfill');
}
```

