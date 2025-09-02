# XREquirectLayer.radius API 兼容性数据

## 基本信息

- **API名称**: `XREquirectLayer.radius`
- **MDN文档**: [XREquirectLayer.radius](https://developer.mozilla.org/docs/Web/API/XREquirectLayer/radius)
- **规范文档**: [查看规范](https://immersive-web.github.io/layers/#dom-xrequirectlayer-radius)
- **标签**: `web-features:webxr-layers`

## 使用示例

### 基本用法

```javascript
// XREquirectLayer.radius 使用示例
// 请查阅MDN文档了解具体用法
console.log('XREquirectLayer.radius API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 16.1 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Oculus

- **支持版本**: 16.1

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查XREquirectLayer.radius是否支持
function isXREquirectLayerRadiusSupported() {
    return 'radius' in xrequirectlayer && typeof xrequirectlayer.radius === 'function';
}

if (isXREquirectLayerRadiusSupported()) {
    console.log('XREquirectLayer.radius 支持');
    // 使用XREquirectLayer.radius
} else {
    console.log('XREquirectLayer.radius 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XREquirectLayer.radius polyfill
if (!xrequirectlayer.radius) {
    // 在这里添加polyfill实现
    console.log('加载XREquirectLayer.radius polyfill');
}
```

