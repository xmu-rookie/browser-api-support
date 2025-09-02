# VideoTrackList.selectedIndex API 兼容性数据

## 基本信息

- **API名称**: `VideoTrackList.selectedIndex`
- **MDN文档**: [VideoTrackList.selectedIndex](https://developer.mozilla.org/docs/Web/API/VideoTrackList/selectedIndex)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/media.html#dom-videotracklist-selectedindex-dev)
- **标签**: `web-features:audio-video-tracks`

## 使用示例

### 基本用法

```javascript
// VideoTrackList.selectedIndex 使用示例
// 请查阅MDN文档了解具体用法
console.log('VideoTrackList.selectedIndex API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 37 |  |
| Chrome Android | 同主版本 |  |
| Edge | 79 |  |
| Firefox | 33 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
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

- **支持版本**: 37
- **需要标志**: 
  - enable-experimental-web-platform-features: enabled

### Edge

- **支持版本**: 79
- **需要标志**: 
  - enable-experimental-web-platform-features: enabled
- **支持版本**: 12
- **移除版本**: 79

### Firefox

- **支持版本**: 33
- **需要标志**: 
  - media.track.enabled: true

### Internet Explorer

- **支持版本**: 10

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查VideoTrackList.selectedIndex是否支持
function isVideoTrackListSelectedIndexSupported() {
    return 'selectedIndex' in videotracklist && typeof videotracklist.selectedIndex === 'function';
}

if (isVideoTrackListSelectedIndexSupported()) {
    console.log('VideoTrackList.selectedIndex 支持');
    // 使用VideoTrackList.selectedIndex
} else {
    console.log('VideoTrackList.selectedIndex 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VideoTrackList.selectedIndex polyfill
if (!videotracklist.selectedIndex) {
    // 在这里添加polyfill实现
    console.log('加载VideoTrackList.selectedIndex polyfill');
}
```

