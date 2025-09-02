# XRDepthInformation.rawValueToMeters API 兼容性数据

## 基本信息

- **API名称**: `XRDepthInformation.rawValueToMeters`
- **MDN文档**: [XRDepthInformation.rawValueToMeters](https://developer.mozilla.org/docs/Web/API/XRDepthInformation/rawValueToMeters)
- **规范文档**: [查看规范](https://immersive-web.github.io/depth-sensing/#dom-xrdepthinformation-rawvaluetometers)
- **标签**: `web-features:webxr-depth-sensing`

## 使用示例

### 基本用法

```javascript
// XRDepthInformation.rawValueToMeters 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRDepthInformation.rawValueToMeters API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 90 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 90

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查XRDepthInformation.rawValueToMeters是否支持
function isXRDepthInformationRawValueToMetersSupported() {
    return 'rawValueToMeters' in xrdepthinformation && typeof xrdepthinformation.rawValueToMeters === 'function';
}

if (isXRDepthInformationRawValueToMetersSupported()) {
    console.log('XRDepthInformation.rawValueToMeters 支持');
    // 使用XRDepthInformation.rawValueToMeters
} else {
    console.log('XRDepthInformation.rawValueToMeters 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRDepthInformation.rawValueToMeters polyfill
if (!xrdepthinformation.rawValueToMeters) {
    // 在这里添加polyfill实现
    console.log('加载XRDepthInformation.rawValueToMeters polyfill');
}
```

