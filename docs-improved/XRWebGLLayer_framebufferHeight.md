# XRWebGLLayer.framebufferHeight API 兼容性数据

## 基本信息

- **API名称**: `XRWebGLLayer.framebufferHeight`
- **MDN文档**: [XRWebGLLayer.framebufferHeight](https://developer.mozilla.org/docs/Web/API/XRWebGLLayer/framebufferHeight)
- **规范文档**: [查看规范](https://immersive-web.github.io/webxr/#dom-xrwebgllayer-framebufferheight)
- **标签**: `web-features:webxr-device`

## 使用示例

### 基本用法

```javascript
// XRWebGLLayer.framebufferHeight 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRWebGLLayer.framebufferHeight API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 79 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 11.2 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 79

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### Samsung Internet

- **支持版本**: 11.2

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查XRWebGLLayer.framebufferHeight是否支持
function isXRWebGLLayerFramebufferHeightSupported() {
    return 'framebufferHeight' in xrwebgllayer && typeof xrwebgllayer.framebufferHeight === 'function';
}

if (isXRWebGLLayerFramebufferHeightSupported()) {
    console.log('XRWebGLLayer.framebufferHeight 支持');
    // 使用XRWebGLLayer.framebufferHeight
} else {
    console.log('XRWebGLLayer.framebufferHeight 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRWebGLLayer.framebufferHeight polyfill
if (!xrwebgllayer.framebufferHeight) {
    // 在这里添加polyfill实现
    console.log('加载XRWebGLLayer.framebufferHeight polyfill');
}
```

