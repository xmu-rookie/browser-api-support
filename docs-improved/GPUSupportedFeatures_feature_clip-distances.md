# GPUSupportedFeatures.feature_clip-distances API 兼容性数据

## 基本信息

- **API名称**: `GPUSupportedFeatures.feature_clip-distances`
- **规范文档**: [查看规范](https://gpuweb.github.io/gpuweb/#dom-gpufeaturename-clip-distances)
- **标签**: `web-features:webgpu`
- **描述**: `clip-distances` feature

## 使用示例

### 基本用法

```javascript
// GPUSupportedFeatures.feature_clip-distances 使用示例
// 请查阅MDN文档了解具体用法
console.log('GPUSupportedFeatures.feature_clip-distances API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 131 |  |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
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

- **支持版本**: 131

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查GPUSupportedFeatures.feature_clip-distances是否支持
function isGPUSupportedFeaturesFeature_clip-distancesSupported() {
    return 'feature_clip-distances' in gpusupportedfeatures && typeof gpusupportedfeatures.feature_clip-distances === 'function';
}

if (isGPUSupportedFeaturesFeature_clip-distancesSupported()) {
    console.log('GPUSupportedFeatures.feature_clip-distances 支持');
    // 使用GPUSupportedFeatures.feature_clip-distances
} else {
    console.log('GPUSupportedFeatures.feature_clip-distances 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GPUSupportedFeatures.feature_clip-distances polyfill
if (!gpusupportedfeatures.feature_clip-distances) {
    // 在这里添加polyfill实现
    console.log('加载GPUSupportedFeatures.feature_clip-distances polyfill');
}
```

