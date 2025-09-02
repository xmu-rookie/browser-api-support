# AudioBufferSourceNode.detune API 兼容性数据

## 基本信息

- **API名称**: `AudioBufferSourceNode.detune`
- **MDN文档**: [AudioBufferSourceNode.detune](https://developer.mozilla.org/docs/Web/API/AudioBufferSourceNode/detune)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-audiobuffersourcenode-detune)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// AudioBufferSourceNode.detune 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioBufferSourceNode.detune API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 44 |  |
| Chrome Android | 同主版本 |  |
| Edge | 13 |  |
| Firefox | 40 |  |
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

- **支持版本**: 44

### Edge

- **支持版本**: 13

### Firefox

- **支持版本**: 40

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查AudioBufferSourceNode.detune是否支持
function isAudioBufferSourceNodeDetuneSupported() {
    return 'detune' in audiobuffersourcenode && typeof audiobuffersourcenode.detune === 'function';
}

if (isAudioBufferSourceNodeDetuneSupported()) {
    console.log('AudioBufferSourceNode.detune 支持');
    // 使用AudioBufferSourceNode.detune
} else {
    console.log('AudioBufferSourceNode.detune 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioBufferSourceNode.detune polyfill
if (!audiobuffersourcenode.detune) {
    // 在这里添加polyfill实现
    console.log('加载AudioBufferSourceNode.detune polyfill');
}
```

