# FetchEvent.respondWith.resource_url API 兼容性数据

## 基本信息

- **API名称**: `FetchEvent.respondWith.resource_url`
- **标签**: `web-features:service-workers`
- **描述**: Change in behavior when specifying the final URL of a resource.

## 使用示例

### 基本用法

```javascript
// FetchEvent.respondWith.resource_url 使用示例
// 请查阅MDN文档了解具体用法
console.log('FetchEvent.respondWith.resource_url API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 59 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 59

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查FetchEvent.respondWith.resource_url是否支持
function isFetchEventRespondWithSupported() {
    return 'respondWith' in fetchevent && typeof fetchevent.respondWith === 'function';
}

if (isFetchEventRespondWithSupported()) {
    console.log('FetchEvent.respondWith.resource_url 支持');
    // 使用FetchEvent.respondWith.resource_url
} else {
    console.log('FetchEvent.respondWith.resource_url 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FetchEvent.respondWith.resource_url polyfill
if (!fetchevent.respondWith) {
    // 在这里添加polyfill实现
    console.log('加载FetchEvent.respondWith.resource_url polyfill');
}
```

