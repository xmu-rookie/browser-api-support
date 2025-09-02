# ClipboardEvent.ClipboardEvent API 兼容性数据

## 基本信息

- **API名称**: `ClipboardEvent.ClipboardEvent`
- **MDN文档**: [ClipboardEvent.ClipboardEvent](https://developer.mozilla.org/docs/Web/API/ClipboardEvent/ClipboardEvent)
- **规范文档**: [查看规范](https://w3c.github.io/clipboard-apis/#dom-clipboardevent-clipboardevent)
- **标签**: `web-features:clipboard-events`
- **描述**: `ClipboardEvent()` constructor

## 使用示例

### 基本用法

```javascript
// ClipboardEvent.ClipboardEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('ClipboardEvent.ClipboardEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 58 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 22 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 58

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 22

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查ClipboardEvent.ClipboardEvent是否支持
function isClipboardEventClipboardEventSupported() {
    return 'ClipboardEvent' in clipboardevent && typeof clipboardevent.ClipboardEvent === 'function';
}

if (isClipboardEventClipboardEventSupported()) {
    console.log('ClipboardEvent.ClipboardEvent 支持');
    // 使用ClipboardEvent.ClipboardEvent
} else {
    console.log('ClipboardEvent.ClipboardEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ClipboardEvent.ClipboardEvent polyfill
if (!clipboardevent.ClipboardEvent) {
    // 在这里添加polyfill实现
    console.log('加载ClipboardEvent.ClipboardEvent polyfill');
}
```

