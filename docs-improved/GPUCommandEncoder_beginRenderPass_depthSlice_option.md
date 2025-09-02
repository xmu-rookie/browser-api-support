# GPUCommandEncoder.beginRenderPass.depthSlice_option API 兼容性数据

## 基本信息

- **API名称**: `GPUCommandEncoder.beginRenderPass.depthSlice_option`
- **规范文档**: [查看规范](https://gpuweb.github.io/gpuweb/#dom-gpurenderpasscolorattachment-depthslice)
- **标签**: `web-features:webgpu`
- **描述**: color attachment `depthSlice` option

## 使用示例

### 基本用法

```javascript
// GPUCommandEncoder.beginRenderPass.depthSlice_option 使用示例
// 请查阅MDN文档了解具体用法
console.log('GPUCommandEncoder.beginRenderPass.depthSlice_option API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 125 | Currently supported on ChromeOS, macOS, and Windows only. |
| Chrome Android | 125 |  |
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

- **支持版本**: 125
- **注意事项**:
  - Currently supported on ChromeOS, macOS, and Windows only.

### Chrome Android

- **支持版本**: 125

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查GPUCommandEncoder.beginRenderPass.depthSlice_option是否支持
function isGPUCommandEncoderBeginRenderPassSupported() {
    return 'beginRenderPass' in gpucommandencoder && typeof gpucommandencoder.beginRenderPass === 'function';
}

if (isGPUCommandEncoderBeginRenderPassSupported()) {
    console.log('GPUCommandEncoder.beginRenderPass.depthSlice_option 支持');
    // 使用GPUCommandEncoder.beginRenderPass.depthSlice_option
} else {
    console.log('GPUCommandEncoder.beginRenderPass.depthSlice_option 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GPUCommandEncoder.beginRenderPass.depthSlice_option polyfill
if (!gpucommandencoder.beginRenderPass) {
    // 在这里添加polyfill实现
    console.log('加载GPUCommandEncoder.beginRenderPass.depthSlice_option polyfill');
}
```

