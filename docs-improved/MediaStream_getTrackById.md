# MediaStream.getTrackById API 兼容性数据

## 基本信息

- **API名称**: `MediaStream.getTrackById`
- **MDN文档**: [MediaStream.getTrackById](https://developer.mozilla.org/docs/Web/API/MediaStream/getTrackById)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-main/#dom-mediastream-gettrackbyid)
- **标签**: `web-features:media-capture`

## 使用示例

### 基本用法

```javascript
// MediaStream.getTrackById 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaStream.getTrackById API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 26 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 49 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 37 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 26

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 49

### Safari

- **支持版本**: 11

### WebView Android

- **支持版本**: 37

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaStream.getTrackById是否支持
function isMediaStreamGetTrackByIdSupported() {
    return 'getTrackById' in mediastream && typeof mediastream.getTrackById === 'function';
}

if (isMediaStreamGetTrackByIdSupported()) {
    console.log('MediaStream.getTrackById 支持');
    // 使用MediaStream.getTrackById
} else {
    console.log('MediaStream.getTrackById 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaStream.getTrackById polyfill
if (!mediastream.getTrackById) {
    // 在这里添加polyfill实现
    console.log('加载MediaStream.getTrackById polyfill');
}
```

