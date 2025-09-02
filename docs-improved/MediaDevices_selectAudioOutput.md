# MediaDevices.selectAudioOutput API 兼容性数据

## 基本信息

- **API名称**: `MediaDevices.selectAudioOutput`
- **MDN文档**: [MediaDevices.selectAudioOutput](https://developer.mozilla.org/docs/Web/API/MediaDevices/selectAudioOutput)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-output/#dom-mediadevices-selectaudiooutput)

## 使用示例

### 基本用法

```javascript
// MediaDevices.selectAudioOutput 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaDevices.selectAudioOutput API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 116 |  |
| Firefox Android | 不支持 |  |
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

- **支持版本**: 不支持

### Firefox

- **支持版本**: 116

### Firefox Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaDevices.selectAudioOutput是否支持
function isMediaDevicesSelectAudioOutputSupported() {
    return 'selectAudioOutput' in mediadevices && typeof mediadevices.selectAudioOutput === 'function';
}

if (isMediaDevicesSelectAudioOutputSupported()) {
    console.log('MediaDevices.selectAudioOutput 支持');
    // 使用MediaDevices.selectAudioOutput
} else {
    console.log('MediaDevices.selectAudioOutput 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaDevices.selectAudioOutput polyfill
if (!mediadevices.selectAudioOutput) {
    // 在这里添加polyfill实现
    console.log('加载MediaDevices.selectAudioOutput polyfill');
}
```

