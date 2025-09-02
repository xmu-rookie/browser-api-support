# GPUQueue.submit.validates_command_buffer_uniqueness API 兼容性数据

## 基本信息

- **API名称**: `GPUQueue.submit.validates_command_buffer_uniqueness`
- **标签**: `web-features:webgpu`
- **描述**: Validates that submitted command buffers are unique.

## 使用示例

### 基本用法

```javascript
// GPUQueue.submit.validates_command_buffer_uniqueness 使用示例
// 请查阅MDN文档了解具体用法
console.log('GPUQueue.submit.validates_command_buffer_uniqueness API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 126 | Currently supported on ChromeOS, macOS, and Windows only. |
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

- **支持版本**: 126
- **注意事项**:
  - Currently supported on ChromeOS, macOS, and Windows only.

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查GPUQueue.submit.validates_command_buffer_uniqueness是否支持
function isGPUQueueSubmitSupported() {
    return 'submit' in gpuqueue && typeof gpuqueue.submit === 'function';
}

if (isGPUQueueSubmitSupported()) {
    console.log('GPUQueue.submit.validates_command_buffer_uniqueness 支持');
    // 使用GPUQueue.submit.validates_command_buffer_uniqueness
} else {
    console.log('GPUQueue.submit.validates_command_buffer_uniqueness 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GPUQueue.submit.validates_command_buffer_uniqueness polyfill
if (!gpuqueue.submit) {
    // 在这里添加polyfill实现
    console.log('加载GPUQueue.submit.validates_command_buffer_uniqueness polyfill');
}
```

