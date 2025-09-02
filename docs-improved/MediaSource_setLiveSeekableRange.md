# MediaSource.setLiveSeekableRange API 兼容性数据

## 基本信息

- **API名称**: `MediaSource.setLiveSeekableRange`
- **MDN文档**: [MediaSource.setLiveSeekableRange](https://developer.mozilla.org/docs/Web/API/MediaSource/setLiveSeekableRange)
- **规范文档**: [查看规范](https://w3c.github.io/media-source/#dom-mediasource-setliveseekablerange)
- **标签**: `web-features:media-source`

## 使用示例

### 基本用法

```javascript
// MediaSource.setLiveSeekableRange 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaSource.setLiveSeekableRange API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 62 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 50 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 13 | Exposed in Mobile Safari on iPad but not on iPhone. |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 62

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 50

### Safari

- **支持版本**: 10.1

### Safari iOS

- **支持版本**: 13
- **部分实现**: 是
- **注意事项**:
  - Exposed in Mobile Safari on iPad but not on iPhone.

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaSource.setLiveSeekableRange是否支持
function isMediaSourceSetLiveSeekableRangeSupported() {
    return 'setLiveSeekableRange' in mediasource && typeof mediasource.setLiveSeekableRange === 'function';
}

if (isMediaSourceSetLiveSeekableRangeSupported()) {
    console.log('MediaSource.setLiveSeekableRange 支持');
    // 使用MediaSource.setLiveSeekableRange
} else {
    console.log('MediaSource.setLiveSeekableRange 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaSource.setLiveSeekableRange polyfill
if (!mediasource.setLiveSeekableRange) {
    // 在这里添加polyfill实现
    console.log('加载MediaSource.setLiveSeekableRange polyfill');
}
```

