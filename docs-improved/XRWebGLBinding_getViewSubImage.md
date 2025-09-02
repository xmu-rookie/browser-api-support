# XRWebGLBinding.getViewSubImage API 兼容性数据

## 基本信息

- **API名称**: `XRWebGLBinding.getViewSubImage`
- **MDN文档**: [XRWebGLBinding.getViewSubImage](https://developer.mozilla.org/docs/Web/API/XRWebGLBinding/getViewSubImage)
- **规范文档**: [查看规范](https://immersive-web.github.io/layers/#dom-xrwebglbinding-getviewsubimage)
- **标签**: `web-features:webxr-layers`

## 使用示例

### 基本用法

```javascript
// XRWebGLBinding.getViewSubImage 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRWebGLBinding.getViewSubImage API');
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
// 检查XRWebGLBinding.getViewSubImage是否支持
function isXRWebGLBindingGetViewSubImageSupported() {
    return 'getViewSubImage' in xrwebglbinding && typeof xrwebglbinding.getViewSubImage === 'function';
}

if (isXRWebGLBindingGetViewSubImageSupported()) {
    console.log('XRWebGLBinding.getViewSubImage 支持');
    // 使用XRWebGLBinding.getViewSubImage
} else {
    console.log('XRWebGLBinding.getViewSubImage 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRWebGLBinding.getViewSubImage polyfill
if (!xrwebglbinding.getViewSubImage) {
    // 在这里添加polyfill实现
    console.log('加载XRWebGLBinding.getViewSubImage polyfill');
}
```

