# GPUAdapter.requestDevice.undefined_limits API 兼容性数据

## 基本信息

- **API名称**: `GPUAdapter.requestDevice.undefined_limits`
- **标签**: `web-features:webgpu`
- **描述**: Request unknown limits with `undefined` value

## 使用示例

### 基本用法

```javascript
// GPUAdapter.requestDevice.undefined_limits 使用示例
// 请查阅MDN文档了解具体用法
console.log('GPUAdapter.requestDevice.undefined_limits API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 133 | Currently supported on ChromeOS, macOS, and Windows only. |
| Chrome Android | 133 |  |
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

- **支持版本**: 133
- **注意事项**:
  - Currently supported on ChromeOS, macOS, and Windows only.

### Chrome Android

- **支持版本**: 133

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查GPUAdapter.requestDevice.undefined_limits是否支持
function isGPUAdapterRequestDeviceSupported() {
    return 'requestDevice' in gpuadapter && typeof gpuadapter.requestDevice === 'function';
}

if (isGPUAdapterRequestDeviceSupported()) {
    console.log('GPUAdapter.requestDevice.undefined_limits 支持');
    // 使用GPUAdapter.requestDevice.undefined_limits
} else {
    console.log('GPUAdapter.requestDevice.undefined_limits 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GPUAdapter.requestDevice.undefined_limits polyfill
if (!gpuadapter.requestDevice) {
    // 在这里添加polyfill实现
    console.log('加载GPUAdapter.requestDevice.undefined_limits polyfill');
}
```

