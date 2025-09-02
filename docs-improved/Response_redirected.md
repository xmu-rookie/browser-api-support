# Response.redirected API 兼容性数据

## 基本信息

- **API名称**: `Response.redirected`
- **MDN文档**: [Response.redirected](https://developer.mozilla.org/docs/Web/API/Response/redirected)
- **规范文档**: [查看规范](https://fetch.spec.whatwg.org/#ref-for-dom-response-redirected①)
- **标签**: `web-features:fetch`

## 使用示例

### 基本用法

```javascript
// Response.redirected 使用示例
// 请查阅MDN文档了解具体用法
console.log('Response.redirected API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 57 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 16 |  |
| Firefox | 49 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 18.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 8.0 |  |
| WebView Android | 60 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 57

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 16

### Firefox

- **支持版本**: 49

### Node.js

- **支持版本**: 18.0.0

### Safari

- **支持版本**: 10.1

### Samsung Internet

- **支持版本**: 8.0

### WebView Android

- **支持版本**: 60

## 兼容性检查代码

### 特性检测

```javascript
// 检查Response.redirected是否支持
function isResponseRedirectedSupported() {
    return 'redirected' in response && typeof response.redirected === 'function';
}

if (isResponseRedirectedSupported()) {
    console.log('Response.redirected 支持');
    // 使用Response.redirected
} else {
    console.log('Response.redirected 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Response.redirected polyfill
if (!response.redirected) {
    // 在这里添加polyfill实现
    console.log('加载Response.redirected polyfill');
}
```

