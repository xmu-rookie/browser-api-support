# MediaStreamTrack.getSettings.return_object_property_screenPixelRatio API 兼容性数据

## 基本信息

- **API名称**: `MediaStreamTrack.getSettings.return_object_property_screenPixelRatio`
- **MDN文档**: [MediaStreamTrack.getSettings.return_object_property_screenPixelRatio](https://developer.mozilla.org/docs/Web/API/MediaTrackSettings/screenPixelRatio)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-screen-share/#dom-mediatracksettings-screenpixelratio)
- **描述**: `screenPixelRatio` property in returned object

## 使用示例

### 基本用法

```javascript
// MediaStreamTrack.getSettings.return_object_property_screenPixelRatio 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaStreamTrack.getSettings.return_object_property_screenPixelRatio API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 136 |  |
| Chrome Android | 不支持 |  |
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

- **支持版本**: 136

### Chrome Android

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaStreamTrack.getSettings.return_object_property_screenPixelRatio是否支持
function isMediaStreamTrackGetSettingsSupported() {
    return 'getSettings' in mediastreamtrack && typeof mediastreamtrack.getSettings === 'function';
}

if (isMediaStreamTrackGetSettingsSupported()) {
    console.log('MediaStreamTrack.getSettings.return_object_property_screenPixelRatio 支持');
    // 使用MediaStreamTrack.getSettings.return_object_property_screenPixelRatio
} else {
    console.log('MediaStreamTrack.getSettings.return_object_property_screenPixelRatio 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaStreamTrack.getSettings.return_object_property_screenPixelRatio polyfill
if (!mediastreamtrack.getSettings) {
    // 在这里添加polyfill实现
    console.log('加载MediaStreamTrack.getSettings.return_object_property_screenPixelRatio polyfill');
}
```

