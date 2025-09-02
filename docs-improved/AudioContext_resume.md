# AudioContext.resume API 兼容性数据

## 基本信息

- **API名称**: `AudioContext.resume`
- **MDN文档**: [AudioContext.resume](https://developer.mozilla.org/docs/Web/API/AudioContext/resume)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-audiocontext-resume)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// AudioContext.resume 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioContext.resume API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 41 |  |
| Chrome Android | 同主版本 |  |
| Edge | 14 |  |
| Firefox | 40 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 9 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 41

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 40

### Safari

- **支持版本**: 9

## 兼容性检查代码

### 特性检测

```javascript
// 检查AudioContext.resume是否支持
function isAudioContextResumeSupported() {
    return 'resume' in audiocontext && typeof audiocontext.resume === 'function';
}

if (isAudioContextResumeSupported()) {
    console.log('AudioContext.resume 支持');
    // 使用AudioContext.resume
} else {
    console.log('AudioContext.resume 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioContext.resume polyfill
if (!audiocontext.resume) {
    // 在这里添加polyfill实现
    console.log('加载AudioContext.resume polyfill');
}
```

