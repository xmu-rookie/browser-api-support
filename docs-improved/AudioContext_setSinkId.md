# AudioContext.setSinkId API 兼容性数据

## 基本信息

- **API名称**: `AudioContext.setSinkId`
- **MDN文档**: [AudioContext.setSinkId](https://developer.mozilla.org/docs/Web/API/AudioContext/setSinkId)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-audiocontext-setsinkid)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// AudioContext.setSinkId 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioContext.setSinkId API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 110 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 110

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查AudioContext.setSinkId是否支持
function isAudioContextSetSinkIdSupported() {
    return 'setSinkId' in audiocontext && typeof audiocontext.setSinkId === 'function';
}

if (isAudioContextSetSinkIdSupported()) {
    console.log('AudioContext.setSinkId 支持');
    // 使用AudioContext.setSinkId
} else {
    console.log('AudioContext.setSinkId 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioContext.setSinkId polyfill
if (!audiocontext.setSinkId) {
    // 在这里添加polyfill实现
    console.log('加载AudioContext.setSinkId polyfill');
}
```

