# MediaCapabilities.decodingInfo.configuration_keySystemConfiguration_parameter API 兼容性数据

## 基本信息

- **API名称**: `MediaCapabilities.decodingInfo.configuration_keySystemConfiguration_parameter`
- **MDN文档**: [MediaCapabilities.decodingInfo.configuration_keySystemConfiguration_parameter](https://developer.mozilla.org/docs/Web/API/MediaCapabilities/decodingInfo#keysystemconfiguration)
- **规范文档**: [查看规范](https://w3c.github.io/media-capabilities/#dom-mediadecodingconfiguration-keysystemconfiguration)
- **标签**: `web-features:encrypted-media-extensions`
- **描述**: `configuration.keySystemConfiguration` parameter

## 使用示例

### 基本用法

```javascript
// MediaCapabilities.decodingInfo.configuration_keySystemConfiguration_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('MediaCapabilities.decodingInfo.configuration_keySystemConfiguration_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 80 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 129 |  |
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

- **支持版本**: 80

### Firefox

- **支持版本**: 129

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查MediaCapabilities.decodingInfo.configuration_keySystemConfiguration_parameter是否支持
function isMediaCapabilitiesDecodingInfoSupported() {
    return 'decodingInfo' in mediacapabilities && typeof mediacapabilities.decodingInfo === 'function';
}

if (isMediaCapabilitiesDecodingInfoSupported()) {
    console.log('MediaCapabilities.decodingInfo.configuration_keySystemConfiguration_parameter 支持');
    // 使用MediaCapabilities.decodingInfo.configuration_keySystemConfiguration_parameter
} else {
    console.log('MediaCapabilities.decodingInfo.configuration_keySystemConfiguration_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// MediaCapabilities.decodingInfo.configuration_keySystemConfiguration_parameter polyfill
if (!mediacapabilities.decodingInfo) {
    // 在这里添加polyfill实现
    console.log('加载MediaCapabilities.decodingInfo.configuration_keySystemConfiguration_parameter polyfill');
}
```

