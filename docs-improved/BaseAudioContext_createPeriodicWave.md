# BaseAudioContext.createPeriodicWave API 兼容性数据

## 基本信息

- **API名称**: `BaseAudioContext.createPeriodicWave`
- **MDN文档**: [BaseAudioContext.createPeriodicWave](https://developer.mozilla.org/docs/Web/API/BaseAudioContext/createPeriodicWave)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-createperiodicwave)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// BaseAudioContext.createPeriodicWave 使用示例
// 请查阅MDN文档了解具体用法
console.log('BaseAudioContext.createPeriodicWave API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 30 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 25 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 30

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 25

### Safari

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查BaseAudioContext.createPeriodicWave是否支持
function isBaseAudioContextCreatePeriodicWaveSupported() {
    return 'createPeriodicWave' in baseaudiocontext && typeof baseaudiocontext.createPeriodicWave === 'function';
}

if (isBaseAudioContextCreatePeriodicWaveSupported()) {
    console.log('BaseAudioContext.createPeriodicWave 支持');
    // 使用BaseAudioContext.createPeriodicWave
} else {
    console.log('BaseAudioContext.createPeriodicWave 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BaseAudioContext.createPeriodicWave polyfill
if (!baseaudiocontext.createPeriodicWave) {
    // 在这里添加polyfill实现
    console.log('加载BaseAudioContext.createPeriodicWave polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **constraints_disableNormalization_parameter**: `constraints.disableNormalization` parameter

