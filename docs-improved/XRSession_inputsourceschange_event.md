# XRSession.inputsourceschange_event API 兼容性数据

## 基本信息

- **API名称**: `XRSession.inputsourceschange_event`
- **MDN文档**: [XRSession.inputsourceschange_event](https://developer.mozilla.org/docs/Web/API/XRSession/inputsourceschange_event)
- **规范文档**: [查看规范](https://immersive-web.github.io/webxr/#eventdef-xrsession-inputsourceschange,https://immersive-web.github.io/webxr/#dom-xrsession-oninputsourceschange)
- **标签**: `web-features:webxr-device`
- **描述**: `inputsourceschange` event

## 使用示例

### 基本用法

```javascript
// XRSession.inputsourceschange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRSession.inputsourceschange_event API');
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
// 检查XRSession.inputsourceschange_event是否支持
function isXRSessionInputsourceschange_eventSupported() {
    return 'inputsourceschange_event' in xrsession && typeof xrsession.inputsourceschange_event === 'function';
}

if (isXRSessionInputsourceschange_eventSupported()) {
    console.log('XRSession.inputsourceschange_event 支持');
    // 使用XRSession.inputsourceschange_event
} else {
    console.log('XRSession.inputsourceschange_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRSession.inputsourceschange_event polyfill
if (!xrsession.inputsourceschange_event) {
    // 在这里添加polyfill实现
    console.log('加载XRSession.inputsourceschange_event polyfill');
}
```

