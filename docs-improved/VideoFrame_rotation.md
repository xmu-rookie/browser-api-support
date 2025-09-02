# VideoFrame.rotation API 兼容性数据

## 基本信息

- **API名称**: `VideoFrame.rotation`
- **MDN文档**: [VideoFrame.rotation](https://developer.mozilla.org/docs/Web/API/VideoFrame/rotation)
- **规范文档**: [查看规范](https://w3c.github.io/webcodecs/#dom-videoframe-rotation)
- **标签**: `web-features:webcodecs`

## 使用示例

### 基本用法

```javascript
// VideoFrame.rotation 使用示例
// 请查阅MDN文档了解具体用法
console.log('VideoFrame.rotation API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 138 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 138

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查VideoFrame.rotation是否支持
function isVideoFrameRotationSupported() {
    return 'rotation' in videoframe && typeof videoframe.rotation === 'function';
}

if (isVideoFrameRotationSupported()) {
    console.log('VideoFrame.rotation 支持');
    // 使用VideoFrame.rotation
} else {
    console.log('VideoFrame.rotation 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VideoFrame.rotation polyfill
if (!videoframe.rotation) {
    // 在这里添加polyfill实现
    console.log('加载VideoFrame.rotation polyfill');
}
```

