# GPUQueue.onSubmittedWorkDone API 兼容性数据

## 基本信息

- **API名称**: `GPUQueue.onSubmittedWorkDone`
- **MDN文档**: [GPUQueue.onSubmittedWorkDone](https://developer.mozilla.org/docs/Web/API/GPUQueue/onSubmittedWorkDone)
- **规范文档**: [查看规范](https://gpuweb.github.io/gpuweb/#dom-gpuqueue-onsubmittedworkdone)
- **标签**: `web-features:webgpu`

## 使用示例

### 基本用法

```javascript
// GPUQueue.onSubmittedWorkDone 使用示例
// 请查阅MDN文档了解具体用法
console.log('GPUQueue.onSubmittedWorkDone API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 113 | Currently supported on ChromeOS, macOS, and Windows only. |
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

- **支持版本**: 不支持

### Safari

- **支持版本**: 26

## 兼容性检查代码

### 特性检测

```javascript
// 检查GPUQueue.onSubmittedWorkDone是否支持
function isGPUQueueOnSubmittedWorkDoneSupported() {
    return 'onSubmittedWorkDone' in gpuqueue && typeof gpuqueue.onSubmittedWorkDone === 'function';
}

if (isGPUQueueOnSubmittedWorkDoneSupported()) {
    console.log('GPUQueue.onSubmittedWorkDone 支持');
    // 使用GPUQueue.onSubmittedWorkDone
} else {
    console.log('GPUQueue.onSubmittedWorkDone 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GPUQueue.onSubmittedWorkDone polyfill
if (!gpuqueue.onSubmittedWorkDone) {
    // 在这里添加polyfill实现
    console.log('加载GPUQueue.onSubmittedWorkDone polyfill');
}
```

