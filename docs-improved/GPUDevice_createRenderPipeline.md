# GPUDevice.createRenderPipeline API 兼容性数据

## 基本信息

- **API名称**: `GPUDevice.createRenderPipeline`
- **MDN文档**: [GPUDevice.createRenderPipeline](https://developer.mozilla.org/docs/Web/API/GPUDevice/createRenderPipeline)
- **规范文档**: [查看规范](https://gpuweb.github.io/gpuweb/#dom-gpudevice-createrenderpipeline)
- **标签**: `web-features:webgpu`

## 使用示例

### 基本用法

```javascript
// GPUDevice.createRenderPipeline 使用示例
// 请查阅MDN文档了解具体用法
console.log('GPUDevice.createRenderPipeline API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 113 | Currently supported on ChromeOS, macOS, and Windows only. |
| Chrome Android | 121 |  |
| Deno | 1.39 |  |
| Edge | 同主版本 |  |
| Firefox | 141 | Currently supported on Windows only, in all contexts except for service workers. |
| Firefox Android | 不支持 |  |
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
- **注意事项**:
  - Currently supported on ChromeOS, macOS, and Windows only.

### Chrome Android

- **支持版本**: 121

### Deno

- **支持版本**: 1.39
- **需要标志**: 
  - --unstable-webgpu: true
- **支持版本**: 1.8
- **移除版本**: 1.32

### Firefox

- **支持版本**: 141
- **部分实现**: 是
- **注意事项**:
  - Currently supported on Windows only, in all contexts except for service workers.

### Firefox Android

- **支持版本**: 不支持

### Safari

- **支持版本**: 26

## 兼容性检查代码

### 特性检测

```javascript
// 检查GPUDevice.createRenderPipeline是否支持
function isGPUDeviceCreateRenderPipelineSupported() {
    return 'createRenderPipeline' in gpudevice && typeof gpudevice.createRenderPipeline === 'function';
}

if (isGPUDeviceCreateRenderPipelineSupported()) {
    console.log('GPUDevice.createRenderPipeline 支持');
    // 使用GPUDevice.createRenderPipeline
} else {
    console.log('GPUDevice.createRenderPipeline 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GPUDevice.createRenderPipeline polyfill
if (!gpudevice.createRenderPipeline) {
    // 在这里添加polyfill实现
    console.log('加载GPUDevice.createRenderPipeline polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **dual-source-blending**: Dual-source blending: `src1`, `one-minus-src1`, `src1-alpha`, and `one-minus-src1-alpha` blend factors.
- **optional_depthcompare_depthwriteenabled**: `depthCompare` and `depthWriteEnabled` properties are optional when not needed (for example, formats without depth).
- **optional_entryPoint**: `entryPoint` properties are optional for determined default fragment and vertex shader entry points.
- **texture_rgb10a2uint**: <code>rgb10a2uint</code> texture format
- **validates_depth_bias_for_line_and_point_topologies**: Validates that `depthBias`, `depthBiasSlopeScale`, and `depthBiasClamp` must be `0` for line and point topologies.
- **vertex_unorm10-10-10-2**: <code>unorm10-10-10-2</code> vertex format

