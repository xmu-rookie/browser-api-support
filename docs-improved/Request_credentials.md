# Request.credentials API 兼容性数据

## 基本信息

- **API名称**: `Request.credentials`
- **MDN文档**: [Request.credentials](https://developer.mozilla.org/docs/Web/API/Request/credentials)
- **规范文档**: [查看规范](https://fetch.spec.whatwg.org/#ref-for-dom-request-credentials②)
- **标签**: `web-features:fetch`

## 使用示例

### 基本用法

```javascript
// Request.credentials 使用示例
// 请查阅MDN文档了解具体用法
console.log('Request.credentials API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 40 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 14 |  |
| Firefox | 39 |  |
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

- **支持版本**: 40

### Deno

- **支持版本**: 不支持

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 39

### Node.js

- **支持版本**: 18.0.0

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Request.credentials是否支持
function isRequestCredentialsSupported() {
    return 'credentials' in request && typeof request.credentials === 'function';
}

if (isRequestCredentialsSupported()) {
    console.log('Request.credentials 支持');
    // 使用Request.credentials
} else {
    console.log('Request.credentials 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Request.credentials polyfill
if (!request.credentials) {
    // 在这里添加polyfill实现
    console.log('加载Request.credentials polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **default_same-origin**: Default value `same-origin`

