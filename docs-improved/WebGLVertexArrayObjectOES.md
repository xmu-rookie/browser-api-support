# WebGLVertexArrayObjectOES API 兼容性数据

## 基本信息

- **API名称**: `WebGLVertexArrayObjectOES`
- **MDN文档**: [WebGLVertexArrayObjectOES](https://developer.mozilla.org/docs/Web/API/WebGLVertexArrayObject)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/extensions/OES_vertex_array_object/)
- **标签**: `web-features:oes-vertex-array-object`

## 使用示例

### 基本用法

```javascript
// WebGLVertexArrayObjectOES 使用示例
// 请查阅MDN文档了解具体用法
console.log('WebGLVertexArrayObjectOES API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 24 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 25 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 5.1 |  |
| Safari iOS | 9 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 24

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 25

### Safari

- **支持版本**: 5.1

### Safari iOS

- **支持版本**: 9

## 兼容性检查代码

### 特性检测

```javascript
// 检查WebGLVertexArrayObjectOES是否支持
function isWebGLVertexArrayObjectOESSupported() {
    return 'WebGLVertexArrayObjectOES' in window || typeof WebGLVertexArrayObjectOES !== 'undefined';
}

if (isWebGLVertexArrayObjectOESSupported()) {
    console.log('WebGLVertexArrayObjectOES 支持');
    // 使用WebGLVertexArrayObjectOES
} else {
    console.log('WebGLVertexArrayObjectOES 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WebGLVertexArrayObjectOES polyfill
if (!window.WebGLVertexArrayObjectOES) {
    // 在这里添加polyfill实现
    console.log('加载WebGLVertexArrayObjectOES polyfill');
}
```

