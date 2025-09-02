# GPUSupportedFeatures.feature_subgroups API 兼容性数据

## 基本信息

- **API名称**: `GPUSupportedFeatures.feature_subgroups`
- **规范文档**: [查看规范](https://gpuweb.github.io/gpuweb/#subgroups)
- **标签**: `web-features:webgpu`
- **描述**: `subgroups` feature

## 使用示例

### 基本用法

```javascript
// GPUSupportedFeatures.feature_subgroups 使用示例
// 请查阅MDN文档了解具体用法
console.log('GPUSupportedFeatures.feature_subgroups API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 134 |  |
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

- **支持版本**: 134

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查GPUSupportedFeatures.feature_subgroups是否支持
function isGPUSupportedFeaturesFeature_subgroupsSupported() {
    return 'feature_subgroups' in gpusupportedfeatures && typeof gpusupportedfeatures.feature_subgroups === 'function';
}

if (isGPUSupportedFeaturesFeature_subgroupsSupported()) {
    console.log('GPUSupportedFeatures.feature_subgroups 支持');
    // 使用GPUSupportedFeatures.feature_subgroups
} else {
    console.log('GPUSupportedFeatures.feature_subgroups 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GPUSupportedFeatures.feature_subgroups polyfill
if (!gpusupportedfeatures.feature_subgroups) {
    // 在这里添加polyfill实现
    console.log('加载GPUSupportedFeatures.feature_subgroups polyfill');
}
```

