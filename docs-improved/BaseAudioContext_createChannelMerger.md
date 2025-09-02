# BaseAudioContext.createChannelMerger API 兼容性数据

## 基本信息

- **API名称**: `BaseAudioContext.createChannelMerger`
- **MDN文档**: [BaseAudioContext.createChannelMerger](https://developer.mozilla.org/docs/Web/API/BaseAudioContext/createChannelMerger)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-createchannelmerger)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// BaseAudioContext.createChannelMerger 使用示例
// 请查阅MDN文档了解具体用法
console.log('BaseAudioContext.createChannelMerger API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 14 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 25 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 4.4.3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 14

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 25

### Safari

- **支持版本**: 6

### WebView Android

- **支持版本**: 4.4.3

## 兼容性检查代码

### 特性检测

```javascript
// 检查BaseAudioContext.createChannelMerger是否支持
function isBaseAudioContextCreateChannelMergerSupported() {
    return 'createChannelMerger' in baseaudiocontext && typeof baseaudiocontext.createChannelMerger === 'function';
}

if (isBaseAudioContextCreateChannelMergerSupported()) {
    console.log('BaseAudioContext.createChannelMerger 支持');
    // 使用BaseAudioContext.createChannelMerger
} else {
    console.log('BaseAudioContext.createChannelMerger 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BaseAudioContext.createChannelMerger polyfill
if (!baseaudiocontext.createChannelMerger) {
    // 在这里添加polyfill实现
    console.log('加载BaseAudioContext.createChannelMerger polyfill');
}
```

