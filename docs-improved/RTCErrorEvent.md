# RTCErrorEvent API 兼容性数据

## 基本信息

- **API名称**: `RTCErrorEvent`
- **MDN文档**: [RTCErrorEvent](https://developer.mozilla.org/docs/Web/API/RTCErrorEvent)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcerrorevent)
- **标签**: `web-features:webrtc`

## 使用示例

### 基本用法

```javascript
// RTCErrorEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCErrorEvent API');
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
// 检查RTCErrorEvent是否支持
function isRTCErrorEventSupported() {
    return 'RTCErrorEvent' in window || typeof RTCErrorEvent !== 'undefined';
}

if (isRTCErrorEventSupported()) {
    console.log('RTCErrorEvent 支持');
    // 使用RTCErrorEvent
} else {
    console.log('RTCErrorEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCErrorEvent polyfill
if (!window.RTCErrorEvent) {
    // 在这里添加polyfill实现
    console.log('加载RTCErrorEvent polyfill');
}
```

