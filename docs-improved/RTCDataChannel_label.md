# RTCDataChannel.label API 兼容性数据

## 基本信息

- **API名称**: `RTCDataChannel.label`
- **MDN文档**: [RTCDataChannel.label](https://developer.mozilla.org/docs/Web/API/RTCDataChannel/label)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-datachannel-label)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCDataChannel.label 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCDataChannel.label API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 24 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 22 |  |
| Firefox Android | 24 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 24

### Firefox

- **支持版本**: 22

### Firefox Android

- **支持版本**: 24

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCDataChannel.label是否支持
function isRTCDataChannelLabelSupported() {
    return 'label' in rtcdatachannel && typeof rtcdatachannel.label === 'function';
}

if (isRTCDataChannelLabelSupported()) {
    console.log('RTCDataChannel.label 支持');
    // 使用RTCDataChannel.label
} else {
    console.log('RTCDataChannel.label 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCDataChannel.label polyfill
if (!rtcdatachannel.label) {
    // 在这里添加polyfill实现
    console.log('加载RTCDataChannel.label polyfill');
}
```

