# XRSession.renderState API 兼容性数据

## 基本信息

- **API名称**: `XRSession.renderState`
- **MDN文档**: [XRSession.renderState](https://developer.mozilla.org/docs/Web/API/XRSession/renderState)
- **规范文档**: [查看规范](https://immersive-web.github.io/webxr/#dom-xrsession-renderstate)
- **标签**: `web-features:webxr-device`

## 使用示例

### 基本用法

```javascript
// XRSession.renderState 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRSession.renderState API');
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
// 检查XRSession.renderState是否支持
function isXRSessionRenderStateSupported() {
    return 'renderState' in xrsession && typeof xrsession.renderState === 'function';
}

if (isXRSessionRenderStateSupported()) {
    console.log('XRSession.renderState 支持');
    // 使用XRSession.renderState
} else {
    console.log('XRSession.renderState 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRSession.renderState polyfill
if (!xrsession.renderState) {
    // 在这里添加polyfill实现
    console.log('加载XRSession.renderState polyfill');
}
```

