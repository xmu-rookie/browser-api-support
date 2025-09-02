# GPUDevice.createBindGroup.descriptor_entries_option_accepts_GPUTextureView_resource API 兼容性数据

## 基本信息

- **API名称**: `GPUDevice.createBindGroup.descriptor_entries_option_accepts_GPUTextureView_resource`
- **标签**: `web-features:webgpu`
- **描述**: Bind `GPUTextureView` (2D, single subresource) in place of a `GPUExternalTexture`.

## 使用示例

### 基本用法

```javascript
// GPUDevice.createBindGroup.descriptor_entries_option_accepts_GPUTextureView_resource 使用示例
// 请查阅MDN文档了解具体用法
console.log('GPUDevice.createBindGroup.descriptor_entries_option_accepts_GPUTextureView_resource API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 137 | Currently supported on ChromeOS, macOS, and Windows only. |
| Chrome Android | 137 |  |
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

- **支持版本**: 137
- **注意事项**:
  - Currently supported on ChromeOS, macOS, and Windows only.

### Chrome Android

- **支持版本**: 137

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查GPUDevice.createBindGroup.descriptor_entries_option_accepts_GPUTextureView_resource是否支持
function isGPUDeviceCreateBindGroupSupported() {
    return 'createBindGroup' in gpudevice && typeof gpudevice.createBindGroup === 'function';
}

if (isGPUDeviceCreateBindGroupSupported()) {
    console.log('GPUDevice.createBindGroup.descriptor_entries_option_accepts_GPUTextureView_resource 支持');
    // 使用GPUDevice.createBindGroup.descriptor_entries_option_accepts_GPUTextureView_resource
} else {
    console.log('GPUDevice.createBindGroup.descriptor_entries_option_accepts_GPUTextureView_resource 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GPUDevice.createBindGroup.descriptor_entries_option_accepts_GPUTextureView_resource polyfill
if (!gpudevice.createBindGroup) {
    // 在这里添加polyfill实现
    console.log('加载GPUDevice.createBindGroup.descriptor_entries_option_accepts_GPUTextureView_resource polyfill');
}
```

