# WebTransportError API 兼容性数据

## 基本信息

- **API名称**: `WebTransportError`
- **MDN文档**: [WebTransportError](https://developer.mozilla.org/docs/Web/API/WebTransportError)
- **规范文档**: [查看规范](https://w3c.github.io/webtransport/#webtransporterror)
- **标签**: `web-features:webtransport`

## 使用示例

### 基本用法

```javascript
// WebTransportError 使用示例
// 请查阅MDN文档了解具体用法
console.log('WebTransportError API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 97 |  |
| Chrome Android | 同主版本 |  |
| deno | 2.2 |  |
| Edge | 同主版本 |  |
| Firefox | 114 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
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

### deno

- **支持版本**: 2.2

### Firefox

- **支持版本**: 114

### Safari

- **支持版本**: 18.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查WebTransportError是否支持
function isWebTransportErrorSupported() {
    return 'WebTransportError' in window || typeof WebTransportError !== 'undefined';
}

if (isWebTransportErrorSupported()) {
    console.log('WebTransportError 支持');
    // 使用WebTransportError
} else {
    console.log('WebTransportError 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WebTransportError polyfill
if (!window.WebTransportError) {
    // 在这里添加polyfill实现
    console.log('加载WebTransportError polyfill');
}
```

