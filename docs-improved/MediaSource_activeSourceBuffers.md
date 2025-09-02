# MediaSource.activeSourceBuffers API 兼容性数据

## 基本信息

- **API名称**: `MediaSource.activeSourceBuffers`
- **MDN文档**: [MediaSource.activeSourceBuffers](https://developer.mozilla.org/docs/Web/API/MediaSource/activeSourceBuffers)
- **规范文档**: [查看规范](https://w3c.github.io/media-source/#dom-mediasource-activesourcebuffers)
- **标签**: `web-features:media-source`

## 使用示例

### 基本用法

```javascript
// MediaSource.activeSourceBuffers 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaSource.activeSourceBuffers API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 23 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 42 |  |
| Firefox Android | 41 |  |
| Internet Explorer | 11 | Only works on Windows 8+. |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 13 | Exposed in Mobile Safari on iPad but not on iPhone. |
| Samsung Internet | 同主版本 |  |
| WebView Android | 4.4.3 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 23

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 42

### Firefox Android

- **支持版本**: 41

### Internet Explorer

- **支持版本**: 11
- **注意事项**:
  - Only works on Windows 8+.

### Safari

- **支持版本**: 8

### Safari iOS

- **支持版本**: 13
- **部分实现**: 是
- **注意事项**:
  - Exposed in Mobile Safari on iPad but not on iPhone.

### WebView Android

- **支持版本**: 4.4.3

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaSource.activeSourceBuffers是否支持
function isMediaSourceActiveSourceBuffersSupported() {
    return 'activeSourceBuffers' in mediasource && typeof mediasource.activeSourceBuffers === 'function';
}

if (isMediaSourceActiveSourceBuffersSupported()) {
    console.log('MediaSource.activeSourceBuffers 支持');
    // 使用MediaSource.activeSourceBuffers
} else {
    console.log('MediaSource.activeSourceBuffers 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaSource.activeSourceBuffers polyfill
if (!mediasource.activeSourceBuffers) {
    // 在这里添加polyfill实现
    console.log('加载MediaSource.activeSourceBuffers polyfill');
}
```

