# BlobEvent.BlobEvent API 兼容性数据

## 基本信息

- **API名称**: `BlobEvent.BlobEvent`
- **MDN文档**: [BlobEvent.BlobEvent](https://developer.mozilla.org/docs/Web/API/BlobEvent/BlobEvent)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-record/#dom-blobevent-blobevent)
- **标签**: `web-features:mediastream-recording`
- **描述**: `BlobEvent()` constructor

## 使用示例

### 基本用法

```javascript
// BlobEvent.BlobEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('BlobEvent.BlobEvent API');
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
// 检查BlobEvent.BlobEvent是否支持
function isBlobEventBlobEventSupported() {
    return 'BlobEvent' in blobevent && typeof blobevent.BlobEvent === 'function';
}

if (isBlobEventBlobEventSupported()) {
    console.log('BlobEvent.BlobEvent 支持');
    // 使用BlobEvent.BlobEvent
} else {
    console.log('BlobEvent.BlobEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BlobEvent.BlobEvent polyfill
if (!blobevent.BlobEvent) {
    // 在这里添加polyfill实现
    console.log('加载BlobEvent.BlobEvent polyfill');
}
```

