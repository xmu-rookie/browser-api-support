# XRWebGLLayer.fixedFoveation API 兼容性数据

## 基本信息

- **API名称**: `XRWebGLLayer.fixedFoveation`
- **MDN文档**: [XRWebGLLayer.fixedFoveation](https://developer.mozilla.org/docs/Web/API/XRWebGLLayer/fixedFoveation)
- **规范文档**: [查看规范](https://immersive-web.github.io/webxr/#dom-xrwebgllayer-fixedfoveation)
- **标签**: `web-features:webxr-device`

## 使用示例

### 基本用法

```javascript
// XRWebGLLayer.fixedFoveation 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRWebGLLayer.fixedFoveation API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 8.0 |  |
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

- **支持版本**: 不支持

### Oculus

- **支持版本**: 8.0

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查XRWebGLLayer.fixedFoveation是否支持
function isXRWebGLLayerFixedFoveationSupported() {
    return 'fixedFoveation' in xrwebgllayer && typeof xrwebgllayer.fixedFoveation === 'function';
}

if (isXRWebGLLayerFixedFoveationSupported()) {
    console.log('XRWebGLLayer.fixedFoveation 支持');
    // 使用XRWebGLLayer.fixedFoveation
} else {
    console.log('XRWebGLLayer.fixedFoveation 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRWebGLLayer.fixedFoveation polyfill
if (!xrwebgllayer.fixedFoveation) {
    // 在这里添加polyfill实现
    console.log('加载XRWebGLLayer.fixedFoveation polyfill');
}
```

