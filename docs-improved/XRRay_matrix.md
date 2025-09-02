# XRRay.matrix API 兼容性数据

## 基本信息

- **API名称**: `XRRay.matrix`
- **MDN文档**: [XRRay.matrix](https://developer.mozilla.org/docs/Web/API/XRRay/matrix)
- **规范文档**: [查看规范](https://immersive-web.github.io/hit-test/#dom-xrray-matrix)
- **标签**: `web-features:webxr-hit-test`

## 使用示例

### 基本用法

```javascript
// XRRay.matrix 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRRay.matrix API');
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
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 81

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查XRRay.matrix是否支持
function isXRRayMatrixSupported() {
    return 'matrix' in xrray && typeof xrray.matrix === 'function';
}

if (isXRRayMatrixSupported()) {
    console.log('XRRay.matrix 支持');
    // 使用XRRay.matrix
} else {
    console.log('XRRay.matrix 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRRay.matrix polyfill
if (!xrray.matrix) {
    // 在这里添加polyfill实现
    console.log('加载XRRay.matrix polyfill');
}
```

