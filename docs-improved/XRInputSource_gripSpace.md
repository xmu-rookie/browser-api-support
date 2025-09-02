# XRInputSource.gripSpace API 兼容性数据

## 基本信息

- **API名称**: `XRInputSource.gripSpace`
- **MDN文档**: [XRInputSource.gripSpace](https://developer.mozilla.org/docs/Web/API/XRInputSource/gripSpace)
- **规范文档**: [查看规范](https://immersive-web.github.io/webxr/#dom-xrinputsource-gripspace)
- **标签**: `web-features:webxr-device`

## 使用示例

### 基本用法

```javascript
// XRInputSource.gripSpace 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRInputSource.gripSpace API');
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
// 检查XRInputSource.gripSpace是否支持
function isXRInputSourceGripSpaceSupported() {
    return 'gripSpace' in xrinputsource && typeof xrinputsource.gripSpace === 'function';
}

if (isXRInputSourceGripSpaceSupported()) {
    console.log('XRInputSource.gripSpace 支持');
    // 使用XRInputSource.gripSpace
} else {
    console.log('XRInputSource.gripSpace 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRInputSource.gripSpace polyfill
if (!xrinputsource.gripSpace) {
    // 在这里添加polyfill实现
    console.log('加载XRInputSource.gripSpace polyfill');
}
```

