# RTCSctpTransport.state API 兼容性数据

## 基本信息

- **API名称**: `RTCSctpTransport.state`
- **MDN文档**: [RTCSctpTransport.state](https://developer.mozilla.org/docs/Web/API/RTCSctpTransport/state)
- **规范文档**: [查看规范](https://w3c.github.io/webrtc-pc/#dom-rtcsctptransport-state)
- **标签**: `web-features:webrtc-sctp`

## 使用示例

### 基本用法

```javascript
// RTCSctpTransport.state 使用示例
// 请查阅MDN文档了解具体用法
console.log('RTCSctpTransport.state API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 76 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 113 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 76

### Firefox

- **支持版本**: 113

### Safari

- **支持版本**: 15.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查RTCSctpTransport.state是否支持
function isRTCSctpTransportStateSupported() {
    return 'state' in rtcsctptransport && typeof rtcsctptransport.state === 'function';
}

if (isRTCSctpTransportStateSupported()) {
    console.log('RTCSctpTransport.state 支持');
    // 使用RTCSctpTransport.state
} else {
    console.log('RTCSctpTransport.state 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// RTCSctpTransport.state polyfill
if (!rtcsctptransport.state) {
    // 在这里添加polyfill实现
    console.log('加载RTCSctpTransport.state polyfill');
}
```

