# AudioParam.maxValue API 兼容性数据

## 基本信息

- **API名称**: `AudioParam.maxValue`
- **MDN文档**: [AudioParam.maxValue](https://developer.mozilla.org/docs/Web/API/AudioParam/maxValue)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-audioparam-maxvalue)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// AudioParam.maxValue 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioParam.maxValue API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 52 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 53 |  |
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

- **支持版本**: 52

### Firefox

- **支持版本**: 53

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查AudioParam.maxValue是否支持
function isAudioParamMaxValueSupported() {
    return 'maxValue' in audioparam && typeof audioparam.maxValue === 'function';
}

if (isAudioParamMaxValueSupported()) {
    console.log('AudioParam.maxValue 支持');
    // 使用AudioParam.maxValue
} else {
    console.log('AudioParam.maxValue 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioParam.maxValue polyfill
if (!audioparam.maxValue) {
    // 在这里添加polyfill实现
    console.log('加载AudioParam.maxValue polyfill');
}
```

