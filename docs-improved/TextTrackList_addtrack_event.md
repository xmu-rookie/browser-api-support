# TextTrackList.addtrack_event API 兼容性数据

## 基本信息

- **API名称**: `TextTrackList.addtrack_event`
- **MDN文档**: [TextTrackList.addtrack_event](https://developer.mozilla.org/docs/Web/API/TextTrackList/addtrack_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#event-media-addtrack,https://html.spec.whatwg.org/multipage/media.html#handler-tracklist-onaddtrack)
- **标签**: `web-features:text-tracks`
- **描述**: `addtrack` event

## 使用示例

### 基本用法

```javascript
// TextTrackList.addtrack_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('TextTrackList.addtrack_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 23 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 31 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
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

- **支持版本**: 11

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
// 检查TextTrackList.addtrack_event是否支持
function isTextTrackListAddtrack_eventSupported() {
    return 'addtrack_event' in texttracklist && typeof texttracklist.addtrack_event === 'function';
}

if (isTextTrackListAddtrack_eventSupported()) {
    console.log('TextTrackList.addtrack_event 支持');
    // 使用TextTrackList.addtrack_event
} else {
    console.log('TextTrackList.addtrack_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TextTrackList.addtrack_event polyfill
if (!texttracklist.addtrack_event) {
    // 在这里添加polyfill实现
    console.log('加载TextTrackList.addtrack_event polyfill');
}
```

