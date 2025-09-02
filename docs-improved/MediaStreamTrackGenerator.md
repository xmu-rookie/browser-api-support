# MediaStreamTrackGenerator API 兼容性数据

## 基本信息

- **API名称**: `MediaStreamTrackGenerator`
- **MDN文档**: [MediaStreamTrackGenerator](https://developer.mozilla.org/docs/Web/API/MediaStreamTrackGenerator)

## 使用示例

### 基本用法

```javascript
// MediaStreamTrackGenerator 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaStreamTrackGenerator API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 94 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 94

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaStreamTrackGenerator是否支持
function isMediaStreamTrackGeneratorSupported() {
    return 'MediaStreamTrackGenerator' in window || typeof MediaStreamTrackGenerator !== 'undefined';
}

if (isMediaStreamTrackGeneratorSupported()) {
    console.log('MediaStreamTrackGenerator 支持');
    // 使用MediaStreamTrackGenerator
} else {
    console.log('MediaStreamTrackGenerator 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaStreamTrackGenerator polyfill
if (!window.MediaStreamTrackGenerator) {
    // 在这里添加polyfill实现
    console.log('加载MediaStreamTrackGenerator polyfill');
}
```

