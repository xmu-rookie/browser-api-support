# MediaStreamTrack.applyConstraints.logicalSurface_constraint API 兼容性数据

## 基本信息

- **API名称**: `MediaStreamTrack.applyConstraints.logicalSurface_constraint`
- **MDN文档**: [MediaStreamTrack.applyConstraints.logicalSurface_constraint](https://developer.mozilla.org/docs/Web/API/MediaTrackConstraints/logicalSurface)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-screen-share/#dom-mediatrackconstraintset-logicalsurface)
- **标签**: `web-features:screen-capture`
- **描述**: `logicalSurface` constraint

## 使用示例

### 基本用法

```javascript
// MediaStreamTrack.applyConstraints.logicalSurface_constraint 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaStreamTrack.applyConstraints.logicalSurface_constraint API');
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
| Safari | 11.1 |  |
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

- **支持版本**: 11.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaStreamTrack.applyConstraints.logicalSurface_constraint是否支持
function isMediaStreamTrackApplyConstraintsSupported() {
    return 'applyConstraints' in mediastreamtrack && typeof mediastreamtrack.applyConstraints === 'function';
}

if (isMediaStreamTrackApplyConstraintsSupported()) {
    console.log('MediaStreamTrack.applyConstraints.logicalSurface_constraint 支持');
    // 使用MediaStreamTrack.applyConstraints.logicalSurface_constraint
} else {
    console.log('MediaStreamTrack.applyConstraints.logicalSurface_constraint 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaStreamTrack.applyConstraints.logicalSurface_constraint polyfill
if (!mediastreamtrack.applyConstraints) {
    // 在这里添加polyfill实现
    console.log('加载MediaStreamTrack.applyConstraints.logicalSurface_constraint polyfill');
}
```

