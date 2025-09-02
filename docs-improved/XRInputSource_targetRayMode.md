# XRInputSource.targetRayMode API 兼容性数据

## 基本信息

- **API名称**: `XRInputSource.targetRayMode`
- **MDN文档**: [XRInputSource.targetRayMode](https://developer.mozilla.org/docs/Web/API/XRInputSource/targetRayMode)
- **规范文档**: [查看规范](https://immersive-web.github.io/webxr/#dom-xrinputsource-targetraymode)
- **标签**: `web-features:webxr-device`

## 使用示例

### 基本用法

```javascript
// XRInputSource.targetRayMode 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRInputSource.targetRayMode API');
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
// 检查XRInputSource.targetRayMode是否支持
function isXRInputSourceTargetRayModeSupported() {
    return 'targetRayMode' in xrinputsource && typeof xrinputsource.targetRayMode === 'function';
}

if (isXRInputSourceTargetRayModeSupported()) {
    console.log('XRInputSource.targetRayMode 支持');
    // 使用XRInputSource.targetRayMode
} else {
    console.log('XRInputSource.targetRayMode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRInputSource.targetRayMode polyfill
if (!xrinputsource.targetRayMode) {
    // 在这里添加polyfill实现
    console.log('加载XRInputSource.targetRayMode polyfill');
}
```

