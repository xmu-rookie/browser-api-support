# MediaDeviceInfo.toJSON API 兼容性数据

## 基本信息

- **API名称**: `MediaDeviceInfo.toJSON`
- **MDN文档**: [MediaDeviceInfo.toJSON](https://developer.mozilla.org/docs/Web/API/MediaDeviceInfo/toJSON)
- **规范文档**: [查看规范](https://w3c.github.io/mediacapture-main/#dom-mediadeviceinfo-tojson)
- **标签**: `web-features:media-capture`
- **描述**: `toJSON()`

## 使用示例

### 基本用法

```javascript
// MediaDeviceInfo.toJSON 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaDeviceInfo.toJSON API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 47 |  |
| Chrome Android | 同主版本 |  |
| Edge | 18 |  |
| Firefox | 42 |  |
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

- **支持版本**: 47

### Edge

- **支持版本**: 18

### Firefox

- **支持版本**: 42

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaDeviceInfo.toJSON是否支持
function isMediaDeviceInfoToJSONSupported() {
    return 'toJSON' in mediadeviceinfo && typeof mediadeviceinfo.toJSON === 'function';
}

if (isMediaDeviceInfoToJSONSupported()) {
    console.log('MediaDeviceInfo.toJSON 支持');
    // 使用MediaDeviceInfo.toJSON
} else {
    console.log('MediaDeviceInfo.toJSON 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaDeviceInfo.toJSON polyfill
if (!mediadeviceinfo.toJSON) {
    // 在这里添加polyfill实现
    console.log('加载MediaDeviceInfo.toJSON polyfill');
}
```

