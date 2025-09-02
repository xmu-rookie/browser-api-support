# AudioParam.setValueCurveAtTime API 兼容性数据

## 基本信息

- **API名称**: `AudioParam.setValueCurveAtTime`
- **MDN文档**: [AudioParam.setValueCurveAtTime](https://developer.mozilla.org/docs/Web/API/AudioParam/setValueCurveAtTime)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-audioparam-setvaluecurveattime)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// AudioParam.setValueCurveAtTime 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioParam.setValueCurveAtTime API');
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
| WebView Android | 同主版本 |  |
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

## 兼容性检查代码

### 特性检测

```javascript
// 检查AudioParam.setValueCurveAtTime是否支持
function isAudioParamSetValueCurveAtTimeSupported() {
    return 'setValueCurveAtTime' in audioparam && typeof audioparam.setValueCurveAtTime === 'function';
}

if (isAudioParamSetValueCurveAtTimeSupported()) {
    console.log('AudioParam.setValueCurveAtTime 支持');
    // 使用AudioParam.setValueCurveAtTime
} else {
    console.log('AudioParam.setValueCurveAtTime 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioParam.setValueCurveAtTime polyfill
if (!audioparam.setValueCurveAtTime) {
    // 在这里添加polyfill实现
    console.log('加载AudioParam.setValueCurveAtTime polyfill');
}
```

