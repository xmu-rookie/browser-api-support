# AudioNode.disconnect API 兼容性数据

## 基本信息

- **API名称**: `AudioNode.disconnect`
- **MDN文档**: [AudioNode.disconnect](https://developer.mozilla.org/docs/Web/API/AudioNode/disconnect)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#dom-audionode-disconnect)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// AudioNode.disconnect 使用示例
// 请查阅MDN文档了解具体用法
console.log('AudioNode.disconnect API');
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
| WebView Android | 4.4.3 |  |
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

### WebView Android

- **支持版本**: 4.4.3

## 兼容性检查代码

### 特性检测

```javascript
// 检查AudioNode.disconnect是否支持
function isAudioNodeDisconnectSupported() {
    return 'disconnect' in audionode && typeof audionode.disconnect === 'function';
}

if (isAudioNodeDisconnectSupported()) {
    console.log('AudioNode.disconnect 支持');
    // 使用AudioNode.disconnect
} else {
    console.log('AudioNode.disconnect 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// AudioNode.disconnect polyfill
if (!audionode.disconnect) {
    // 在这里添加polyfill实现
    console.log('加载AudioNode.disconnect polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **destination_parameter**: `destination` parameter
- **input_parameter**: `input` parameter

