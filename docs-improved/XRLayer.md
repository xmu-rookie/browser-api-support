# XRLayer API 兼容性数据

## 基本信息

- **API名称**: `XRLayer`
- **MDN文档**: [XRLayer](https://developer.mozilla.org/docs/Web/API/XRLayer)
- **规范文档**: [查看规范](https://immersive-web.github.io/webxr/#xrlayer-interface)
- **标签**: `web-features:webxr-device`

## 使用示例

### 基本用法

```javascript
// XRLayer 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRLayer API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 84 |  |
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
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 84

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查XRLayer是否支持
function isXRLayerSupported() {
    return 'XRLayer' in window || typeof XRLayer !== 'undefined';
}

if (isXRLayerSupported()) {
    console.log('XRLayer 支持');
    // 使用XRLayer
} else {
    console.log('XRLayer 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRLayer polyfill
if (!window.XRLayer) {
    // 在这里添加polyfill实现
    console.log('加载XRLayer polyfill');
}
```

