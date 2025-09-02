# WebGLRenderingContext.uniform4iv API 兼容性数据

## 基本信息

- **API名称**: `WebGLRenderingContext.uniform4iv`
- **MDN文档**: [WebGLRenderingContext.uniform4iv](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/uniform)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/specs/latest/1.0/#5.14.10)
- **标签**: `web-features:webgl`

## 使用示例

### 基本用法

```javascript
// WebGLRenderingContext.uniform4iv 使用示例
// 请查阅MDN文档了解具体用法
console.log('WebGLRenderingContext.uniform4iv API');
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
// 检查WebGLRenderingContext.uniform4iv是否支持
function isWebGLRenderingContextUniform4ivSupported() {
    return 'uniform4iv' in webglrenderingcontext && typeof webglrenderingcontext.uniform4iv === 'function';
}

if (isWebGLRenderingContextUniform4ivSupported()) {
    console.log('WebGLRenderingContext.uniform4iv 支持');
    // 使用WebGLRenderingContext.uniform4iv
} else {
    console.log('WebGLRenderingContext.uniform4iv 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WebGLRenderingContext.uniform4iv polyfill
if (!webglrenderingcontext.uniform4iv) {
    // 在这里添加polyfill实现
    console.log('加载WebGLRenderingContext.uniform4iv polyfill');
}
```

