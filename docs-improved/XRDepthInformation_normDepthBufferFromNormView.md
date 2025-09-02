# XRDepthInformation.normDepthBufferFromNormView API 兼容性数据

## 基本信息

- **API名称**: `XRDepthInformation.normDepthBufferFromNormView`
- **MDN文档**: [XRDepthInformation.normDepthBufferFromNormView](https://developer.mozilla.org/docs/Web/API/XRDepthInformation/normDepthBufferFromNormView)
- **规范文档**: [查看规范](https://immersive-web.github.io/depth-sensing/#dom-xrdepthinformation-normdepthbufferfromnormview)
- **标签**: `web-features:webxr-depth-sensing`

## 使用示例

### 基本用法

```javascript
// XRDepthInformation.normDepthBufferFromNormView 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRDepthInformation.normDepthBufferFromNormView API');
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
// 检查XRDepthInformation.normDepthBufferFromNormView是否支持
function isXRDepthInformationNormDepthBufferFromNormViewSupported() {
    return 'normDepthBufferFromNormView' in xrdepthinformation && typeof xrdepthinformation.normDepthBufferFromNormView === 'function';
}

if (isXRDepthInformationNormDepthBufferFromNormViewSupported()) {
    console.log('XRDepthInformation.normDepthBufferFromNormView 支持');
    // 使用XRDepthInformation.normDepthBufferFromNormView
} else {
    console.log('XRDepthInformation.normDepthBufferFromNormView 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRDepthInformation.normDepthBufferFromNormView polyfill
if (!xrdepthinformation.normDepthBufferFromNormView) {
    // 在这里添加polyfill实现
    console.log('加载XRDepthInformation.normDepthBufferFromNormView polyfill');
}
```

