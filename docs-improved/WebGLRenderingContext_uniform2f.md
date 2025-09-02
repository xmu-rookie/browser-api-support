# WebGLRenderingContext.uniform2f API 兼容性数据

## 基本信息

- **API名称**: `WebGLRenderingContext.uniform2f`
- **MDN文档**: [WebGLRenderingContext.uniform2f](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/specs/latest/1.0/#5.14.10)
- **标签**: `web-features:webgl`

## 使用示例

### 基本用法

```javascript
// WebGLRenderingContext.uniform2f 使用示例
// 请查阅MDN文档了解具体用法
console.log('WebGLRenderingContext.uniform2f API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 9 |  |
| Chrome Android | 25 |  |
| Edge | 12 |  |
| Firefox | 4 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Oculus | 同主版本 |  |
| Opera | 12 |  |
| Opera Android | 12 |  |
| Safari | 5.1 |  |
| Safari iOS | 8 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 4.4.3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 9

### Chrome Android

- **支持版本**: 25

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 4

### Internet Explorer

- **支持版本**: 11

### Opera

- **支持版本**: 12

### Opera Android

- **支持版本**: 12

### Safari

- **支持版本**: 5.1

### Safari iOS

- **支持版本**: 8

### WebView Android

- **支持版本**: 4.4.3

## 兼容性检查代码

### 特性检测

```javascript
// 检查WebGLRenderingContext.uniform2f是否支持
function isWebGLRenderingContextUniform2fSupported() {
    return 'uniform2f' in webglrenderingcontext && typeof webglrenderingcontext.uniform2f === 'function';
}

if (isWebGLRenderingContextUniform2fSupported()) {
    console.log('WebGLRenderingContext.uniform2f 支持');
    // 使用WebGLRenderingContext.uniform2f
} else {
    console.log('WebGLRenderingContext.uniform2f 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WebGLRenderingContext.uniform2f polyfill
if (!webglrenderingcontext.uniform2f) {
    // 在这里添加polyfill实现
    console.log('加载WebGLRenderingContext.uniform2f polyfill');
}
```

