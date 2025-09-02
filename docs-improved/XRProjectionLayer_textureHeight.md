# XRProjectionLayer.textureHeight API 兼容性数据

## 基本信息

- **API名称**: `XRProjectionLayer.textureHeight`
- **MDN文档**: [XRProjectionLayer.textureHeight](https://developer.mozilla.org/docs/Web/API/XRProjectionLayer/textureHeight)
- **规范文档**: [查看规范](https://immersive-web.github.io/layers/#dom-xrprojectionlayer-textureheight)
- **标签**: `web-features:webxr-layers`

## 使用示例

### 基本用法

```javascript
// XRProjectionLayer.textureHeight 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRProjectionLayer.textureHeight API');
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
// 检查XRProjectionLayer.textureHeight是否支持
function isXRProjectionLayerTextureHeightSupported() {
    return 'textureHeight' in xrprojectionlayer && typeof xrprojectionlayer.textureHeight === 'function';
}

if (isXRProjectionLayerTextureHeightSupported()) {
    console.log('XRProjectionLayer.textureHeight 支持');
    // 使用XRProjectionLayer.textureHeight
} else {
    console.log('XRProjectionLayer.textureHeight 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRProjectionLayer.textureHeight polyfill
if (!xrprojectionlayer.textureHeight) {
    // 在这里添加polyfill实现
    console.log('加载XRProjectionLayer.textureHeight polyfill');
}
```

