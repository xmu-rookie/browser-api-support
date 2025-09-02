# MediaStreamTrack.applyConstraints.noiseSuppression_constraint API 兼容性数据

## 基本信息

- **API名称**: `MediaStreamTrack.applyConstraints.noiseSuppression_constraint`
- **MDN文档**: [MediaStreamTrack.applyConstraints.noiseSuppression_constraint](https://developer.mozilla.org/docs/Web/API/MediaTrackConstraints/noiseSuppression)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-main/#dom-mediatrackconstraintset-noisesuppression)
- **标签**: `web-features:media-capture`
- **描述**: `noiseSuppression` constraint

## 使用示例

### 基本用法

```javascript
// MediaStreamTrack.applyConstraints.noiseSuppression_constraint 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaStreamTrack.applyConstraints.noiseSuppression_constraint API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 67 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 55 |  |
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

- **支持版本**: 67

### Firefox

- **支持版本**: 55
- **支持版本**: 46
- **前缀**: moz

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaStreamTrack.applyConstraints.noiseSuppression_constraint是否支持
function isMediaStreamTrackApplyConstraintsSupported() {
    return 'applyConstraints' in mediastreamtrack && typeof mediastreamtrack.applyConstraints === 'function';
}

if (isMediaStreamTrackApplyConstraintsSupported()) {
    console.log('MediaStreamTrack.applyConstraints.noiseSuppression_constraint 支持');
    // 使用MediaStreamTrack.applyConstraints.noiseSuppression_constraint
} else {
    console.log('MediaStreamTrack.applyConstraints.noiseSuppression_constraint 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaStreamTrack.applyConstraints.noiseSuppression_constraint polyfill
if (!mediastreamtrack.applyConstraints) {
    // 在这里添加polyfill实现
    console.log('加载MediaStreamTrack.applyConstraints.noiseSuppression_constraint polyfill');
}
```

