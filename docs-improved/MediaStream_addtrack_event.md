# MediaStream.addtrack_event API 兼容性数据

## 基本信息

- **API名称**: `MediaStream.addtrack_event`
- **MDN文档**: [MediaStream.addtrack_event](https://developer.mozilla.org/docs/Web/API/MediaStream/addtrack_event)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-main/#event-mediastream-addtrack)
- **标签**: `web-features:media-capture`
- **描述**: `addtrack` event

## 使用示例

### 基本用法

```javascript
// MediaStream.addtrack_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaStream.addtrack_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 26 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 50 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 26

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 50

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaStream.addtrack_event是否支持
function isMediaStreamAddtrack_eventSupported() {
    return 'addtrack_event' in mediastream && typeof mediastream.addtrack_event === 'function';
}

if (isMediaStreamAddtrack_eventSupported()) {
    console.log('MediaStream.addtrack_event 支持');
    // 使用MediaStream.addtrack_event
} else {
    console.log('MediaStream.addtrack_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaStream.addtrack_event polyfill
if (!mediastream.addtrack_event) {
    // 在这里添加polyfill实现
    console.log('加载MediaStream.addtrack_event polyfill');
}
```

