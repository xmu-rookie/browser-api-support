# AudioData.sampleRate API 兼容性数据

## 基本信息

- **API名称**: `AudioData.sampleRate`
- **MDN文档**: [AudioData.sampleRate](https://developer.mozilla.org/docs/Web/API/AudioData/sampleRate)
- **规范文档**: [查看规范](https://w3c.github.io/webcodecs/#dom-audiodata-samplerate)
- **标签**: `web-features:webcodecs`

## 使用示例

### 基本用法

```javascript
// AudioData.sampleRate 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioData.sampleRate API');
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
// 检查AudioData.sampleRate是否支持
function isAudioDataSampleRateSupported() {
    return 'sampleRate' in audiodata && typeof audiodata.sampleRate === 'function';
}

if (isAudioDataSampleRateSupported()) {
    console.log('AudioData.sampleRate 支持');
    // 使用AudioData.sampleRate
} else {
    console.log('AudioData.sampleRate 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioData.sampleRate polyfill
if (!audiodata.sampleRate) {
    // 在这里添加polyfill实现
    console.log('加载AudioData.sampleRate polyfill');
}
```

