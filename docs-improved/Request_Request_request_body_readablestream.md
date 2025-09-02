# Request.Request.request_body_readablestream API 兼容性数据

## 基本信息

- **API名称**: `Request.Request.request_body_readablestream`
- **标签**: `web-features:fetch`
- **描述**: Send `ReadableStream` in request body

## 使用示例

### 基本用法

```javascript
// Request.Request.request_body_readablestream 使用示例
// 请查阅MDN文档了解具体用法
console.log('Request.Request.request_body_readablestream API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 105 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.7 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 18.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 105

### Deno

- **支持版本**: 1.7

### Firefox

- **支持版本**: 不支持

### Node.js

- **支持版本**: 18.0.0

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Request.Request.request_body_readablestream是否支持
function isRequestRequestSupported() {
    return 'Request' in request && typeof request.Request === 'function';
}

if (isRequestRequestSupported()) {
    console.log('Request.Request.request_body_readablestream 支持');
    // 使用Request.Request.request_body_readablestream
} else {
    console.log('Request.Request.request_body_readablestream 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Request.Request.request_body_readablestream polyfill
if (!request.Request) {
    // 在这里添加polyfill实现
    console.log('加载Request.Request.request_body_readablestream polyfill');
}
```

