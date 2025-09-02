# AudioBuffer.AudioBuffer API 兼容性数据

## 基本信息

- **API名称**: `AudioBuffer.AudioBuffer`
- **MDN文档**: [AudioBuffer.AudioBuffer](https://developer.mozilla.org/docs/Web/API/AudioBuffer/AudioBuffer)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-audiobuffer-audiobuffer)
- **标签**: `web-features:web-audio`
- **描述**: `AudioBuffer()` constructor

## 使用示例

### 基本用法

```javascript
// AudioBuffer.AudioBuffer 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioBuffer.AudioBuffer API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 55 | The `context` parameter was supported up until version 57, but has now been removed. |
| Chrome Android | 同主版本 |  |
| Edge | 79 |  |
| Firefox | 53 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 42 | The `context` parameter was supported up until version 44, but has now been removed. |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 6.0 | The `context` parameter was supported up until Samsung Internet 7.0, but has now been removed. |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 55
- **注意事项**:
  - The `context` parameter was supported up until version 57, but has now been removed.

### Edge

- **支持版本**: 79

### Firefox

- **支持版本**: 53

### Opera Android

- **支持版本**: 42
- **注意事项**:
  - The `context` parameter was supported up until version 44, but has now been removed.

### Safari

- **支持版本**: 14.1

### Samsung Internet

- **支持版本**: 6.0
- **注意事项**:
  - The `context` parameter was supported up until Samsung Internet 7.0, but has now been removed.

## 兼容性检查代码

### 特性检测

```javascript
// 检查AudioBuffer.AudioBuffer是否支持
function isAudioBufferAudioBufferSupported() {
    return 'AudioBuffer' in audiobuffer && typeof audiobuffer.AudioBuffer === 'function';
}

if (isAudioBufferAudioBufferSupported()) {
    console.log('AudioBuffer.AudioBuffer 支持');
    // 使用AudioBuffer.AudioBuffer
} else {
    console.log('AudioBuffer.AudioBuffer 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioBuffer.AudioBuffer polyfill
if (!audiobuffer.AudioBuffer) {
    // 在这里添加polyfill实现
    console.log('加载AudioBuffer.AudioBuffer polyfill');
}
```

