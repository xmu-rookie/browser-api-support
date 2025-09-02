# VideoFrame.codedWidth API 兼容性数据

## 基本信息

- **API名称**: `VideoFrame.codedWidth`
- **MDN文档**: [VideoFrame.codedWidth](https://developer.mozilla.org/docs/Web/API/VideoFrame/codedWidth)
- **规范文档**: [查看规范](https://w3c.github.io/webcodecs/#dom-videoframe-codedwidth)
- **标签**: `web-features:webcodecs`

## 使用示例

### 基本用法

```javascript
// VideoFrame.codedWidth 使用示例
// 请查阅MDN文档了解具体用法
console.log('VideoFrame.codedWidth API');
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
// 检查VideoFrame.codedWidth是否支持
function isVideoFrameCodedWidthSupported() {
    return 'codedWidth' in videoframe && typeof videoframe.codedWidth === 'function';
}

if (isVideoFrameCodedWidthSupported()) {
    console.log('VideoFrame.codedWidth 支持');
    // 使用VideoFrame.codedWidth
} else {
    console.log('VideoFrame.codedWidth 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VideoFrame.codedWidth polyfill
if (!videoframe.codedWidth) {
    // 在这里添加polyfill实现
    console.log('加载VideoFrame.codedWidth polyfill');
}
```

