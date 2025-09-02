# VideoFrame.colorSpace API 兼容性数据

## 基本信息

- **API名称**: `VideoFrame.colorSpace`
- **MDN文档**: [VideoFrame.colorSpace](https://developer.mozilla.org/docs/Web/API/VideoFrame/colorSpace)
- **规范文档**: [查看规范](https://w3c.github.io/webcodecs/#dom-videoframe-colorspace)
- **标签**: `web-features:webcodecs`

## 使用示例

### 基本用法

```javascript
// VideoFrame.colorSpace 使用示例
// 请查阅MDN文档了解具体用法
console.log('VideoFrame.colorSpace API');
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
// 检查VideoFrame.colorSpace是否支持
function isVideoFrameColorSpaceSupported() {
    return 'colorSpace' in videoframe && typeof videoframe.colorSpace === 'function';
}

if (isVideoFrameColorSpaceSupported()) {
    console.log('VideoFrame.colorSpace 支持');
    // 使用VideoFrame.colorSpace
} else {
    console.log('VideoFrame.colorSpace 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VideoFrame.colorSpace polyfill
if (!videoframe.colorSpace) {
    // 在这里添加polyfill实现
    console.log('加载VideoFrame.colorSpace polyfill');
}
```

