# GPUDevice.createRenderPipeline.optional_depthcompare_depthwriteenabled API 兼容性数据

## 基本信息

- **API名称**: `GPUDevice.createRenderPipeline.optional_depthcompare_depthwriteenabled`
- **标签**: `web-features:webgpu`
- **描述**: `depthCompare` and `depthWriteEnabled` properties are optional when not needed (for example, formats without depth).

## 使用示例

### 基本用法

```javascript
// GPUDevice.createRenderPipeline.optional_depthcompare_depthwriteenabled 使用示例
// 请查阅MDN文档了解具体用法
console.log('GPUDevice.createRenderPipeline.optional_depthcompare_depthwriteenabled API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 120 | Currently supported on ChromeOS, macOS, and Windows only. |
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

- **支持版本**: 120
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
// 检查GPUDevice.createRenderPipeline.optional_depthcompare_depthwriteenabled是否支持
function isGPUDeviceCreateRenderPipelineSupported() {
    return 'createRenderPipeline' in gpudevice && typeof gpudevice.createRenderPipeline === 'function';
}

if (isGPUDeviceCreateRenderPipelineSupported()) {
    console.log('GPUDevice.createRenderPipeline.optional_depthcompare_depthwriteenabled 支持');
    // 使用GPUDevice.createRenderPipeline.optional_depthcompare_depthwriteenabled
} else {
    console.log('GPUDevice.createRenderPipeline.optional_depthcompare_depthwriteenabled 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GPUDevice.createRenderPipeline.optional_depthcompare_depthwriteenabled polyfill
if (!gpudevice.createRenderPipeline) {
    // 在这里添加polyfill实现
    console.log('加载GPUDevice.createRenderPipeline.optional_depthcompare_depthwriteenabled polyfill');
}
```

