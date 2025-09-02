# GPUSupportedFeatures.feature_core-features-and-limits API 兼容性数据

## 基本信息

- **API名称**: `GPUSupportedFeatures.feature_core-features-and-limits`
- **规范文档**: [查看规范](https://gpuweb.github.io/gpuweb/#core-features-and-limits)
- **标签**: `web-features:webgpu`
- **描述**: `core-features-and-limits` feature

## 使用示例

### 基本用法

```javascript
// GPUSupportedFeatures.feature_core-features-and-limits 使用示例
// 请查阅MDN文档了解具体用法
console.log('GPUSupportedFeatures.feature_core-features-and-limits API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 139 | Currently available on all adapters and enabled automatically on all devices even if not requested. |
| Chrome Android | 同主版本 |  |
| Deno | 不支持 |  |
| Edge | 同主版本 |  |
| Firefox | 141 | Currently supported on Windows only, in all contexts except for service workers. |
| Firefox Android | 不支持 |  |
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

- **支持版本**: 139
- **注意事项**:
  - Currently available on all adapters and enabled automatically on all devices even if not requested.

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 141
- **部分实现**: 是
- **注意事项**:
  - Currently supported on Windows only, in all contexts except for service workers.

### Firefox Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查GPUSupportedFeatures.feature_core-features-and-limits是否支持
function isGPUSupportedFeaturesFeature_core-features-and-limitsSupported() {
    return 'feature_core-features-and-limits' in gpusupportedfeatures && typeof gpusupportedfeatures.feature_core-features-and-limits === 'function';
}

if (isGPUSupportedFeaturesFeature_core-features-and-limitsSupported()) {
    console.log('GPUSupportedFeatures.feature_core-features-and-limits 支持');
    // 使用GPUSupportedFeatures.feature_core-features-and-limits
} else {
    console.log('GPUSupportedFeatures.feature_core-features-and-limits 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GPUSupportedFeatures.feature_core-features-and-limits polyfill
if (!gpusupportedfeatures.feature_core-features-and-limits) {
    // 在这里添加polyfill实现
    console.log('加载GPUSupportedFeatures.feature_core-features-and-limits polyfill');
}
```

