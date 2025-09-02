# VideoDecoder.flush API 兼容性数据

## 基本信息

- **API名称**: `VideoDecoder.flush`
- **MDN文档**: [VideoDecoder.flush](https://developer.mozilla.org/docs/Web/API/VideoDecoder/flush)
- **规范文档**: [查看规范](https://w3c.github.io/webcodecs/#dom-videodecoder-flush)
- **标签**: `web-features:webcodecs`

## 使用示例

### 基本用法

```javascript
// VideoDecoder.flush 使用示例
// 请查阅MDN文档了解具体用法
console.log('VideoDecoder.flush API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 94 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 130 |  |
| Firefox Android | 不支持 |  |
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

### Firefox Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查VideoDecoder.flush是否支持
function isVideoDecoderFlushSupported() {
    return 'flush' in videodecoder && typeof videodecoder.flush === 'function';
}

if (isVideoDecoderFlushSupported()) {
    console.log('VideoDecoder.flush 支持');
    // 使用VideoDecoder.flush
} else {
    console.log('VideoDecoder.flush 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VideoDecoder.flush polyfill
if (!videodecoder.flush) {
    // 在这里添加polyfill实现
    console.log('加载VideoDecoder.flush polyfill');
}
```

