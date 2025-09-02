# TextTrack.cuechange_event API 兼容性数据

## 基本信息

- **API名称**: `TextTrack.cuechange_event`
- **MDN文档**: [TextTrack.cuechange_event](https://developer.mozilla.org/docs/Web/API/TextTrack/cuechange_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#event-media-cuechange,https://html.spec.whatwg.org/multipage/media.html#handler-texttrack-oncuechange)
- **标签**: `web-features:text-tracks`
- **描述**: `cuechange` event

## 使用示例

### 基本用法

```javascript
// TextTrack.cuechange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('TextTrack.cuechange_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 23 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 31 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 6 |  |
| Safari iOS | 7 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 23

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 31

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 6

### Safari iOS

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查TextTrack.cuechange_event是否支持
function isTextTrackCuechange_eventSupported() {
    return 'cuechange_event' in texttrack && typeof texttrack.cuechange_event === 'function';
}

if (isTextTrackCuechange_eventSupported()) {
    console.log('TextTrack.cuechange_event 支持');
    // 使用TextTrack.cuechange_event
} else {
    console.log('TextTrack.cuechange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TextTrack.cuechange_event polyfill
if (!texttrack.cuechange_event) {
    // 在这里添加polyfill实现
    console.log('加载TextTrack.cuechange_event polyfill');
}
```

