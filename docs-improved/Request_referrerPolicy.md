# Request.referrerPolicy API 兼容性数据

## 基本信息

- **API名称**: `Request.referrerPolicy`
- **MDN文档**: [Request.referrerPolicy](https://developer.mozilla.org/docs/Web/API/Request/referrerPolicy)
- **规范文档**: [查看规范](https://fetch.spec.whatwg.org/#ref-for-dom-request-referrerpolicy②)
- **标签**: `web-features:fetch`

## 使用示例

### 基本用法

```javascript
// Request.referrerPolicy 使用示例
// 请查阅MDN文档了解具体用法
console.log('Request.referrerPolicy API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 52 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 14 |  |
| Firefox | 47 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 18.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 7.2 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 52

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 47

### Node.js

- **支持版本**: 18.0.0

### Safari

- **支持版本**: 10.1

### Samsung Internet

- **支持版本**: 7.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查Request.referrerPolicy是否支持
function isRequestReferrerPolicySupported() {
    return 'referrerPolicy' in request && typeof request.referrerPolicy === 'function';
}

if (isRequestReferrerPolicySupported()) {
    console.log('Request.referrerPolicy 支持');
    // 使用Request.referrerPolicy
} else {
    console.log('Request.referrerPolicy 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Request.referrerPolicy polyfill
if (!request.referrerPolicy) {
    // 在这里添加polyfill实现
    console.log('加载Request.referrerPolicy polyfill');
}
```

