# FetchEvent.respondWith API 兼容性数据

## 基本信息

- **API名称**: `FetchEvent.respondWith`
- **MDN文档**: [FetchEvent.respondWith](https://developer.mozilla.org/docs/Web/API/FetchEvent/respondWith)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#fetch-event-respondwith)
- **标签**: `web-features:service-workers`

## 使用示例

### 基本用法

```javascript
// FetchEvent.respondWith 使用示例
// 请查阅MDN文档了解具体用法
console.log('FetchEvent.respondWith API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 42 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 44 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 42

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 44

### Safari

- **支持版本**: 11.1

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查FetchEvent.respondWith是否支持
function isFetchEventRespondWithSupported() {
    return 'respondWith' in fetchevent && typeof fetchevent.respondWith === 'function';
}

if (isFetchEventRespondWithSupported()) {
    console.log('FetchEvent.respondWith 支持');
    // 使用FetchEvent.respondWith
} else {
    console.log('FetchEvent.respondWith 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FetchEvent.respondWith polyfill
if (!fetchevent.respondWith) {
    // 在这里添加polyfill实现
    console.log('加载FetchEvent.respondWith polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **networkerror_on_same-origin_cors**: `NetworkError` thrown if the request mode is `same-origin` and the response type is `cors`
- **resource_url**: Change in behavior when specifying the final URL of a resource.

