# WebTransport.WebTransport.options_congestionControl_parameter API 兼容性数据

## 基本信息

- **API名称**: `WebTransport.WebTransport.options_congestionControl_parameter`
- **规范文档**: [查看规范](https://w3c.github.io/webtransport/#dom-webtransportoptions-congestioncontrol)
- **标签**: `web-features:webtransport`
- **描述**: `options.congestionControl` parameter

## 使用示例

### 基本用法

```javascript
// WebTransport.WebTransport.options_congestionControl_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('WebTransport.WebTransport.options_congestionControl_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Deno | 2.2 |  |
| Edge | 同主版本 |  |
| Firefox | 114 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Deno

- **支持版本**: 2.2

### Firefox

- **支持版本**: 114

### Safari

- **支持版本**: 18.4
- **需要标志**: 
  - WebTransport: true

## 兼容性检查代码

### 特性检测

```javascript
// 检查WebTransport.WebTransport.options_congestionControl_parameter是否支持
function isWebTransportWebTransportSupported() {
    return 'WebTransport' in webtransport && typeof webtransport.WebTransport === 'function';
}

if (isWebTransportWebTransportSupported()) {
    console.log('WebTransport.WebTransport.options_congestionControl_parameter 支持');
    // 使用WebTransport.WebTransport.options_congestionControl_parameter
} else {
    console.log('WebTransport.WebTransport.options_congestionControl_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WebTransport.WebTransport.options_congestionControl_parameter polyfill
if (!webtransport.WebTransport) {
    // 在这里添加polyfill实现
    console.log('加载WebTransport.WebTransport.options_congestionControl_parameter polyfill');
}
```

