# Navigator.requestMediaKeySystemAccess API 兼容性数据

## 基本信息

- **API名称**: `Navigator.requestMediaKeySystemAccess`
- **MDN文档**: [Navigator.requestMediaKeySystemAccess](https://developer.mozilla.org/docs/Web/API/Navigator/requestMediaKeySystemAccess)
- **规范文档**: [查看规范](https://w3c.github.io/encrypted-media/#navigator-extension-requestmediakeysystemaccess)
- **标签**: `web-features:encrypted-media-extensions`

## 使用示例

### 基本用法

```javascript
// Navigator.requestMediaKeySystemAccess 使用示例
// 请查阅MDN文档了解具体用法
console.log('Navigator.requestMediaKeySystemAccess API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 42 | The spec requires that the passed `supportedConfigurations` option contain at least one of `audioCap... |
| Chrome Android | 同主版本 |  |
| Edge | 13 |  |
| Firefox | 38 | Starting in Firefox 55, if neither `audioCapabilities` nor `videoCapabilities` is specified in `supp... |
| Firefox Android | 同主版本 |  |
| Node.js | 不支持 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 29 | The spec requires that the passed `supportedConfigurations` option contain at least one of `audioCap... |
| Safari | 12.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 43 | The spec requires that the passed `supportedConfigurations` option contain at least one of `audioCap... |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 42
- **注意事项**:
  - The spec requires that the passed `supportedConfigurations` option contain at least one of `audioCapabilities` or `videoCapabilities`, and that said parameters include a codec string.
  - The function does not exist in insecure contexts. This was not enforced until Chrome 58.

### Edge

- **支持版本**: 13

### Firefox

- **支持版本**: 38
- **注意事项**:
  - Starting in Firefox 55, if neither `audioCapabilities` nor `videoCapabilities` is specified in `supportedConfigurations`, a warning is output to the web console.
  - In addition, starting in Firefox 55, if in `supportedConfigurations`, either `audioCapabilities`'s or `videoCapabilities`'s `contentType` value doesn't specify a `"codecs"` substring to define allowed codecs within the media wrapper, a warning is output to the web console. See note below table for example and correction.
  - In the future, if neither `audioCapabilities` nor `videoCapabilities` is specified in the `supportedConfigurations`, a `NotSupported` exception will be thrown.

### Node.js

- **支持版本**: 不支持

### Opera Android

- **支持版本**: 29
- **注意事项**:
  - The spec requires that the passed `supportedConfigurations` option contain at least one of `audioCapabilities` or `videoCapabilities`, and that said parameters include a codec string.
  - The function does not exist in insecure contexts. This was not enforced until Opera 45.

### Safari

- **支持版本**: 12.1

### WebView Android

- **支持版本**: 43
- **注意事项**:
  - The spec requires that the passed `supportedConfigurations` option contain at least one of `audioCapabilities` or `videoCapabilities`, and that said parameters include a codec string.
  - The function does not exist in insecure contexts. This was not enforced until version 58.

## 兼容性检查代码

### 特性检测

```javascript
// 检查Navigator.requestMediaKeySystemAccess是否支持
function isNavigatorRequestMediaKeySystemAccessSupported() {
    return 'requestMediaKeySystemAccess' in navigator && typeof navigator.requestMediaKeySystemAccess === 'function';
}

if (isNavigatorRequestMediaKeySystemAccessSupported()) {
    console.log('Navigator.requestMediaKeySystemAccess 支持');
    // 使用Navigator.requestMediaKeySystemAccess
} else {
    console.log('Navigator.requestMediaKeySystemAccess 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Navigator.requestMediaKeySystemAccess polyfill
if (!navigator.requestMediaKeySystemAccess) {
    // 在这里添加polyfill实现
    console.log('加载Navigator.requestMediaKeySystemAccess polyfill');
}
```

