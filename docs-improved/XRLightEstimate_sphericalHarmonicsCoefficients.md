# XRLightEstimate.sphericalHarmonicsCoefficients API 兼容性数据

## 基本信息

- **API名称**: `XRLightEstimate.sphericalHarmonicsCoefficients`
- **MDN文档**: [XRLightEstimate.sphericalHarmonicsCoefficients](https://developer.mozilla.org/docs/Web/API/XRLightEstimate/sphericalHarmonicsCoefficients)
- **规范文档**: [查看规范](https://immersive-web.github.io/lighting-estimation/#dom-xrlightestimate-sphericalharmonicscoefficients)
- **标签**: `web-features:webxr-lighting-estimation`

## 使用示例

### 基本用法

```javascript
// XRLightEstimate.sphericalHarmonicsCoefficients 使用示例
// 请查阅MDN文档了解具体用法
console.log('XRLightEstimate.sphericalHarmonicsCoefficients API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 90 |  |
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

- **支持版本**: 90

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查XRLightEstimate.sphericalHarmonicsCoefficients是否支持
function isXRLightEstimateSphericalHarmonicsCoefficientsSupported() {
    return 'sphericalHarmonicsCoefficients' in xrlightestimate && typeof xrlightestimate.sphericalHarmonicsCoefficients === 'function';
}

if (isXRLightEstimateSphericalHarmonicsCoefficientsSupported()) {
    console.log('XRLightEstimate.sphericalHarmonicsCoefficients 支持');
    // 使用XRLightEstimate.sphericalHarmonicsCoefficients
} else {
    console.log('XRLightEstimate.sphericalHarmonicsCoefficients 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XRLightEstimate.sphericalHarmonicsCoefficients polyfill
if (!xrlightestimate.sphericalHarmonicsCoefficients) {
    // 在这里添加polyfill实现
    console.log('加载XRLightEstimate.sphericalHarmonicsCoefficients polyfill');
}
```

