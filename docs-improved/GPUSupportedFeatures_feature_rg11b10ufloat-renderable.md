# GPUSupportedFeatures.feature_rg11b10ufloat-renderable API 兼容性数据

## 基本信息

- **API名称**: `GPUSupportedFeatures.feature_rg11b10ufloat-renderable`
- **规范文档**: [查看规范](https://gpuweb.github.io/gpuweb/#rg11b10ufloat-renderable)
- **标签**: `web-features:webgpu`
- **描述**: `rg11b10ufloat-renderable` feature

## 使用示例

### 基本用法

```javascript
// GPUSupportedFeatures.feature_rg11b10ufloat-renderable 使用示例
// 请查阅MDN文档了解具体用法
console.log('GPUSupportedFeatures.feature_rg11b10ufloat-renderable API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 113 |  |
| Chrome Android | 121 |  |
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

- **支持版本**: 113

### Chrome Android

- **支持版本**: 121

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查GPUSupportedFeatures.feature_rg11b10ufloat-renderable是否支持
function isGPUSupportedFeaturesFeature_rg11b10ufloat-renderableSupported() {
    return 'feature_rg11b10ufloat-renderable' in gpusupportedfeatures && typeof gpusupportedfeatures.feature_rg11b10ufloat-renderable === 'function';
}

if (isGPUSupportedFeaturesFeature_rg11b10ufloat-renderableSupported()) {
    console.log('GPUSupportedFeatures.feature_rg11b10ufloat-renderable 支持');
    // 使用GPUSupportedFeatures.feature_rg11b10ufloat-renderable
} else {
    console.log('GPUSupportedFeatures.feature_rg11b10ufloat-renderable 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GPUSupportedFeatures.feature_rg11b10ufloat-renderable polyfill
if (!gpusupportedfeatures.feature_rg11b10ufloat-renderable) {
    // 在这里添加polyfill实现
    console.log('加载GPUSupportedFeatures.feature_rg11b10ufloat-renderable polyfill');
}
```

