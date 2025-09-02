# Request.body API 兼容性数据

## 基本信息

- **API名称**: `Request.body`
- **MDN文档**: [Request.body](https://developer.mozilla.org/docs/Web/API/Request/body)
- **规范文档**: [查看规范](https://fetch.spec.whatwg.org/#ref-for-dom-body-body①)
- **标签**: `web-features:fetch-request-streams`

## 使用示例

### 基本用法

```javascript
// Request.body 使用示例
// 请查阅MDN文档了解具体用法
console.log('Request.body API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 105 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 18.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 105

### Deno

- **支持版本**: 1.0

### Firefox

- **支持版本**: 不支持

### Node.js

- **支持版本**: 18.0.0

### Safari

- **支持版本**: 11.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Request.body是否支持
function isRequestBodySupported() {
    return 'body' in request && typeof request.body === 'function';
}

if (isRequestBodySupported()) {
    console.log('Request.body 支持');
    // 使用Request.body
} else {
    console.log('Request.body 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Request.body polyfill
if (!request.body) {
    // 在这里添加polyfill实现
    console.log('加载Request.body polyfill');
}
```

