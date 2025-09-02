# AudioWorkletNode.AudioWorkletNode API 兼容性数据

## 基本信息

- **API名称**: `AudioWorkletNode.AudioWorkletNode`
- **MDN文档**: [AudioWorkletNode.AudioWorkletNode](https://developer.mozilla.org/docs/Web/API/AudioWorkletNode/AudioWorkletNode)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-audioworkletnode-audioworkletnode)
- **标签**: `web-features:audio-worklet`
- **描述**: `AudioWorkletNode()` constructor

## 使用示例

### 基本用法

```javascript
// AudioWorkletNode.AudioWorkletNode 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioWorkletNode.AudioWorkletNode API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 66 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 76 |  |
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

- **支持版本**: 66

### Firefox

- **支持版本**: 76

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查AudioWorkletNode.AudioWorkletNode是否支持
function isAudioWorkletNodeAudioWorkletNodeSupported() {
    return 'AudioWorkletNode' in audioworkletnode && typeof audioworkletnode.AudioWorkletNode === 'function';
}

if (isAudioWorkletNodeAudioWorkletNodeSupported()) {
    console.log('AudioWorkletNode.AudioWorkletNode 支持');
    // 使用AudioWorkletNode.AudioWorkletNode
} else {
    console.log('AudioWorkletNode.AudioWorkletNode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioWorkletNode.AudioWorkletNode polyfill
if (!audioworkletnode.AudioWorkletNode) {
    // 在这里添加polyfill实现
    console.log('加载AudioWorkletNode.AudioWorkletNode polyfill');
}
```

