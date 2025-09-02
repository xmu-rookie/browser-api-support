# XRHitTestResult.createAnchor API 兼容性数据

## 基本信息

- **API名称**: `XRHitTestResult.createAnchor`
- **MDN文档**: [XRHitTestResult.createAnchor](https://developer.mozilla.org/docs/Web/API/XRHitTestResult/createAnchor)
- **规范文档**: [查看规范](https://immersive-web.github.io/anchors/#dom-xrhittestresult-createanchor)
- **标签**: `web-features:webxr-anchors`

## 使用示例

### 基本用法

```javascript
// XRHitTestResult.createAnchor 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRHitTestResult.createAnchor API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 85 |  |
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

- **支持版本**: 85

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查XRHitTestResult.createAnchor是否支持
function isXRHitTestResultCreateAnchorSupported() {
    return 'createAnchor' in xrhittestresult && typeof xrhittestresult.createAnchor === 'function';
}

if (isXRHitTestResultCreateAnchorSupported()) {
    console.log('XRHitTestResult.createAnchor 支持');
    // 使用XRHitTestResult.createAnchor
} else {
    console.log('XRHitTestResult.createAnchor 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRHitTestResult.createAnchor polyfill
if (!xrhittestresult.createAnchor) {
    // 在这里添加polyfill实现
    console.log('加载XRHitTestResult.createAnchor polyfill');
}
```

