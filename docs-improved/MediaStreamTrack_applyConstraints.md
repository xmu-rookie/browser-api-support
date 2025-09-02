# MediaStreamTrack.applyConstraints API 兼容性数据

## 基本信息

- **API名称**: `MediaStreamTrack.applyConstraints`
- **MDN文档**: [MediaStreamTrack.applyConstraints](https://developer.mozilla.org/docs/Web/API/MediaStreamTrack/applyConstraints)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-main/#dom-mediastreamtrack-applyconstraints)
- **标签**: `web-features:media-capture`

## 使用示例

### 基本用法

```javascript
// MediaStreamTrack.applyConstraints 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaStreamTrack.applyConstraints API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 59 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 43 |  |
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

- **支持版本**: 59

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 43

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaStreamTrack.applyConstraints是否支持
function isMediaStreamTrackApplyConstraintsSupported() {
    return 'applyConstraints' in mediastreamtrack && typeof mediastreamtrack.applyConstraints === 'function';
}

if (isMediaStreamTrackApplyConstraintsSupported()) {
    console.log('MediaStreamTrack.applyConstraints 支持');
    // 使用MediaStreamTrack.applyConstraints
} else {
    console.log('MediaStreamTrack.applyConstraints 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaStreamTrack.applyConstraints polyfill
if (!mediastreamtrack.applyConstraints) {
    // 在这里添加polyfill实现
    console.log('加载MediaStreamTrack.applyConstraints polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **aspectRatio_constraint**: `aspectRatio` constraint
- **autoGainControl_constraint**: `autoGainControl` constraint
- **channelCount_constraint**: `channelCount` constraint
- **deviceId_constraint**: `deviceId` constraint
- **displaySurface_constraint**: `displaySurface` constraint
- **echoCancellation_constraint**: `echoCancellation` constraint
- **facingMode_constraint**: `facingMode` constraint
- **frameRate_constraint**: `frameRate` constraint
- **groupId_constraint**: `groupId` constraint
- **height_constraint**: `height` constraint
- **latency_constraint**: `latency` constraint
- **logicalSurface_constraint**: `logicalSurface` constraint
- **noiseSuppression_constraint**: `noiseSuppression` constraint
- **resizeMode_constraint**: `resizeMode` constraint
- **sampleRate_constraint**: `sampleRate` constraint
- **sampleSize_constraint**: `sampleSize` constraint
- **suppressLocalAudioPlayback_constraint**: `suppressLocalAudioPlayback` constraint
- **volume_constraint**: `volume` constraint
- **width_constraint**: `width` constraint

