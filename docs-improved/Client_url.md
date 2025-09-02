# Client.url API 兼容性数据

## 基本信息

- **API名称**: `Client.url`
- **MDN文档**: [Client.url](https://developer.mozilla.org/docs/Web/API/Client/url)
- **规范文档**: [查看规范](https://w3c.github.io/ServiceWorker/#client-url)
- **标签**: `web-features:service-workers`

## 使用示例

### 基本用法

```javascript
// Client.url 使用示例
// 请查阅MDN文档了解具体用法
console.log('Client.url API');
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
// 检查Client.url是否支持
function isClientUrlSupported() {
    return 'url' in client && typeof client.url === 'function';
}

if (isClientUrlSupported()) {
    console.log('Client.url 支持');
    // 使用Client.url
} else {
    console.log('Client.url 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Client.url polyfill
if (!client.url) {
    // 在这里添加polyfill实现
    console.log('加载Client.url polyfill');
}
```

