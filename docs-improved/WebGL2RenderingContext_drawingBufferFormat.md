# WebGL2RenderingContext.drawingBufferFormat API 兼容性数据

## 基本信息

- **API名称**: `WebGL2RenderingContext.drawingBufferFormat`
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/specs/latest/1.0/#5.14.1)
- **标签**: `web-features:webgl2`

## 使用示例

### 基本用法

```javascript
// WebGL2RenderingContext.drawingBufferFormat 使用示例
// 请查阅MDN文档了解具体用法
console.log('WebGL2RenderingContext.drawingBufferFormat API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 122 |  |
| Chrome Android | 同主版本 |  |
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

- **支持版本**: 122

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查WebGL2RenderingContext.drawingBufferFormat是否支持
function isWebGL2RenderingContextDrawingBufferFormatSupported() {
    return 'drawingBufferFormat' in webgl2renderingcontext && typeof webgl2renderingcontext.drawingBufferFormat === 'function';
}

if (isWebGL2RenderingContextDrawingBufferFormatSupported()) {
    console.log('WebGL2RenderingContext.drawingBufferFormat 支持');
    // 使用WebGL2RenderingContext.drawingBufferFormat
} else {
    console.log('WebGL2RenderingContext.drawingBufferFormat 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// WebGL2RenderingContext.drawingBufferFormat polyfill
if (!webgl2renderingcontext.drawingBufferFormat) {
    // 在这里添加polyfill实现
    console.log('加载WebGL2RenderingContext.drawingBufferFormat polyfill');
}
```

