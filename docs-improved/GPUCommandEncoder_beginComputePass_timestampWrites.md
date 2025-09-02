# GPUCommandEncoder.beginComputePass.timestampWrites API 兼容性数据

## 基本信息

- **API名称**: `GPUCommandEncoder.beginComputePass.timestampWrites`
- **规范文档**: [查看规范](https://gpuweb.github.io/gpuweb/#dom-gpucomputepassdescriptor-timestampwrites)
- **标签**: `web-features:webgpu`
- **描述**: `timestampWrites` descriptor property

## 使用示例

### 基本用法

```javascript
// GPUCommandEncoder.beginComputePass.timestampWrites 使用示例
// 请查阅MDN文档了解具体用法
console.log('GPUCommandEncoder.beginComputePass.timestampWrites API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 121 | Currently supported on ChromeOS, macOS, and Windows only. |
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

- **支持版本**: 121
- **注意事项**:
  - Currently supported on ChromeOS, macOS, and Windows only.

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
// 检查GPUCommandEncoder.beginComputePass.timestampWrites是否支持
function isGPUCommandEncoderBeginComputePassSupported() {
    return 'beginComputePass' in gpucommandencoder && typeof gpucommandencoder.beginComputePass === 'function';
}

if (isGPUCommandEncoderBeginComputePassSupported()) {
    console.log('GPUCommandEncoder.beginComputePass.timestampWrites 支持');
    // 使用GPUCommandEncoder.beginComputePass.timestampWrites
} else {
    console.log('GPUCommandEncoder.beginComputePass.timestampWrites 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GPUCommandEncoder.beginComputePass.timestampWrites polyfill
if (!gpucommandencoder.beginComputePass) {
    // 在这里添加polyfill实现
    console.log('加载GPUCommandEncoder.beginComputePass.timestampWrites polyfill');
}
```

