# XRWebGLSubImage.colorTexture API 兼容性数据

## 基本信息

- **API名称**: `XRWebGLSubImage.colorTexture`
- **MDN文档**: [XRWebGLSubImage.colorTexture](https://developer.mozilla.org/docs/Web/API/XRWebGLSubImage/colorTexture)
- **规范文档**: [查看规范](https://immersive-web.github.io/layers/#dom-xrwebglsubimage-colortexture)
- **标签**: `web-features:webxr-layers`

## 使用示例

### 基本用法

```javascript
// XRWebGLSubImage.colorTexture 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRWebGLSubImage.colorTexture API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 16.1 |  |
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

- **支持版本**: 16.1

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查XRWebGLSubImage.colorTexture是否支持
function isXRWebGLSubImageColorTextureSupported() {
    return 'colorTexture' in xrwebglsubimage && typeof xrwebglsubimage.colorTexture === 'function';
}

if (isXRWebGLSubImageColorTextureSupported()) {
    console.log('XRWebGLSubImage.colorTexture 支持');
    // 使用XRWebGLSubImage.colorTexture
} else {
    console.log('XRWebGLSubImage.colorTexture 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRWebGLSubImage.colorTexture polyfill
if (!xrwebglsubimage.colorTexture) {
    // 在这里添加polyfill实现
    console.log('加载XRWebGLSubImage.colorTexture polyfill');
}
```

