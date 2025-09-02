# MediaStreamTrack.applyConstraints.width_constraint API 兼容性数据

## 基本信息

- **API名称**: `MediaStreamTrack.applyConstraints.width_constraint`
- **MDN文档**: [MediaStreamTrack.applyConstraints.width_constraint](https://developer.mozilla.org/docs/Web/API/MediaTrackConstraints/width)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-main/#dom-mediatrackconstraintset-width)
- **标签**: `web-features:media-capture`
- **描述**: `width` constraint

## 使用示例

### 基本用法

```javascript
// MediaStreamTrack.applyConstraints.width_constraint 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaStreamTrack.applyConstraints.width_constraint API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 59 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 50 |  |
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

- **支持版本**: 50

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaStreamTrack.applyConstraints.width_constraint是否支持
function isMediaStreamTrackApplyConstraintsSupported() {
    return 'applyConstraints' in mediastreamtrack && typeof mediastreamtrack.applyConstraints === 'function';
}

if (isMediaStreamTrackApplyConstraintsSupported()) {
    console.log('MediaStreamTrack.applyConstraints.width_constraint 支持');
    // 使用MediaStreamTrack.applyConstraints.width_constraint
} else {
    console.log('MediaStreamTrack.applyConstraints.width_constraint 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaStreamTrack.applyConstraints.width_constraint polyfill
if (!mediastreamtrack.applyConstraints) {
    // 在这里添加polyfill实现
    console.log('加载MediaStreamTrack.applyConstraints.width_constraint polyfill');
}
```

