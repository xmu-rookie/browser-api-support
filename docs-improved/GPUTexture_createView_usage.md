# GPUTexture.createView.usage API 兼容性数据

## 基本信息

- **API名称**: `GPUTexture.createView.usage`
- **规范文档**: [查看规范](https://gpuweb.github.io/gpuweb/#dom-gputextureviewdescriptor-usage)
- **标签**: `web-features:webgpu`
- **描述**: <code>usage</code> option

## 使用示例

### 基本用法

```javascript
// GPUTexture.createView.usage 使用示例
// 请查阅MDN文档了解具体用法
console.log('GPUTexture.createView.usage API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 132 | Currently supported on ChromeOS, macOS, and Windows only. |
| Chrome Android | 132 |  |
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

- **支持版本**: 132
- **注意事项**:
  - Currently supported on ChromeOS, macOS, and Windows only.

### Chrome Android

- **支持版本**: 132

### Deno

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查GPUTexture.createView.usage是否支持
function isGPUTextureCreateViewSupported() {
    return 'createView' in gputexture && typeof gputexture.createView === 'function';
}

if (isGPUTextureCreateViewSupported()) {
    console.log('GPUTexture.createView.usage 支持');
    // 使用GPUTexture.createView.usage
} else {
    console.log('GPUTexture.createView.usage 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GPUTexture.createView.usage polyfill
if (!gputexture.createView) {
    // 在这里添加polyfill实现
    console.log('加载GPUTexture.createView.usage polyfill');
}
```

