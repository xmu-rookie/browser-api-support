# GPUDevice.createRenderPipeline.vertex_unorm10-10-10-2 API 兼容性数据

## 基本信息

- **API名称**: `GPUDevice.createRenderPipeline.vertex_unorm10-10-10-2`
- **规范文档**: [查看规范](https://gpuweb.github.io/gpuweb/#dom-gpuvertexformat-unorm10-10-10-2)
- **标签**: `web-features:webgpu`
- **描述**: <code>unorm10-10-10-2</code> vertex format

## 使用示例

### 基本用法

```javascript
// GPUDevice.createRenderPipeline.vertex_unorm10-10-10-2 使用示例
// 请查阅MDN文档了解具体用法
console.log('GPUDevice.createRenderPipeline.vertex_unorm10-10-10-2 API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 119 | Currently supported on ChromeOS, macOS, and Windows only. |
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

- **支持版本**: 119
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
// 检查GPUDevice.createRenderPipeline.vertex_unorm10-10-10-2是否支持
function isGPUDeviceCreateRenderPipelineSupported() {
    return 'createRenderPipeline' in gpudevice && typeof gpudevice.createRenderPipeline === 'function';
}

if (isGPUDeviceCreateRenderPipelineSupported()) {
    console.log('GPUDevice.createRenderPipeline.vertex_unorm10-10-10-2 支持');
    // 使用GPUDevice.createRenderPipeline.vertex_unorm10-10-10-2
} else {
    console.log('GPUDevice.createRenderPipeline.vertex_unorm10-10-10-2 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GPUDevice.createRenderPipeline.vertex_unorm10-10-10-2 polyfill
if (!gpudevice.createRenderPipeline) {
    // 在这里添加polyfill实现
    console.log('加载GPUDevice.createRenderPipeline.vertex_unorm10-10-10-2 polyfill');
}
```

