# WebGLRenderingContext.unpackColorSpace API 兼容性数据

## 基本信息

- **API名称**: `WebGLRenderingContext.unpackColorSpace`
- **MDN文档**: [WebGLRenderingContext.unpackColorSpace](https://developer.mozilla.org/docs/Web/API/WebGLRenderingContext/unpackColorSpace)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/specs/latest/1.0/#DOM-WebGLRenderingContext-unpackColorSpace)
- **标签**: `web-features:webgl-color-management`

## 使用示例

### 基本用法

```javascript
// WebGLRenderingContext.unpackColorSpace 使用示例
// 请查阅MDN文档了解具体用法
console.log('WebGLRenderingContext.unpackColorSpace API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 104 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 132 |  |
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

- **支持版本**: 104

### Firefox

- **支持版本**: 132

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查WebGLRenderingContext.unpackColorSpace是否支持
function isWebGLRenderingContextUnpackColorSpaceSupported() {
    return 'unpackColorSpace' in webglrenderingcontext && typeof webglrenderingcontext.unpackColorSpace === 'function';
}

if (isWebGLRenderingContextUnpackColorSpaceSupported()) {
    console.log('WebGLRenderingContext.unpackColorSpace 支持');
    // 使用WebGLRenderingContext.unpackColorSpace
} else {
    console.log('WebGLRenderingContext.unpackColorSpace 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WebGLRenderingContext.unpackColorSpace polyfill
if (!webglrenderingcontext.unpackColorSpace) {
    // 在这里添加polyfill实现
    console.log('加载WebGLRenderingContext.unpackColorSpace polyfill');
}
```

