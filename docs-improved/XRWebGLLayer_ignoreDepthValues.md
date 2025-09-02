# XRWebGLLayer.ignoreDepthValues API 兼容性数据

## 基本信息

- **API名称**: `XRWebGLLayer.ignoreDepthValues`
- **MDN文档**: [XRWebGLLayer.ignoreDepthValues](https://developer.mozilla.org/docs/Web/API/XRWebGLLayer/ignoreDepthValues)
- **规范文档**: [查看规范](https://immersive-web.github.io/webxr/#dom-xrwebgllayer-ignoredepthvalues)
- **标签**: `web-features:webxr-device`

## 使用示例

### 基本用法

```javascript
// XRWebGLLayer.ignoreDepthValues 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRWebGLLayer.ignoreDepthValues API');
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
// 检查XRWebGLLayer.ignoreDepthValues是否支持
function isXRWebGLLayerIgnoreDepthValuesSupported() {
    return 'ignoreDepthValues' in xrwebgllayer && typeof xrwebgllayer.ignoreDepthValues === 'function';
}

if (isXRWebGLLayerIgnoreDepthValuesSupported()) {
    console.log('XRWebGLLayer.ignoreDepthValues 支持');
    // 使用XRWebGLLayer.ignoreDepthValues
} else {
    console.log('XRWebGLLayer.ignoreDepthValues 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRWebGLLayer.ignoreDepthValues polyfill
if (!xrwebgllayer.ignoreDepthValues) {
    // 在这里添加polyfill实现
    console.log('加载XRWebGLLayer.ignoreDepthValues polyfill');
}
```

