# FetchEvent.resultingClientId API 兼容性数据

## 基本信息

- **API名称**: `FetchEvent.resultingClientId`
- **MDN文档**: [FetchEvent.resultingClientId](https://developer.mozilla.org/docs/Web/API/FetchEvent/resultingClientId)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#fetch-event-resultingclientid)
- **标签**: `web-features:service-workers`

## 使用示例

### 基本用法

```javascript
// FetchEvent.resultingClientId 使用示例
// 请查阅MDN文档了解具体用法
console.log('FetchEvent.resultingClientId API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 72 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 65 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 50 |  |
| Safari | 16 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 不支持 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 72

### Firefox

- **支持版本**: 65

### Opera Android

- **支持版本**: 50

### Safari

- **支持版本**: 16

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查FetchEvent.resultingClientId是否支持
function isFetchEventResultingClientIdSupported() {
    return 'resultingClientId' in fetchevent && typeof fetchevent.resultingClientId === 'function';
}

if (isFetchEventResultingClientIdSupported()) {
    console.log('FetchEvent.resultingClientId 支持');
    // 使用FetchEvent.resultingClientId
} else {
    console.log('FetchEvent.resultingClientId 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FetchEvent.resultingClientId polyfill
if (!fetchevent.resultingClientId) {
    // 在这里添加polyfill实现
    console.log('加载FetchEvent.resultingClientId polyfill');
}
```

