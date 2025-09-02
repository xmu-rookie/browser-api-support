# AudioParam.value API 兼容性数据

## 基本信息

- **API名称**: `AudioParam.value`
- **MDN文档**: [AudioParam.value](https://developer.mozilla.org/docs/Web/API/AudioParam/value)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-audioparam-value)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// AudioParam.value 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioParam.value API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 14 | Before version 66, the gain value of a `GainNode` would perform a smooth interpolation to prevent de... |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 25 | Before Firefox 134, setting `value` was ignored when done at the same time as scheduled automation e... |
| Firefox Android | 25 | Firefox for Android does not currently take into account scheduled or gradiated changes to the param... |
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
- **注意事项**:
  - Before version 66, the gain value of a `GainNode` would perform a smooth interpolation to prevent dezippering (instead of changing instantly).

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 25
- **注意事项**:
  - Before Firefox 134, setting `value` was ignored when done at the same time as scheduled automation events.
  - Before Firefox 69, `value` did not take into account scheduled or gradiated changes to the parameter's value; instead, only explicitly set values were returned.

### Firefox Android

- **支持版本**: 25
- **注意事项**:
  - Firefox for Android does not currently take into account scheduled or gradiated changes to the parameter's value; only the initial value or the most recent explicitly set value is returned.

### Safari

- **支持版本**: 6

