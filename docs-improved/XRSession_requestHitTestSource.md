# XRSession.requestHitTestSource API 兼容性数据

## 基本信息

- **API名称**: `XRSession.requestHitTestSource`
- **MDN文档**: [XRSession.requestHitTestSource](https://developer.mozilla.org/docs/Web/API/XRSession/requestHitTestSource)
- **规范文档**: [查看规范](https://immersive-web.github.io/hit-test/#dom-xrsession-requesthittestsource)
- **标签**: `web-features:webxr-hit-test`

## 使用示例

### 基本用法

```javascript
// XRSession.requestHitTestSource 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRSession.requestHitTestSource API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 81 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 12.1 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 81

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### Samsung Internet

- **支持版本**: 12.1

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查XRSession.requestHitTestSource是否支持
function isXRSessionRequestHitTestSourceSupported() {
    return 'requestHitTestSource' in xrsession && typeof xrsession.requestHitTestSource === 'function';
}

if (isXRSessionRequestHitTestSourceSupported()) {
    console.log('XRSession.requestHitTestSource 支持');
    // 使用XRSession.requestHitTestSource
} else {
    console.log('XRSession.requestHitTestSource 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRSession.requestHitTestSource polyfill
if (!xrsession.requestHitTestSource) {
    // 在这里添加polyfill实现
    console.log('加载XRSession.requestHitTestSource polyfill');
}
```

