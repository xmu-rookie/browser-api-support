# BaseAudioContext.createStereoPanner API 兼容性数据

## 基本信息

- **API名称**: `BaseAudioContext.createStereoPanner`
- **MDN文档**: [BaseAudioContext.createStereoPanner](https://developer.mozilla.org/docs/Web/API/BaseAudioContext/createStereoPanner)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-createstereopanner)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// BaseAudioContext.createStereoPanner 使用示例
// 请查阅MDN文档了解具体用法
console.log('BaseAudioContext.createStereoPanner API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 41 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 37 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 41

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 37

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查BaseAudioContext.createStereoPanner是否支持
function isBaseAudioContextCreateStereoPannerSupported() {
    return 'createStereoPanner' in baseaudiocontext && typeof baseaudiocontext.createStereoPanner === 'function';
}

if (isBaseAudioContextCreateStereoPannerSupported()) {
    console.log('BaseAudioContext.createStereoPanner 支持');
    // 使用BaseAudioContext.createStereoPanner
} else {
    console.log('BaseAudioContext.createStereoPanner 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BaseAudioContext.createStereoPanner polyfill
if (!baseaudiocontext.createStereoPanner) {
    // 在这里添加polyfill实现
    console.log('加载BaseAudioContext.createStereoPanner polyfill');
}
```

