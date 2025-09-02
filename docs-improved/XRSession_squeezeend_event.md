# XRSession.squeezeend_event API 兼容性数据

## 基本信息

- **API名称**: `XRSession.squeezeend_event`
- **MDN文档**: [XRSession.squeezeend_event](https://developer.mozilla.org/docs/Web/API/XRSession/squeezeend_event)
- **规范文档**: [查看规范](https://immersive-web.github.io/webxr/#eventdef-xrsession-squeezeend,https://immersive-web.github.io/webxr/#dom-xrsession-onsqueezeend)
- **标签**: `web-features:webxr-device`
- **描述**: `squeezeend` event

## 使用示例

### 基本用法

```javascript
// XRSession.squeezeend_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRSession.squeezeend_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 83 |  |
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

- **支持版本**: 83

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查XRSession.squeezeend_event是否支持
function isXRSessionSqueezeend_eventSupported() {
    return 'squeezeend_event' in xrsession && typeof xrsession.squeezeend_event === 'function';
}

if (isXRSessionSqueezeend_eventSupported()) {
    console.log('XRSession.squeezeend_event 支持');
    // 使用XRSession.squeezeend_event
} else {
    console.log('XRSession.squeezeend_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRSession.squeezeend_event polyfill
if (!xrsession.squeezeend_event) {
    // 在这里添加polyfill实现
    console.log('加载XRSession.squeezeend_event polyfill');
}
```

