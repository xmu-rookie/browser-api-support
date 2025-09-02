# XRSystem API 兼容性数据

## 基本信息

- **API名称**: `XRSystem`
- **MDN文档**: [XRSystem](https://developer.mozilla.org/docs/Web/API/XRSystem)
- **规范文档**: [查看规范](https://immersive-web.github.io/webxr/#xrsystem-interface)
- **标签**: `web-features:webxr-device`

## 使用示例

### 基本用法

```javascript
// XRSystem 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRSystem API');
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
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 79

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查XRSystem是否支持
function isXRSystemSupported() {
    return 'XRSystem' in window || typeof XRSystem !== 'undefined';
}

if (isXRSystemSupported()) {
    console.log('XRSystem 支持');
    // 使用XRSystem
} else {
    console.log('XRSystem 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRSystem polyfill
if (!window.XRSystem) {
    // 在这里添加polyfill实现
    console.log('加载XRSystem polyfill');
}
```

