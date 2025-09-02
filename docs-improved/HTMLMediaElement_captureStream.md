# HTMLMediaElement.captureStream API 兼容性数据

## 基本信息

- **API名称**: `HTMLMediaElement.captureStream`
- **MDN文档**: [HTMLMediaElement.captureStream](https://developer.mozilla.org/docs/Web/API/HTMLMediaElement/captureStream)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-fromelement/#dom-htmlmediaelement-capturestream)
- **标签**: `web-features:capture-stream-audio-video`

## 使用示例

### 基本用法

```javascript
// HTMLMediaElement.captureStream 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLMediaElement.captureStream API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 62 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 15 |  |
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

- **支持版本**: 62

### Firefox

- **支持版本**: 15
- **前缀**: moz

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLMediaElement.captureStream是否支持
function isHTMLMediaElementCaptureStreamSupported() {
    return 'captureStream' in htmlmediaelement && typeof htmlmediaelement.captureStream === 'function';
}

if (isHTMLMediaElementCaptureStreamSupported()) {
    console.log('HTMLMediaElement.captureStream 支持');
    // 使用HTMLMediaElement.captureStream
} else {
    console.log('HTMLMediaElement.captureStream 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLMediaElement.captureStream polyfill
if (!htmlmediaelement.captureStream) {
    // 在这里添加polyfill实现
    console.log('加载HTMLMediaElement.captureStream polyfill');
}
```

