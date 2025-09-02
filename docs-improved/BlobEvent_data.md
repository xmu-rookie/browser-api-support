# BlobEvent.data API 兼容性数据

## 基本信息

- **API名称**: `BlobEvent.data`
- **MDN文档**: [BlobEvent.data](https://developer.mozilla.org/docs/Web/API/BlobEvent/data)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-record/#dom-blobevent-data)
- **标签**: `web-features:mediastream-recording`

## 使用示例

### 基本用法

```javascript
// BlobEvent.data 使用示例
// 请查阅MDN文档了解具体用法
console.log('BlobEvent.data API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 49 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 21 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 49

### Firefox

- **支持版本**: 21

### Safari

- **支持版本**: 14

## 兼容性检查代码

### 特性检测

```javascript
// 检查BlobEvent.data是否支持
function isBlobEventDataSupported() {
    return 'data' in blobevent && typeof blobevent.data === 'function';
}

if (isBlobEventDataSupported()) {
    console.log('BlobEvent.data 支持');
    // 使用BlobEvent.data
} else {
    console.log('BlobEvent.data 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BlobEvent.data polyfill
if (!blobevent.data) {
    // 在这里添加polyfill实现
    console.log('加载BlobEvent.data polyfill');
}
```

