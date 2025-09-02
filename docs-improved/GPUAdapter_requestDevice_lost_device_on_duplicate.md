# GPUAdapter.requestDevice.lost_device_on_duplicate API 兼容性数据

## 基本信息

- **API名称**: `GPUAdapter.requestDevice.lost_device_on_duplicate`
- **标签**: `web-features:webgpu`
- **描述**: Lost `GPUDevice` returned on duplicate calls.

## 使用示例

### 基本用法

```javascript
// GPUAdapter.requestDevice.lost_device_on_duplicate 使用示例
// 请查阅MDN文档了解具体用法
console.log('GPUAdapter.requestDevice.lost_device_on_duplicate API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 116 |  |
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

- **支持版本**: 116

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
// 检查GPUAdapter.requestDevice.lost_device_on_duplicate是否支持
function isGPUAdapterRequestDeviceSupported() {
    return 'requestDevice' in gpuadapter && typeof gpuadapter.requestDevice === 'function';
}

if (isGPUAdapterRequestDeviceSupported()) {
    console.log('GPUAdapter.requestDevice.lost_device_on_duplicate 支持');
    // 使用GPUAdapter.requestDevice.lost_device_on_duplicate
} else {
    console.log('GPUAdapter.requestDevice.lost_device_on_duplicate 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GPUAdapter.requestDevice.lost_device_on_duplicate polyfill
if (!gpuadapter.requestDevice) {
    // 在这里添加polyfill实现
    console.log('加载GPUAdapter.requestDevice.lost_device_on_duplicate polyfill');
}
```

