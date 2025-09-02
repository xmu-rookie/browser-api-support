# Request.integrity API 兼容性数据

## 基本信息

- **API名称**: `Request.integrity`
- **MDN文档**: [Request.integrity](https://developer.mozilla.org/docs/Web/API/Request/integrity)
- **规范文档**: [查看规范](https://fetch.spec.whatwg.org/#ref-for-dom-request-integrity②)
- **标签**: `web-features:fetch`

## 使用示例

### 基本用法

```javascript
// Request.integrity 使用示例
// 请查阅MDN文档了解具体用法
console.log('Request.integrity API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 46 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 14 |  |
| Firefox | 51 |  |
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

- **支持版本**: 不支持

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 51

### Node.js

- **支持版本**: 18.0.0

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Request.integrity是否支持
function isRequestIntegritySupported() {
    return 'integrity' in request && typeof request.integrity === 'function';
}

if (isRequestIntegritySupported()) {
    console.log('Request.integrity 支持');
    // 使用Request.integrity
} else {
    console.log('Request.integrity 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Request.integrity polyfill
if (!request.integrity) {
    // 在这里添加polyfill实现
    console.log('加载Request.integrity polyfill');
}
```

