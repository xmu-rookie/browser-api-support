# GPUTextureView API 兼容性数据

## 基本信息

- **API名称**: `GPUTextureView`
- **MDN文档**: [GPUTextureView](https://developer.mozilla.org/docs/Web/API/GPUTextureView)
- **规范文档**: [查看规范](https://gpuweb.github.io/gpuweb/#gputextureview)
- **标签**: `web-features:webgpu`

## 使用示例

### 基本用法

```javascript
// GPUTextureView 使用示例
// 请查阅MDN文档了解具体用法
console.log('GPUTextureView API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 113 | Currently supported on ChromeOS, macOS, and Windows only. |
| Chrome Android | 121 |  |
| deno | 未知 |  |
| Edge | 同主版本 |  |
| Firefox | 141 (部分支持) | Currently supported on Windows only, in all contexts except for service workers. |
| Firefox Android | ❌ 不支持 |  |
| oculus | 同主版本 |  |
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

### deno


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
// 检查GPUTextureView是否支持
function isGPUTextureViewSupported() {
    return 'GPUTextureView' in window || typeof GPUTextureView !== 'undefined';
}

if (isGPUTextureViewSupported()) {
    console.log('GPUTextureView 支持');
    // 使用GPUTextureView
} else {
    console.log('GPUTextureView 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GPUTextureView polyfill
if (!window.GPUTextureView) {
    // 在这里添加polyfill实现
    console.log('加载GPUTextureView polyfill');
}
```

