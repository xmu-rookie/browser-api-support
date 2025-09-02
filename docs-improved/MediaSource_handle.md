# MediaSource.handle API 兼容性数据

## 基本信息

- **API名称**: `MediaSource.handle`
- **MDN文档**: [MediaSource.handle](https://developer.mozilla.org/docs/Web/API/MediaSource/handle)
- **规范文档**: [查看规范](https://w3c.github.io/media-source/#dom-mediasource-handle)
- **标签**: `web-features:media-source`

## 使用示例

### 基本用法

```javascript
// MediaSource.handle 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaSource.handle API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 108 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18 |  |
| Safari iOS | 18 | Exposed in Mobile Safari on iPad but not on iPhone. |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 108

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 18

### Safari iOS

- **支持版本**: 18
- **部分实现**: 是
- **注意事项**:
  - Exposed in Mobile Safari on iPad but not on iPhone.

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaSource.handle是否支持
function isMediaSourceHandleSupported() {
    return 'handle' in mediasource && typeof mediasource.handle === 'function';
}

if (isMediaSourceHandleSupported()) {
    console.log('MediaSource.handle 支持');
    // 使用MediaSource.handle
} else {
    console.log('MediaSource.handle 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaSource.handle polyfill
if (!mediasource.handle) {
    // 在这里添加polyfill实现
    console.log('加载MediaSource.handle polyfill');
}
```

