# HTMLCanvasElement.getContext.2d_context.options_desynchronized_parameter API 兼容性数据

## 基本信息

- **API名称**: `HTMLCanvasElement.getContext.2d_context.options_desynchronized_parameter`
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#dom-canvasrenderingcontext2dsettings-desynchronized)
- **标签**: `web-features:canvas-2d-desynchronized`
- **描述**: `options.desynchronized` parameter

## 使用示例

### 基本用法

```javascript
// HTMLCanvasElement.getContext.2d_context.options_desynchronized_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLCanvasElement.getContext.2d_context.options_desynchronized_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 81 | ChromeOS and Windows |
| Chrome Android | 75 |  |
| Edge | 79 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 68 |  |
| Opera Android | 同主版本 |  |
| Safari | 15 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 81
- **注意事项**:
  - ChromeOS and Windows
- **支持版本**: 75
- **移除版本**: 81
- **部分实现**: 是
- **注意事项**:
  - ChromeOS only

### Chrome Android

- **支持版本**: 75

### Edge

- **支持版本**: 79

### Firefox

- **支持版本**: 不支持

### Opera

- **支持版本**: 68

### Safari

- **支持版本**: 15

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLCanvasElement.getContext.2d_context.options_desynchronized_parameter是否支持
function isHTMLCanvasElementGetContextSupported() {
    return 'getContext' in htmlcanvaselement && typeof htmlcanvaselement.getContext === 'function';
}

if (isHTMLCanvasElementGetContextSupported()) {
    console.log('HTMLCanvasElement.getContext.2d_context.options_desynchronized_parameter 支持');
    // 使用HTMLCanvasElement.getContext.2d_context.options_desynchronized_parameter
} else {
    console.log('HTMLCanvasElement.getContext.2d_context.options_desynchronized_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLCanvasElement.getContext.2d_context.options_desynchronized_parameter polyfill
if (!htmlcanvaselement.getContext) {
    // 在这里添加polyfill实现
    console.log('加载HTMLCanvasElement.getContext.2d_context.options_desynchronized_parameter polyfill');
}
```

