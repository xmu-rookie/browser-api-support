# WebGLRenderingContext.compressedTexImage2D.pixels_param_accepts_SharedArrayBuffer API 兼容性数据

## 基本信息

- **API名称**: `WebGLRenderingContext.compressedTexImage2D.pixels_param_accepts_SharedArrayBuffer`
- **标签**: `web-features:webgl-sab`
- **描述**: `pixels` parameter accepts `SharedArrayBuffer` type

## 使用示例

### 基本用法

```javascript
// WebGLRenderingContext.compressedTexImage2D.pixels_param_accepts_SharedArrayBuffer 使用示例
// 请查阅MDN文档了解具体用法
console.log('WebGLRenderingContext.compressedTexImage2D.pixels_param_accepts_SharedArrayBuffer API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 60 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 79 |  |
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

- **支持版本**: 60

### Firefox

- **支持版本**: 79

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查WebGLRenderingContext.compressedTexImage2D.pixels_param_accepts_SharedArrayBuffer是否支持
function isWebGLRenderingContextCompressedTexImage2DSupported() {
    return 'compressedTexImage2D' in webglrenderingcontext && typeof webglrenderingcontext.compressedTexImage2D === 'function';
}

if (isWebGLRenderingContextCompressedTexImage2DSupported()) {
    console.log('WebGLRenderingContext.compressedTexImage2D.pixels_param_accepts_SharedArrayBuffer 支持');
    // 使用WebGLRenderingContext.compressedTexImage2D.pixels_param_accepts_SharedArrayBuffer
} else {
    console.log('WebGLRenderingContext.compressedTexImage2D.pixels_param_accepts_SharedArrayBuffer 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WebGLRenderingContext.compressedTexImage2D.pixels_param_accepts_SharedArrayBuffer polyfill
if (!webglrenderingcontext.compressedTexImage2D) {
    // 在这里添加polyfill实现
    console.log('加载WebGLRenderingContext.compressedTexImage2D.pixels_param_accepts_SharedArrayBuffer polyfill');
}
```

