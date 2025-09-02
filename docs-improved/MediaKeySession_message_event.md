# MediaKeySession.message_event API 兼容性数据

## 基本信息

- **API名称**: `MediaKeySession.message_event`
- **MDN文档**: [MediaKeySession.message_event](https://developer.mozilla.org/docs/Web/API/MediaKeySession/message_event)
- **规范文档**: [查看规范](https://w3c.github.io/encrypted-media/#dom-mediakeysession-onmessage)
- **标签**: `web-features:encrypted-media-extensions`
- **描述**: `message` event

## 使用示例

### 基本用法

```javascript
// MediaKeySession.message_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaKeySession.message_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 55 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 52 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 12.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 55 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 55
- **支持版本**: 42
- **移除版本**: 55
- **部分实现**: 是
- **注意事项**:
  - The `onmessage` event handler property is not supported.

### Firefox

- **支持版本**: 52

### Safari

- **支持版本**: 12.1

### WebView Android

- **支持版本**: 55
- **支持版本**: 43
- **移除版本**: 55
- **部分实现**: 是
- **注意事项**:
  - The `onmessage` event handler property is not supported.

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaKeySession.message_event是否支持
function isMediaKeySessionMessage_eventSupported() {
    return 'message_event' in mediakeysession && typeof mediakeysession.message_event === 'function';
}

if (isMediaKeySessionMessage_eventSupported()) {
    console.log('MediaKeySession.message_event 支持');
    // 使用MediaKeySession.message_event
} else {
    console.log('MediaKeySession.message_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaKeySession.message_event polyfill
if (!mediakeysession.message_event) {
    // 在这里添加polyfill实现
    console.log('加载MediaKeySession.message_event polyfill');
}
```

