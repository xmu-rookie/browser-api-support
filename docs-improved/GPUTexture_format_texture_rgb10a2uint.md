# GPUTexture.format.texture_rgb10a2uint API 兼容性数据

## 基本信息

- **API名称**: `GPUTexture.format.texture_rgb10a2uint`
- **规范文档**: [查看规范](https://gpuweb.github.io/gpuweb/#dom-gputextureformat-rgb10a2uint)
- **标签**: `web-features:webgpu`
- **描述**: <code>rgb10a2uint</code> texture format

## 使用示例

### 基本用法

```javascript
// GPUTexture.format.texture_rgb10a2uint 使用示例
// 请查阅MDN文档了解具体用法
console.log('GPUTexture.format.texture_rgb10a2uint API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 119 | Currently supported on ChromeOS, macOS, and Windows only. |
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

- **支持版本**: 119
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
// 检查GPUTexture.format.texture_rgb10a2uint是否支持
function isGPUTextureFormatSupported() {
    return 'format' in gputexture && typeof gputexture.format === 'function';
}

if (isGPUTextureFormatSupported()) {
    console.log('GPUTexture.format.texture_rgb10a2uint 支持');
    // 使用GPUTexture.format.texture_rgb10a2uint
} else {
    console.log('GPUTexture.format.texture_rgb10a2uint 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// GPUTexture.format.texture_rgb10a2uint polyfill
if (!gputexture.format) {
    // 在这里添加polyfill实现
    console.log('加载GPUTexture.format.texture_rgb10a2uint polyfill');
}
```

