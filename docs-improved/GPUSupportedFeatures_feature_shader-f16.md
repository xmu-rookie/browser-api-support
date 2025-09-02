# GPUSupportedFeatures.feature_shader-f16 API 兼容性数据

## 基本信息

- **API名称**: `GPUSupportedFeatures.feature_shader-f16`
- **规范文档**: [查看规范](https://gpuweb.github.io/gpuweb/#shader-f16)
- **标签**: `web-features:webgpu`
- **描述**: `shader-f16` feature

## 使用示例

### 基本用法

```javascript
// GPUSupportedFeatures.feature_shader-f16 使用示例
// 请查阅MDN文档了解具体用法
console.log('GPUSupportedFeatures.feature_shader-f16 API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 120 |  |
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

- **支持版本**: 120

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
// 检查GPUSupportedFeatures.feature_shader-f16是否支持
function isGPUSupportedFeaturesFeature_shader-f16Supported() {
    return 'feature_shader-f16' in gpusupportedfeatures && typeof gpusupportedfeatures.feature_shader-f16 === 'function';
}

if (isGPUSupportedFeaturesFeature_shader-f16Supported()) {
    console.log('GPUSupportedFeatures.feature_shader-f16 支持');
    // 使用GPUSupportedFeatures.feature_shader-f16
} else {
    console.log('GPUSupportedFeatures.feature_shader-f16 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GPUSupportedFeatures.feature_shader-f16 polyfill
if (!gpusupportedfeatures.feature_shader-f16) {
    // 在这里添加polyfill实现
    console.log('加载GPUSupportedFeatures.feature_shader-f16 polyfill');
}
```

