# RTCError.sdpLineNumber API 兼容性数据

## 基本信息

- **API名称**: `RTCError.sdpLineNumber`
- **MDN文档**: [RTCError.sdpLineNumber](https://developer.mozilla.org/docs/Web/API/RTCError/sdpLineNumber)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcerror-sdplinenumber)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCError.sdpLineNumber 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCError.sdpLineNumber API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 74 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 60 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 74

### Firefox

- **支持版本**: 不支持

### Opera

- **支持版本**: 60

### Safari

- **支持版本**: 15.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCError.sdpLineNumber是否支持
function isRTCErrorSdpLineNumberSupported() {
    return 'sdpLineNumber' in rtcerror && typeof rtcerror.sdpLineNumber === 'function';
}

if (isRTCErrorSdpLineNumberSupported()) {
    console.log('RTCError.sdpLineNumber 支持');
    // 使用RTCError.sdpLineNumber
} else {
    console.log('RTCError.sdpLineNumber 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCError.sdpLineNumber polyfill
if (!rtcerror.sdpLineNumber) {
    // 在这里添加polyfill实现
    console.log('加载RTCError.sdpLineNumber polyfill');
}
```

