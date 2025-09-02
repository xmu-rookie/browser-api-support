# BlobEvent API 兼容性数据

## 基本信息

- **API名称**: `BlobEvent`
- **MDN文档**: [BlobEvent](https://developer.mozilla.org/docs/Web/API/BlobEvent)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-record/#blobevent-section)
- **标签**: `web-features:mediastream-recording`

## 使用示例

### 基本用法

```javascript
// BlobEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('BlobEvent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 49 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 21 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
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
// 检查BlobEvent是否支持
function isBlobEventSupported() {
    return 'BlobEvent' in window || typeof BlobEvent !== 'undefined';
}

if (isBlobEventSupported()) {
    console.log('BlobEvent 支持');
    // 使用BlobEvent
} else {
    console.log('BlobEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// BlobEvent polyfill
if (!window.BlobEvent) {
    // 在这里添加polyfill实现
    console.log('加载BlobEvent polyfill');
}
```

