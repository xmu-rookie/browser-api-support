# GPUDevice.createBindGroupLayout.storageTexture_access_read-write_read-only API 兼容性数据

## 基本信息

- **API名称**: `GPUDevice.createBindGroupLayout.storageTexture_access_read-write_read-only`
- **规范文档**: [查看规范](https://gpuweb.github.io/gpuweb/wgsl/#memory-access-mode)
- **标签**: `web-features:webgpu`
- **描述**: <code>read-write</code> and <code>read-only</code> <code>storageTexture.access</code>

## 使用示例

### 基本用法

```javascript
// GPUDevice.createBindGroupLayout.storageTexture_access_read-write_read-only 使用示例
// 请查阅MDN文档了解具体用法
console.log('GPUDevice.createBindGroupLayout.storageTexture_access_read-write_read-only API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 124 |  |
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

- **支持版本**: 124

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查GPUDevice.createBindGroupLayout.storageTexture_access_read-write_read-only是否支持
function isGPUDeviceCreateBindGroupLayoutSupported() {
    return 'createBindGroupLayout' in gpudevice && typeof gpudevice.createBindGroupLayout === 'function';
}

if (isGPUDeviceCreateBindGroupLayoutSupported()) {
    console.log('GPUDevice.createBindGroupLayout.storageTexture_access_read-write_read-only 支持');
    // 使用GPUDevice.createBindGroupLayout.storageTexture_access_read-write_read-only
} else {
    console.log('GPUDevice.createBindGroupLayout.storageTexture_access_read-write_read-only 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GPUDevice.createBindGroupLayout.storageTexture_access_read-write_read-only polyfill
if (!gpudevice.createBindGroupLayout) {
    // 在这里添加polyfill实现
    console.log('加载GPUDevice.createBindGroupLayout.storageTexture_access_read-write_read-only polyfill');
}
```

