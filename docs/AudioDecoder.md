# AudioDecoder API 兼容性数据

## 基本信息

- **API名称**: `AudioDecoder`
- **MDN文档**: [AudioDecoder](https://developer.mozilla.org/docs/Web/API/AudioDecoder)
- **规范文档**: [查看规范](https://w3c.github.io/webcodecs/#audiodecoder-interface)
- **标签**: `web-features:webcodecs`

## 使用示例

### 基本用法

```javascript
// AudioDecoder 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioDecoder API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 94 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 130 |  |
| Firefox Android | ❌ 不支持 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 26 |  |
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

- **支持版本**: 26

## 兼容性检查代码

### 特性检测

```javascript
// 检查AudioDecoder是否支持
function isAudioDecoderSupported() {
    return 'AudioDecoder' in window || typeof AudioDecoder !== 'undefined';
}

if (isAudioDecoderSupported()) {
    console.log('AudioDecoder 支持');
    // 使用AudioDecoder
} else {
    console.log('AudioDecoder 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioDecoder polyfill
if (!window.AudioDecoder) {
    // 在这里添加polyfill实现
    console.log('加载AudioDecoder polyfill');
}
```

