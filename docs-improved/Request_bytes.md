# Request.bytes API 兼容性数据

## 基本信息

- **API名称**: `Request.bytes`
- **MDN文档**: [Request.bytes](https://developer.mozilla.org/docs/Web/API/Request/bytes)
- **规范文档**: [查看规范](https://fetch.spec.whatwg.org/#dom-body-bytes)
- **标签**: `web-features:fetch`

## 使用示例

### 基本用法

```javascript
// Request.bytes 使用示例
// 请查阅MDN文档了解具体用法
console.log('Request.bytes API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.1.9 |  |
| Chrome | 132 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.44 |  |
| Edge | 同主版本 |  |
| Firefox | 128 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 22.3.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.1.9

### Chrome

- **支持版本**: 132

### Deno

- **支持版本**: 1.44

### Firefox

- **支持版本**: 128

### Node.js

- **支持版本**: 22.3.0
- **支持版本**: 20.16.0
- **移除版本**: 21.0.0

### Safari

- **支持版本**: 18

## 兼容性检查代码

### 特性检测

```javascript
// 检查Request.bytes是否支持
function isRequestBytesSupported() {
    return 'bytes' in request && typeof request.bytes === 'function';
}

if (isRequestBytesSupported()) {
    console.log('Request.bytes 支持');
    // 使用Request.bytes
} else {
    console.log('Request.bytes 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Request.bytes polyfill
if (!request.bytes) {
    // 在这里添加polyfill实现
    console.log('加载Request.bytes polyfill');
}
```

