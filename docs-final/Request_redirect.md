# Request.redirect API 兼容性数据

## 基本信息

- **API名称**: `Request.redirect`
- **MDN文档**: [Request.redirect](https://developer.mozilla.org/docs/Web/API/Request/redirect)
- **规范文档**: [查看规范](https://fetch.spec.whatwg.org/#ref-for-dom-request-redirect②)
- **标签**: `web-features:fetch`

## 使用示例

### 基本用法

```javascript
// Request.redirect 使用示例
// 请查阅MDN文档了解具体用法
console.log('Request.redirect API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 46 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 | Fetching with a `"manual"` redirect mode does not result in a `"opaqueredirect"` response, but a reg... |
| Edge | 14 |  |
| Firefox | 43 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 18.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 46

### Deno

- **支持版本**: 1.0
- **注意事项**:
  - Fetching with a `"manual"` redirect mode does not result in a `"opaqueredirect"` response, but a regular response.

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 43

### Node.js

- **支持版本**: 18.0.0

### Safari

- **支持版本**: 10.1

