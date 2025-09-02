# GPUDevice.createRenderBundleEncoder API 兼容性数据

## 基本信息

- **API名称**: `GPUDevice.createRenderBundleEncoder`
- **MDN文档**: [GPUDevice.createRenderBundleEncoder](https://developer.mozilla.org/docs/Web/API/GPUDevice/createRenderBundleEncoder)
- **规范文档**: [查看规范](https://gpuweb.github.io/gpuweb/#dom-gpudevice-createrenderbundleencoder)
- **标签**: `web-features:webgpu`

## 使用示例

### 基本用法

```javascript
// GPUDevice.createRenderBundleEncoder 使用示例
// 请查阅MDN文档了解具体用法
console.log('GPUDevice.createRenderBundleEncoder API');
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
// 检查GPUDevice.createRenderBundleEncoder是否支持
function isGPUDeviceCreateRenderBundleEncoderSupported() {
    return 'createRenderBundleEncoder' in gpudevice && typeof gpudevice.createRenderBundleEncoder === 'function';
}

if (isGPUDeviceCreateRenderBundleEncoderSupported()) {
    console.log('GPUDevice.createRenderBundleEncoder 支持');
    // 使用GPUDevice.createRenderBundleEncoder
} else {
    console.log('GPUDevice.createRenderBundleEncoder 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GPUDevice.createRenderBundleEncoder polyfill
if (!gpudevice.createRenderBundleEncoder) {
    // 在这里添加polyfill实现
    console.log('加载GPUDevice.createRenderBundleEncoder polyfill');
}
```

