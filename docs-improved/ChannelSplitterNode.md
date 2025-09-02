# ChannelSplitterNode API 兼容性数据

## 基本信息

- **API名称**: `ChannelSplitterNode`
- **MDN文档**: [ChannelSplitterNode](https://developer.mozilla.org/docs/Web/API/ChannelSplitterNode)
- **规范文档**: [查看规范](https://webaudio.github.io/web-audio-api/#ChannelSplitterNode)
- **标签**: `web-features:web-audio`

## 使用示例

### 基本用法

```javascript
// ChannelSplitterNode 使用示例
// 请查阅MDN文档了解具体用法
console.log('ChannelSplitterNode API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 14 | Starting in Chrome 56, `channelCountMode` is set to `explicit` and `channelCount` is fixed to the nu... |
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
| WebView Android | 4.4.3 | Starting in version 56, `channelCountMode` is set to `explicit` and `channelCount` is fixed to the n... |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 14
- **注意事项**:
  - Starting in Chrome 56, `channelCountMode` is set to `explicit` and `channelCount` is fixed to the number of outputs, as per the latest spec.

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 25

### Safari

- **支持版本**: 6

### WebView Android

- **支持版本**: 4.4.3
- **注意事项**:
  - Starting in version 56, `channelCountMode` is set to `explicit` and `channelCount` is fixed to the number of outputs, as per the latest spec.

## 兼容性检查代码

### 特性检测

```javascript
// 检查ChannelSplitterNode是否支持
function isChannelSplitterNodeSupported() {
    return 'ChannelSplitterNode' in window || typeof ChannelSplitterNode !== 'undefined';
}

if (isChannelSplitterNodeSupported()) {
    console.log('ChannelSplitterNode 支持');
    // 使用ChannelSplitterNode
} else {
    console.log('ChannelSplitterNode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// ChannelSplitterNode polyfill
if (!window.ChannelSplitterNode) {
    // 在这里添加polyfill实现
    console.log('加载ChannelSplitterNode polyfill');
}
```

