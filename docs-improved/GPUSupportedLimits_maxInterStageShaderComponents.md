# GPUSupportedLimits.maxInterStageShaderComponents API 兼容性数据

## 基本信息

- **API名称**: `GPUSupportedLimits.maxInterStageShaderComponents`
- **MDN文档**: [GPUSupportedLimits.maxInterStageShaderComponents](https://developer.mozilla.org/docs/Web/API/GPUSupportedLimits#instance_properties)
- **标签**: `web-features:webgpu`

## 使用示例

### 基本用法

```javascript
// GPUSupportedLimits.maxInterStageShaderComponents 使用示例
// 请查阅MDN文档了解具体用法
console.log('GPUSupportedLimits.maxInterStageShaderComponents API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 113 |  |
| Chrome Android | 121 |  |
| Deno | 1.39 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 26 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 113
- **移除版本**: 135

### Chrome Android

- **支持版本**: 121

### Deno

- **支持版本**: 1.39
- **需要标志**: 
  - --unstable-webgpu: true
- **支持版本**: 1.8
- **移除版本**: 1.32

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 26

## 兼容性检查代码

### 特性检测

```javascript
// 检查GPUSupportedLimits.maxInterStageShaderComponents是否支持
function isGPUSupportedLimitsMaxInterStageShaderComponentsSupported() {
    return 'maxInterStageShaderComponents' in gpusupportedlimits && typeof gpusupportedlimits.maxInterStageShaderComponents === 'function';
}

if (isGPUSupportedLimitsMaxInterStageShaderComponentsSupported()) {
    console.log('GPUSupportedLimits.maxInterStageShaderComponents 支持');
    // 使用GPUSupportedLimits.maxInterStageShaderComponents
} else {
    console.log('GPUSupportedLimits.maxInterStageShaderComponents 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GPUSupportedLimits.maxInterStageShaderComponents polyfill
if (!gpusupportedlimits.maxInterStageShaderComponents) {
    // 在这里添加polyfill实现
    console.log('加载GPUSupportedLimits.maxInterStageShaderComponents polyfill');
}
```

