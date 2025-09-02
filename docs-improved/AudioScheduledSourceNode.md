# AudioScheduledSourceNode API 兼容性数据

## 基本信息

- **API名称**: `AudioScheduledSourceNode`
- **MDN文档**: [AudioScheduledSourceNode](https://developer.mozilla.org/docs/Web/API/AudioScheduledSourceNode)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#AudioScheduledSourceNode)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// AudioScheduledSourceNode 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioScheduledSourceNode API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 57 |  |
| Chrome Android | 同主版本 |  |
| Edge | 79 |  |
| Firefox | 53 |  |
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

- **支持版本**: 57
- **支持版本**: 14
- **移除版本**: 57
- **部分实现**: 是
- **注意事项**:
  - The `AudioScheduledSourceNode` interface itself is not present, but some of its members are available on the [`AudioBufferSourceNode`](https://developer.mozilla.org/docs/Web/API/AudioBufferSourceNode), [`ConstantSourceNode`](https://developer.mozilla.org/docs/Web/API/ConstantSourceNode) and [`OscillatorNode`](https://developer.mozilla.org/docs/Web/API/OscillatorNode) interfaces.

### Edge

- **支持版本**: 79
- **支持版本**: 12
- **移除版本**: 79
- **部分实现**: 是
- **注意事项**:
  - The `AudioScheduledSourceNode` interface itself is not present, but some of its members are available on the [`AudioBufferSourceNode`](https://developer.mozilla.org/docs/Web/API/AudioBufferSourceNode), [`ConstantSourceNode`](https://developer.mozilla.org/docs/Web/API/ConstantSourceNode) and [`OscillatorNode`](https://developer.mozilla.org/docs/Web/API/OscillatorNode) interfaces.

### Firefox

- **支持版本**: 53
- **支持版本**: 25
- **移除版本**: 53
- **部分实现**: 是
- **注意事项**:
  - The `AudioScheduledSourceNode` interface itself is not present, but some of its members are available on the [`AudioBufferSourceNode`](https://developer.mozilla.org/docs/Web/API/AudioBufferSourceNode), [`ConstantSourceNode`](https://developer.mozilla.org/docs/Web/API/ConstantSourceNode) and [`OscillatorNode`](https://developer.mozilla.org/docs/Web/API/OscillatorNode) interfaces.

### Safari

- **支持版本**: 14
- **支持版本**: 6
- **移除版本**: 14
- **部分实现**: 是
- **注意事项**:
  - The `AudioScheduledSourceNode` interface itself is not present, but some of its members are available on the [`AudioBufferSourceNode`](https://developer.mozilla.org/docs/Web/API/AudioBufferSourceNode), [`ConstantSourceNode`](https://developer.mozilla.org/docs/Web/API/ConstantSourceNode) and [`OscillatorNode`](https://developer.mozilla.org/docs/Web/API/OscillatorNode) interfaces.

## 兼容性检查代码

### 特性检测

```javascript
// 检查AudioScheduledSourceNode是否支持
function isAudioScheduledSourceNodeSupported() {
    return 'AudioScheduledSourceNode' in window || typeof AudioScheduledSourceNode !== 'undefined';
}

if (isAudioScheduledSourceNodeSupported()) {
    console.log('AudioScheduledSourceNode 支持');
    // 使用AudioScheduledSourceNode
} else {
    console.log('AudioScheduledSourceNode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioScheduledSourceNode polyfill
if (!window.AudioScheduledSourceNode) {
    // 在这里添加polyfill实现
    console.log('加载AudioScheduledSourceNode polyfill');
}
```

