# Response.json_static API 兼容性数据

## 基本信息

- **API名称**: `Response.json_static`
- **MDN文档**: [Response.json_static](https://developer.mozilla.org/docs/Web/API/Response/json_static)
- **规范文档**: [查看规范](https://fetch.spec.whatwg.org/#ref-for-dom-response-json①)
- **标签**: `web-features:fetch`

## 使用示例

### 基本用法

```javascript
// Response.json_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('Response.json_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 105 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.22 |  |
| Edge | 同主版本 |  |
| Firefox | 115 |  |
| Firefox Android | 同主版本 |  |
| Node.js | 18.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17 |  |
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

- **支持版本**: 1.22

### Firefox

- **支持版本**: 115

### Node.js

- **支持版本**: 18.0.0

### Safari

- **支持版本**: 17

## 兼容性检查代码

### 特性检测

```javascript
// 检查Response.json_static是否支持
function isResponseJson_staticSupported() {
    return 'json_static' in response && typeof response.json_static === 'function';
}

if (isResponseJson_staticSupported()) {
    console.log('Response.json_static 支持');
    // 使用Response.json_static
} else {
    console.log('Response.json_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Response.json_static polyfill
if (!response.json_static) {
    // 在这里添加polyfill实现
    console.log('加载Response.json_static polyfill');
}
```

