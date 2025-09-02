# Request.cache.only-if-cached API 兼容性数据

## 基本信息

- **API名称**: `Request.cache.only-if-cached`
- **标签**: `web-features:fetch`

## 使用示例

### 基本用法

```javascript
// Request.cache.only-if-cached 使用示例
// 请查阅MDN文档了解具体用法
console.log('Request.cache.only-if-cached API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 64 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 50 |  |
| Firefox Android | 不支持 |  |
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

### Chrome

- **支持版本**: 64

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 50

### Firefox Android

- **支持版本**: 不支持

### Node.js

- **支持版本**: 18.0.0

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Request.cache.only-if-cached是否支持
function isRequestCacheSupported() {
    return 'cache' in request && typeof request.cache === 'function';
}

if (isRequestCacheSupported()) {
    console.log('Request.cache.only-if-cached 支持');
    // 使用Request.cache.only-if-cached
} else {
    console.log('Request.cache.only-if-cached 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Request.cache.only-if-cached polyfill
if (!request.cache) {
    // 在这里添加polyfill实现
    console.log('加载Request.cache.only-if-cached polyfill');
}
```

