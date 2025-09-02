# Window.requestAnimationFrame API 兼容性数据

## 基本信息

- **API名称**: `Window.requestAnimationFrame`
- **MDN文档**: [Window.requestAnimationFrame](https://developer.mozilla.org/docs/Web/API/Window/requestAnimationFrame)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#dom-animationframeprovider-requestanimationframe)
- **标签**: `web-features:request-animation-frame`

## 使用示例

### 基本用法

```javascript
// Window.requestAnimationFrame 使用示例
// 请查阅MDN文档了解具体用法
console.log('Window.requestAnimationFrame API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 24 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 12 | Before version 17, Edge does not reliably fire `requestAnimationFrame` before the paint cycle. |
| Firefox | 23 | Callback parameter is a `DOMHighResTimestamp`. This means ten microsecond precision and zero time as... |
| Firefox Android | 23 |  |
| Internet Explorer | 10 | Internet Explorer does not reliably fire `requestAnimationFrame` before the paint cycle. |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 24
- **支持版本**: 10
- **前缀**: webkit

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 12
- **注意事项**:
  - Before version 17, Edge does not reliably fire `requestAnimationFrame` before the paint cycle.

### Firefox

- **支持版本**: 23
- **注意事项**:
  - Callback parameter is a `DOMHighResTimestamp`. This means ten microsecond precision and zero time as `performance.now()`.
- **支持版本**: 11
- **移除版本**: 42
- **前缀**: moz
- **注意事项**:
  - Callback parameter is a `DOMTimestamp`. This means millisecond precision and zero time as `Date.now()`.
- **支持版本**: 4
- **移除版本**: 11
- **前缀**: moz
- **注意事项**:
  - Could be called with no input parameters.

### Firefox Android

- **支持版本**: 23
- **支持版本**: 14
- **移除版本**: 42
- **前缀**: moz

### Internet Explorer

- **支持版本**: 10
- **注意事项**:
  - Internet Explorer does not reliably fire `requestAnimationFrame` before the paint cycle.

### Safari

- **支持版本**: 7
- **支持版本**: 6
- **前缀**: webkit

