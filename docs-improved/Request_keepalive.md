# Request.keepalive API 兼容性数据

## 基本信息

- **API名称**: `Request.keepalive`
- **MDN文档**: [Request.keepalive](https://developer.mozilla.org/docs/Web/API/Request/keepalive)
- **规范文档**: [查看规范](https://fetch.spec.whatwg.org/#ref-for-dom-request-keepalive②)
- **标签**: `web-features:fetch`

## 使用示例

### 基本用法

```javascript
// Request.keepalive 使用示例
// 请查阅MDN文档了解具体用法
console.log('Request.keepalive API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 66 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 15 |  |
| Firefox | 133 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 18.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 66

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 15

### Firefox

- **支持版本**: 133

### Node.js

- **支持版本**: 18.0.0

### Safari

- **支持版本**: 13

## 兼容性检查代码

### 特性检测

```javascript
// 检查Request.keepalive是否支持
function isRequestKeepaliveSupported() {
    return 'keepalive' in request && typeof request.keepalive === 'function';
}

if (isRequestKeepaliveSupported()) {
    console.log('Request.keepalive 支持');
    // 使用Request.keepalive
} else {
    console.log('Request.keepalive 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Request.keepalive polyfill
if (!request.keepalive) {
    // 在这里添加polyfill实现
    console.log('加载Request.keepalive polyfill');
}
```

