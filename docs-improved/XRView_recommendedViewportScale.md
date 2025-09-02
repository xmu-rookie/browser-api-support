# XRView.recommendedViewportScale API 兼容性数据

## 基本信息

- **API名称**: `XRView.recommendedViewportScale`
- **MDN文档**: [XRView.recommendedViewportScale](https://developer.mozilla.org/docs/Web/API/XRView/recommendedViewportScale)
- **规范文档**: [查看规范](https://immersive-web.github.io/webxr/#dom-xrview-recommendedviewportscale)
- **标签**: `web-features:webxr-device`

## 使用示例

### 基本用法

```javascript
// XRView.recommendedViewportScale 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRView.recommendedViewportScale API');
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
// 检查XRView.recommendedViewportScale是否支持
function isXRViewRecommendedViewportScaleSupported() {
    return 'recommendedViewportScale' in xrview && typeof xrview.recommendedViewportScale === 'function';
}

if (isXRViewRecommendedViewportScaleSupported()) {
    console.log('XRView.recommendedViewportScale 支持');
    // 使用XRView.recommendedViewportScale
} else {
    console.log('XRView.recommendedViewportScale 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRView.recommendedViewportScale polyfill
if (!xrview.recommendedViewportScale) {
    // 在这里添加polyfill实现
    console.log('加载XRView.recommendedViewportScale polyfill');
}
```

