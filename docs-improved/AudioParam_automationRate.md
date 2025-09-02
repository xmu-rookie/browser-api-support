# AudioParam.automationRate API 兼容性数据

## 基本信息

- **API名称**: `AudioParam.automationRate`
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-audioparam-automationrate)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// AudioParam.automationRate 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioParam.automationRate API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 68 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 68

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 14

## 兼容性检查代码

### 特性检测

```javascript
// 检查AudioParam.automationRate是否支持
function isAudioParamAutomationRateSupported() {
    return 'automationRate' in audioparam && typeof audioparam.automationRate === 'function';
}

if (isAudioParamAutomationRateSupported()) {
    console.log('AudioParam.automationRate 支持');
    // 使用AudioParam.automationRate
} else {
    console.log('AudioParam.automationRate 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioParam.automationRate polyfill
if (!audioparam.automationRate) {
    // 在这里添加polyfill实现
    console.log('加载AudioParam.automationRate polyfill');
}
```

