# VideoDecoder.isConfigSupported_static.flip_option API 兼容性数据

## 基本信息

- **API名称**: `VideoDecoder.isConfigSupported_static.flip_option`
- **规范文档**: [查看规范](https://w3c.github.io/webcodecs/#dom-videodecoderconfig-flip)
- **标签**: `web-features:webcodecs`
- **描述**: `flip` configuration option

## 使用示例

### 基本用法

```javascript
// VideoDecoder.isConfigSupported_static.flip_option 使用示例
// 请查阅MDN文档了解具体用法
console.log('VideoDecoder.isConfigSupported_static.flip_option API');
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
// 检查VideoDecoder.isConfigSupported_static.flip_option是否支持
function isVideoDecoderIsConfigSupported_staticSupported() {
    return 'isConfigSupported_static' in videodecoder && typeof videodecoder.isConfigSupported_static === 'function';
}

if (isVideoDecoderIsConfigSupported_staticSupported()) {
    console.log('VideoDecoder.isConfigSupported_static.flip_option 支持');
    // 使用VideoDecoder.isConfigSupported_static.flip_option
} else {
    console.log('VideoDecoder.isConfigSupported_static.flip_option 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VideoDecoder.isConfigSupported_static.flip_option polyfill
if (!videodecoder.isConfigSupported_static) {
    // 在这里添加polyfill实现
    console.log('加载VideoDecoder.isConfigSupported_static.flip_option polyfill');
}
```

