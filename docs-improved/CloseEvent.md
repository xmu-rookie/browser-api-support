# CloseEvent API 兼容性数据

## 基本信息

- **API名称**: `CloseEvent`
- **MDN文档**: [CloseEvent](https://developer.mozilla.org/docs/Web/API/CloseEvent)
- **规范文档**: [查看规范](https://websockets.spec.whatwg.org/#the-closeevent-interface)
- **标签**: `web-features:websockets`

## 使用示例

### 基本用法

```javascript
// CloseEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('CloseEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 15 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.4 |  |
| Edge | 12 |  |
| Firefox | 8 | Before Firefox 12, the close code `CLOSE_NORMAL` was used when the channel was closed due to an unex... |
| Firefox Android | 8 |  |
| Internet Explorer | 10 |  |
| Node.js | 23.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 12.1 |  |
| Opera Android | 12.1 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 15

### Deno

- **支持版本**: 1.4

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 8
- **注意事项**:
  - Before Firefox 12, the close code `CLOSE_NORMAL` was used when the channel was closed due to an unexpected error or unspecified error condition.
  - Before Firefox 8, the `WebSocket` close event was sent to the listener as a simple event.

### Firefox Android

- **支持版本**: 8

### Internet Explorer

- **支持版本**: 10

### Node.js

- **支持版本**: 23.0.0

### Opera

- **支持版本**: 12.1

### Opera Android

- **支持版本**: 12.1

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查CloseEvent是否支持
function isCloseEventSupported() {
    return 'CloseEvent' in window || typeof CloseEvent !== 'undefined';
}

if (isCloseEventSupported()) {
    console.log('CloseEvent 支持');
    // 使用CloseEvent
} else {
    console.log('CloseEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CloseEvent polyfill
if (!window.CloseEvent) {
    // 在这里添加polyfill实现
    console.log('加载CloseEvent polyfill');
}
```

