# XRSessionEvent.XRSessionEvent API 兼容性数据

## 基本信息

- **API名称**: `XRSessionEvent.XRSessionEvent`
- **MDN文档**: [XRSessionEvent.XRSessionEvent](https://developer.mozilla.org/docs/Web/API/XRSessionEvent/XRSessionEvent)
- **规范文档**: [查看规范](https://immersive-web.github.io/webxr/#dom-xrsessionevent-xrsessionevent)
- **标签**: `web-features:webxr-device`
- **描述**: `XRSessionEvent()` constructor

## 使用示例

### 基本用法

```javascript
// XRSessionEvent.XRSessionEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRSessionEvent.XRSessionEvent API');
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
// 检查XRSessionEvent.XRSessionEvent是否支持
function isXRSessionEventXRSessionEventSupported() {
    return 'XRSessionEvent' in xrsessionevent && typeof xrsessionevent.XRSessionEvent === 'function';
}

if (isXRSessionEventXRSessionEventSupported()) {
    console.log('XRSessionEvent.XRSessionEvent 支持');
    // 使用XRSessionEvent.XRSessionEvent
} else {
    console.log('XRSessionEvent.XRSessionEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRSessionEvent.XRSessionEvent polyfill
if (!xrsessionevent.XRSessionEvent) {
    // 在这里添加polyfill实现
    console.log('加载XRSessionEvent.XRSessionEvent polyfill');
}
```

