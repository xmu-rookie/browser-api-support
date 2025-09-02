# XRView.isFirstPersonObserver API 兼容性数据

## 基本信息

- **API名称**: `XRView.isFirstPersonObserver`
- **MDN文档**: [XRView.isFirstPersonObserver](https://developer.mozilla.org/docs/Web/API/XRView/isFirstPersonObserver)
- **规范文档**: [查看规范](https://immersive-web.github.io/webxr-ar-module/#dom-xrview-isfirstpersonobserver)
- **标签**: `web-features:webxr-ar`

## 使用示例

### 基本用法

```javascript
// XRView.isFirstPersonObserver 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRView.isFirstPersonObserver API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 86 | Always returns `false` since no headset with first-person view is supported. |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 13.0 | Always returns `false` since no headset with first-person view is supported. |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 86
- **注意事项**:
  - Always returns `false` since no headset with first-person view is supported.

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### Samsung Internet

- **支持版本**: 13.0
- **注意事项**:
  - Always returns `false` since no headset with first-person view is supported.

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查XRView.isFirstPersonObserver是否支持
function isXRViewIsFirstPersonObserverSupported() {
    return 'isFirstPersonObserver' in xrview && typeof xrview.isFirstPersonObserver === 'function';
}

if (isXRViewIsFirstPersonObserverSupported()) {
    console.log('XRView.isFirstPersonObserver 支持');
    // 使用XRView.isFirstPersonObserver
} else {
    console.log('XRView.isFirstPersonObserver 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRView.isFirstPersonObserver polyfill
if (!xrview.isFirstPersonObserver) {
    // 在这里添加polyfill实现
    console.log('加载XRView.isFirstPersonObserver polyfill');
}
```

