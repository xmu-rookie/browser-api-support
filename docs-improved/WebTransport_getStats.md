# WebTransport.getStats API 兼容性数据

## 基本信息

- **API名称**: `WebTransport.getStats`
- **MDN文档**: [WebTransport.getStats](https://developer.mozilla.org/docs/Web/API/WebTransport/getStats)
- **规范文档**: [查看规范](https://w3c.github.io/webtransport/#dom-webtransport-getstats)
- **标签**: `web-features:webtransport`

## 使用示例

### 基本用法

```javascript
// WebTransport.getStats 使用示例
// 请查阅MDN文档了解具体用法
console.log('WebTransport.getStats API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Deno | 2.2 |  |
| Edge | 同主版本 |  |
| Firefox | 114 | Method is defined but throws a not-implemented error. |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18.4 | Method is defined but throws a NotSupportedRrror. |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Deno

- **支持版本**: 2.2
- **需要标志**: 
  - --unstable-net: true

### Firefox

- **支持版本**: 114
- **部分实现**: 是
- **注意事项**:
  - Method is defined but throws a not-implemented error.

### Safari

- **支持版本**: 18.4
- **需要标志**: 
  - WebTransport: true
- **部分实现**: 是
- **注意事项**:
  - Method is defined but throws a NotSupportedRrror.

## 兼容性检查代码

### 特性检测

```javascript
// 检查WebTransport.getStats是否支持
function isWebTransportGetStatsSupported() {
    return 'getStats' in webtransport && typeof webtransport.getStats === 'function';
}

if (isWebTransportGetStatsSupported()) {
    console.log('WebTransport.getStats 支持');
    // 使用WebTransport.getStats
} else {
    console.log('WebTransport.getStats 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WebTransport.getStats polyfill
if (!webtransport.getStats) {
    // 在这里添加polyfill实现
    console.log('加载WebTransport.getStats polyfill');
}
```

