# RTCPeerConnection.removeStream API 兼容性数据

## 基本信息

- **API名称**: `RTCPeerConnection.removeStream`
- **MDN文档**: [RTCPeerConnection.removeStream](https://developer.mozilla.org/docs/Web/API/RTCPeerConnection/removeStream)

## 使用示例

### 基本用法

```javascript
// RTCPeerConnection.removeStream 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCPeerConnection.removeStream API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 24 |  |
| Chrome Android | 同主版本 |  |
| Edge | 15 |  |
| Firefox | 22 |  |
| Firefox Android | 24 |  |
| Oculus | 同主版本 |  |
| Opera | 15 |  |
| Opera Android | 14 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 1.5 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 24

### Edge

- **支持版本**: 15

### Firefox

- **支持版本**: 22
- **移除版本**: 51

### Firefox Android

- **支持版本**: 24
- **移除版本**: 51

### Opera

- **支持版本**: 15

### Opera Android

- **支持版本**: 14

### Safari

- **支持版本**: 11
- **移除版本**: 12

### Samsung Internet

- **支持版本**: 1.5

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCPeerConnection.removeStream是否支持
function isRTCPeerConnectionRemoveStreamSupported() {
    return 'removeStream' in rtcpeerconnection && typeof rtcpeerconnection.removeStream === 'function';
}

if (isRTCPeerConnectionRemoveStreamSupported()) {
    console.log('RTCPeerConnection.removeStream 支持');
    // 使用RTCPeerConnection.removeStream
} else {
    console.log('RTCPeerConnection.removeStream 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCPeerConnection.removeStream polyfill
if (!rtcpeerconnection.removeStream) {
    // 在这里添加polyfill实现
    console.log('加载RTCPeerConnection.removeStream polyfill');
}
```

