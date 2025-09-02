# TextTrack.mode API 兼容性数据

## 基本信息

- **API名称**: `TextTrack.mode`
- **MDN文档**: [TextTrack.mode](https://developer.mozilla.org/docs/Web/API/TextTrack/mode)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#dom-texttrack-mode-dev)
- **标签**: `web-features:text-tracks`

## 使用示例

### 基本用法

```javascript
// TextTrack.mode 使用示例
// 请查阅MDN文档了解具体用法
console.log('TextTrack.mode API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 23 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 31 | Before Firefox 52, using JavaScript to change the mode of a text track that's part of a media elemen... |
| Firefox Android | 31 |  |
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
- **注意事项**:
  - Before Firefox 52, using JavaScript to change the mode of a text track that's part of a media element would send one change event to the element's textTracks TextTrackList for each change, even if multiple changes are made in a single pass through the Firefox event loop. Starting in Firefox 52, these changes are reflected by a single event.

### Firefox Android

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

