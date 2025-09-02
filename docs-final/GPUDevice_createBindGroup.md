# GPUDevice.createBindGroup API 兼容性数据

## 基本信息

- **API名称**: `GPUDevice.createBindGroup`
- **MDN文档**: [GPUDevice.createBindGroup](https://developer.mozilla.org/docs/Web/API/GPUDevice/createBindGroup)
- **规范文档**: [查看规范](https://gpuweb.github.io/gpuweb/#dom-gpudevice-createbindgroup)
- **标签**: `web-features:webgpu`

## 使用示例

### 基本用法

```javascript
// GPUDevice.createBindGroup 使用示例
// 请查阅MDN文档了解具体用法
console.log('GPUDevice.createBindGroup API');
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

## 相关子API

该API包含以下子功能：

- **descriptor_entries_option_accepts_GPUTextureView_resource**: Bind `GPUTextureView` (2D, single subresource) in place of a `GPUExternalTexture`.

