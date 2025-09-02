# FetchEvent.clientId API 兼容性数据

## 基本信息

- **API名称**: `FetchEvent.clientId`
- **MDN文档**: [FetchEvent.clientId](https://developer.mozilla.org/docs/Web/API/FetchEvent/clientId)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#fetch-event-clientid)
- **标签**: `web-features:service-workers`

## 使用示例

### 基本用法

```javascript
// FetchEvent.clientId 使用示例
// 请查阅MDN文档了解具体用法
console.log('FetchEvent.clientId API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 49 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 45 |  |
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

- **支持版本**: 49

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 45

### Safari

- **支持版本**: 11.1

### webview_ios

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查FetchEvent.clientId是否支持
function isFetchEventClientIdSupported() {
    return 'clientId' in fetchevent && typeof fetchevent.clientId === 'function';
}

if (isFetchEventClientIdSupported()) {
    console.log('FetchEvent.clientId 支持');
    // 使用FetchEvent.clientId
} else {
    console.log('FetchEvent.clientId 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FetchEvent.clientId polyfill
if (!fetchevent.clientId) {
    // 在这里添加polyfill实现
    console.log('加载FetchEvent.clientId polyfill');
}
```

