# XRInputSource.gamepad API 兼容性数据

## 基本信息

- **API名称**: `XRInputSource.gamepad`
- **MDN文档**: [XRInputSource.gamepad](https://developer.mozilla.org/docs/Web/API/XRInputSource/gamepad)
- **规范文档**: [查看规范](https://immersive-web.github.io/webxr-gamepads-module/#dom-xrinputsource-gamepad)
- **标签**: `web-features:webxr-gamepads`

## 使用示例

### 基本用法

```javascript
// XRInputSource.gamepad 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRInputSource.gamepad API');
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
// 检查XRInputSource.gamepad是否支持
function isXRInputSourceGamepadSupported() {
    return 'gamepad' in xrinputsource && typeof xrinputsource.gamepad === 'function';
}

if (isXRInputSourceGamepadSupported()) {
    console.log('XRInputSource.gamepad 支持');
    // 使用XRInputSource.gamepad
} else {
    console.log('XRInputSource.gamepad 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRInputSource.gamepad polyfill
if (!xrinputsource.gamepad) {
    // 在这里添加polyfill实现
    console.log('加载XRInputSource.gamepad polyfill');
}
```

