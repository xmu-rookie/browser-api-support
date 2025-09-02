# MediaStream API 兼容性数据

## 基本信息

- **API名称**: `MediaStream`
- **MDN文档**: [MediaStream](https://developer.mozilla.org/docs/Web/API/MediaStream)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-main/#mediastream)
- **标签**: `web-features:media-capture`

## 使用示例

### 基本用法

```javascript
// MediaStream 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaStream API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 55 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 15 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 55
- **支持版本**: 21
- **前缀**: webkit

### Edge

- **支持版本**: 12
- **支持版本**: 79
- **前缀**: webkit

### Firefox

- **支持版本**: 15

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaStream是否支持
function isMediaStreamSupported() {
    return 'MediaStream' in window || typeof MediaStream !== 'undefined';
}

if (isMediaStreamSupported()) {
    console.log('MediaStream 支持');
    // 使用MediaStream
} else {
    console.log('MediaStream 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaStream polyfill
if (!window.MediaStream) {
    // 在这里添加polyfill实现
    console.log('加载MediaStream polyfill');
}
```

