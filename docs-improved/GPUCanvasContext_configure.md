# GPUCanvasContext.configure API 兼容性数据

## 基本信息

- **API名称**: `GPUCanvasContext.configure`
- **MDN文档**: [GPUCanvasContext.configure](https://developer.mozilla.org/docs/Web/API/GPUCanvasContext/configure)
- **规范文档**: [查看规范](https://gpuweb.github.io/gpuweb/#dom-gpucanvascontext-configure)
- **标签**: `web-features:webgpu`

## 使用示例

### 基本用法

```javascript
// GPUCanvasContext.configure 使用示例
// 请查阅MDN文档了解具体用法
console.log('GPUCanvasContext.configure API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 113 | Currently supported on ChromeOS, macOS, and Windows only.; The `rgba8unorm` format is currently not ... |
| Chrome Android | 121 |  |
| Deno | 不支持 |  |
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
  - The `rgba8unorm` format is currently not supported on macOS. See [bug 40823053](https://crbug.com/40823053).

### Chrome Android

- **支持版本**: 121

### Deno

- **支持版本**: 不支持

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
// 检查GPUCanvasContext.configure是否支持
function isGPUCanvasContextConfigureSupported() {
    return 'configure' in gpucanvascontext && typeof gpucanvascontext.configure === 'function';
}

if (isGPUCanvasContextConfigureSupported()) {
    console.log('GPUCanvasContext.configure 支持');
    // 使用GPUCanvasContext.configure
} else {
    console.log('GPUCanvasContext.configure 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GPUCanvasContext.configure polyfill
if (!gpucanvascontext.configure) {
    // 在这里添加polyfill实现
    console.log('加载GPUCanvasContext.configure polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **toneMapping**: `toneMapping` config property

