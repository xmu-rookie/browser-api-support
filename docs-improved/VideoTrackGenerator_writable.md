# VideoTrackGenerator.writable API 兼容性数据

## 基本信息

- **API名称**: `VideoTrackGenerator.writable`
- **MDN文档**: [VideoTrackGenerator.writable](https://developer.mozilla.org/docs/Web/API/VideoTrackGenerator/writable)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-transform/#dom-videotrackgenerator-writable)
- **标签**: `web-features:insertable-streams`

## 使用示例

### 基本用法

```javascript
// VideoTrackGenerator.writable 使用示例
// 请查阅MDN文档了解具体用法
console.log('VideoTrackGenerator.writable API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 18

## 兼容性检查代码

### 特性检测

```javascript
// 检查VideoTrackGenerator.writable是否支持
function isVideoTrackGeneratorWritableSupported() {
    return 'writable' in videotrackgenerator && typeof videotrackgenerator.writable === 'function';
}

if (isVideoTrackGeneratorWritableSupported()) {
    console.log('VideoTrackGenerator.writable 支持');
    // 使用VideoTrackGenerator.writable
} else {
    console.log('VideoTrackGenerator.writable 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// VideoTrackGenerator.writable polyfill
if (!videotrackgenerator.writable) {
    // 在这里添加polyfill实现
    console.log('加载VideoTrackGenerator.writable polyfill');
}
```

