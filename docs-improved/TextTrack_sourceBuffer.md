# TextTrack.sourceBuffer API 兼容性数据

## 基本信息

- **API名称**: `TextTrack.sourceBuffer`
- **MDN文档**: [TextTrack.sourceBuffer](https://developer.mozilla.org/docs/Web/API/TextTrack/sourceBuffer)
- **规范文档**: [查看规范](https://w3c.github.io/media-source/#dom-texttrack-sourcebuffer)
- **标签**: `web-features:media-source`

## 使用示例

### 基本用法

```javascript
// TextTrack.sourceBuffer 使用示例
// 请查阅MDN文档了解具体用法
console.log('TextTrack.sourceBuffer API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 13 | Exposed in Mobile Safari on iPad but not on iPhone. |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 8

### Safari iOS

- **支持版本**: 13
- **部分实现**: 是
- **注意事项**:
  - Exposed in Mobile Safari on iPad but not on iPhone.

## 兼容性检查代码

### 特性检测

```javascript
// 检查TextTrack.sourceBuffer是否支持
function isTextTrackSourceBufferSupported() {
    return 'sourceBuffer' in texttrack && typeof texttrack.sourceBuffer === 'function';
}

if (isTextTrackSourceBufferSupported()) {
    console.log('TextTrack.sourceBuffer 支持');
    // 使用TextTrack.sourceBuffer
} else {
    console.log('TextTrack.sourceBuffer 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// TextTrack.sourceBuffer polyfill
if (!texttrack.sourceBuffer) {
    // 在这里添加polyfill实现
    console.log('加载TextTrack.sourceBuffer polyfill');
}
```

