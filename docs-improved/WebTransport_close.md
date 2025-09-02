# WebTransport.close API 兼容性数据

## 基本信息

- **API名称**: `WebTransport.close`
- **MDN文档**: [WebTransport.close](https://developer.mozilla.org/docs/Web/API/WebTransport/close)
- **规范文档**: [查看规范](https://w3c.github.io/webtransport/#dom-webtransport-close)
- **标签**: `web-features:webtransport`

## 使用示例

### 基本用法

```javascript
// WebTransport.close 使用示例
// 请查阅MDN文档了解具体用法
console.log('WebTransport.close API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 97 |  |
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

- **支持版本**: 97

### Deno

- **支持版本**: 2.2
- **需要标志**: 
  - --unstable-net: true

### Firefox

- **支持版本**: 114

### Safari

- **支持版本**: 18.4
- **需要标志**: 
  - WebTransport: true

## 兼容性检查代码

### 特性检测

```javascript
// 检查WebTransport.close是否支持
function isWebTransportCloseSupported() {
    return 'close' in webtransport && typeof webtransport.close === 'function';
}

if (isWebTransportCloseSupported()) {
    console.log('WebTransport.close 支持');
    // 使用WebTransport.close
} else {
    console.log('WebTransport.close 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WebTransport.close polyfill
if (!webtransport.close) {
    // 在这里添加polyfill实现
    console.log('加载WebTransport.close polyfill');
}
```

