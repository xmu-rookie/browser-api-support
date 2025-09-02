# VideoFrame.timestamp API 兼容性数据

## 基本信息

- **API名称**: `VideoFrame.timestamp`
- **MDN文档**: [VideoFrame.timestamp](https://developer.mozilla.org/docs/Web/API/VideoFrame/timestamp)
- **规范文档**: [查看规范](https://w3c.github.io/webcodecs/#dom-videoframe-timestamp)
- **标签**: `web-features:webcodecs`

## 使用示例

### 基本用法

```javascript
// VideoFrame.timestamp 使用示例
// 请查阅MDN文档了解具体用法
console.log('VideoFrame.timestamp API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 94 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 130 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 94

### Firefox

- **支持版本**: 130

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查VideoFrame.timestamp是否支持
function isVideoFrameTimestampSupported() {
    return 'timestamp' in videoframe && typeof videoframe.timestamp === 'function';
}

if (isVideoFrameTimestampSupported()) {
    console.log('VideoFrame.timestamp 支持');
    // 使用VideoFrame.timestamp
} else {
    console.log('VideoFrame.timestamp 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VideoFrame.timestamp polyfill
if (!videoframe.timestamp) {
    // 在这里添加polyfill实现
    console.log('加载VideoFrame.timestamp polyfill');
}
```

