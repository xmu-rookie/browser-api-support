# XRWebGLBinding.XRWebGLBinding API 兼容性数据

## 基本信息

- **API名称**: `XRWebGLBinding.XRWebGLBinding`
- **MDN文档**: [XRWebGLBinding.XRWebGLBinding](https://developer.mozilla.org/docs/Web/API/XRWebGLBinding/XRWebGLBinding)
- **规范文档**: [查看规范](https://immersive-web.github.io/layers/#dom-xrwebglbinding-xrwebglbinding)
- **标签**: `web-features:webxr-layers`
- **描述**: `XRWebGLBinding()` constructor

## 使用示例

### 基本用法

```javascript
// XRWebGLBinding.XRWebGLBinding 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRWebGLBinding.XRWebGLBinding API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 89 |  |
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
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 89

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查XRWebGLBinding.XRWebGLBinding是否支持
function isXRWebGLBindingXRWebGLBindingSupported() {
    return 'XRWebGLBinding' in xrwebglbinding && typeof xrwebglbinding.XRWebGLBinding === 'function';
}

if (isXRWebGLBindingXRWebGLBindingSupported()) {
    console.log('XRWebGLBinding.XRWebGLBinding 支持');
    // 使用XRWebGLBinding.XRWebGLBinding
} else {
    console.log('XRWebGLBinding.XRWebGLBinding 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRWebGLBinding.XRWebGLBinding polyfill
if (!xrwebglbinding.XRWebGLBinding) {
    // 在这里添加polyfill实现
    console.log('加载XRWebGLBinding.XRWebGLBinding polyfill');
}
```

