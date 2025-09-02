# TextTrackList.change_event API 兼容性数据

## 基本信息

- **API名称**: `TextTrackList.change_event`
- **MDN文档**: [TextTrackList.change_event](https://developer.mozilla.org/docs/Web/API/TextTrackList/change_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#event-media-change,https://html.spec.whatwg.org/multipage/media.html#handler-tracklist-onchange)
- **标签**: `web-features:text-tracks`
- **描述**: `change` event

## 使用示例

### 基本用法

```javascript
// TextTrackList.change_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('TextTrackList.change_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 33 |  |
| Chrome Android | 同主版本 |  |
| Edge | 18 |  |
| Firefox | 31 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 4.4 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 33

### Edge

- **支持版本**: 18

### Firefox

- **支持版本**: 31

### Safari

- **支持版本**: 7

### WebView Android

- **支持版本**: 4.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查TextTrackList.change_event是否支持
function isTextTrackListChange_eventSupported() {
    return 'change_event' in texttracklist && typeof texttracklist.change_event === 'function';
}

if (isTextTrackListChange_eventSupported()) {
    console.log('TextTrackList.change_event 支持');
    // 使用TextTrackList.change_event
} else {
    console.log('TextTrackList.change_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TextTrackList.change_event polyfill
if (!texttracklist.change_event) {
    // 在这里添加polyfill实现
    console.log('加载TextTrackList.change_event polyfill');
}
```

