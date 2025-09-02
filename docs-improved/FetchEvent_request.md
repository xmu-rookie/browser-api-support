# FetchEvent.request API 兼容性数据

## 基本信息

- **API名称**: `FetchEvent.request`
- **MDN文档**: [FetchEvent.request](https://developer.mozilla.org/docs/Web/API/FetchEvent/request)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#fetch-event-request)
- **标签**: `web-features:service-workers`

## 使用示例

### 基本用法

```javascript
// FetchEvent.request 使用示例
// 请查阅MDN文档了解具体用法
console.log('FetchEvent.request API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 40 |  |
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

- **支持版本**: 40

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
// 检查FetchEvent.request是否支持
function isFetchEventRequestSupported() {
    return 'request' in fetchevent && typeof fetchevent.request === 'function';
}

if (isFetchEventRequestSupported()) {
    console.log('FetchEvent.request 支持');
    // 使用FetchEvent.request
} else {
    console.log('FetchEvent.request 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FetchEvent.request polyfill
if (!fetchevent.request) {
    // 在这里添加polyfill实现
    console.log('加载FetchEvent.request polyfill');
}
```

