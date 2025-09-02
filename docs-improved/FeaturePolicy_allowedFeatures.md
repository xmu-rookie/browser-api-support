# FeaturePolicy.allowedFeatures API 兼容性数据

## 基本信息

- **API名称**: `FeaturePolicy.allowedFeatures`
- **MDN文档**: [FeaturePolicy.allowedFeatures](https://developer.mozilla.org/docs/Web/API/FeaturePolicy/allowedFeatures)

## 使用示例

### 基本用法

```javascript
// FeaturePolicy.allowedFeatures 使用示例
// 请查阅MDN文档了解具体用法
console.log('FeaturePolicy.allowedFeatures API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 74 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 65 |  |
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

- **支持版本**: 74

### Firefox

- **支持版本**: 65
- **需要标志**: 
  - dom.security.featurePolicy.webidl.enabled: true

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查FeaturePolicy.allowedFeatures是否支持
function isFeaturePolicyAllowedFeaturesSupported() {
    return 'allowedFeatures' in featurepolicy && typeof featurepolicy.allowedFeatures === 'function';
}

if (isFeaturePolicyAllowedFeaturesSupported()) {
    console.log('FeaturePolicy.allowedFeatures 支持');
    // 使用FeaturePolicy.allowedFeatures
} else {
    console.log('FeaturePolicy.allowedFeatures 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FeaturePolicy.allowedFeatures polyfill
if (!featurepolicy.allowedFeatures) {
    // 在这里添加polyfill实现
    console.log('加载FeaturePolicy.allowedFeatures polyfill');
}
```

