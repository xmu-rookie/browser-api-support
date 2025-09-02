# Request.Request API 兼容性数据

## 基本信息

- **API名称**: `Request.Request`
- **MDN文档**: [Request.Request](https://developer.mozilla.org/docs/Web/API/Request/Request)
- **规范文档**: [查看规范](https://fetch.spec.whatwg.org/#ref-for-dom-request①)
- **标签**: `web-features:fetch`
- **描述**: `Request()` constructor

## 使用示例

### 基本用法

```javascript
// Request.Request 使用示例
// 请查阅MDN文档了解具体用法
console.log('Request.Request API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 40 | From Chrome 47, default values for the `init` argument's properties changed. `mode` defaults to `sam... |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 | Fetching with a `"manual"` redirect mode does not result in a `"opaqueredirect"` response, but a reg... |
| Edge | 14 |  |
| Firefox | 39 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 18.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 27 |  |
| Opera Android | 27 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 40
- **注意事项**:
  - From Chrome 47, default values for the `init` argument's properties changed. `mode` defaults to `same-origin` (from `no-cors`). `credentials` defaults to `include` (from `same-origin`). `redirect` defaults to `follow` (from `manual`).

### Deno

- **支持版本**: 1.0
- **注意事项**:
  - Fetching with a `"manual"` redirect mode does not result in a `"opaqueredirect"` response, but a regular response.

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 39

### Node.js

- **支持版本**: 18.0.0

### Opera

- **支持版本**: 27

### Opera Android

- **支持版本**: 27

### Safari

- **支持版本**: 10.1

## 相关子API

该API包含以下子功能：

- **cross_origin_stripped**: cross-origin `referrer` stripped out and `navigate` mode converted to `same-origin` when constructor created from existing `Request` object.
- **init_attributionReporting_parameter**: `init.attributionReporting` parameter
- **init_browsingTopics_parameter**: `init.browsingTopics` parameter
- **init_duplex_parameter**: `init.duplex` parameter
- **init_keepalive_parameter**: `init.keepalive` parameter
- **init_priority_parameter**: `init.priority` parameter
- **init_referrer_parameter**: `init.referrer` parameter
- **request_body_readablestream**: Send `ReadableStream` in request body
- **response_body_readablestream**: Consume `ReadableStream` as a response body

