# BaseAudioContext.createPeriodicWave.constraints_disableNormalization_parameter API 兼容性数据

## 基本信息

- **API名称**: `BaseAudioContext.createPeriodicWave.constraints_disableNormalization_parameter`
- **标签**: `web-features:web-audio`
- **描述**: `constraints.disableNormalization` parameter

## 使用示例

### 基本用法

```javascript
// BaseAudioContext.createPeriodicWave.constraints_disableNormalization_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('BaseAudioContext.createPeriodicWave.constraints_disableNormalization_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 46 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 49 |  |
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

- **支持版本**: 46

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 49

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查BaseAudioContext.createPeriodicWave.constraints_disableNormalization_parameter是否支持
function isBaseAudioContextCreatePeriodicWaveSupported() {
    return 'createPeriodicWave' in baseaudiocontext && typeof baseaudiocontext.createPeriodicWave === 'function';
}

if (isBaseAudioContextCreatePeriodicWaveSupported()) {
    console.log('BaseAudioContext.createPeriodicWave.constraints_disableNormalization_parameter 支持');
    // 使用BaseAudioContext.createPeriodicWave.constraints_disableNormalization_parameter
} else {
    console.log('BaseAudioContext.createPeriodicWave.constraints_disableNormalization_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BaseAudioContext.createPeriodicWave.constraints_disableNormalization_parameter polyfill
if (!baseaudiocontext.createPeriodicWave) {
    // 在这里添加polyfill实现
    console.log('加载BaseAudioContext.createPeriodicWave.constraints_disableNormalization_parameter polyfill');
}
```

