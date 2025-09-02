# HTMLCanvasElement.getContext.2d_context.options_willReadFrequently_parameter API 兼容性数据

## 基本信息

- **API名称**: `HTMLCanvasElement.getContext.2d_context.options_willReadFrequently_parameter`
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#dom-canvasrenderingcontext2dsettings-willreadfrequently)
- **标签**: `web-features:canvas-2d-willreadfrequently`
- **描述**: `options.willReadFrequently` parameter

## 使用示例

### 基本用法

```javascript
// HTMLCanvasElement.getContext.2d_context.options_willReadFrequently_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLCanvasElement.getContext.2d_context.options_willReadFrequently_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 99 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 28 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 99

### Firefox

- **支持版本**: 28

### Safari

- **支持版本**: 18

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLCanvasElement.getContext.2d_context.options_willReadFrequently_parameter是否支持
function isHTMLCanvasElementGetContextSupported() {
    return 'getContext' in htmlcanvaselement && typeof htmlcanvaselement.getContext === 'function';
}

if (isHTMLCanvasElementGetContextSupported()) {
    console.log('HTMLCanvasElement.getContext.2d_context.options_willReadFrequently_parameter 支持');
    // 使用HTMLCanvasElement.getContext.2d_context.options_willReadFrequently_parameter
} else {
    console.log('HTMLCanvasElement.getContext.2d_context.options_willReadFrequently_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLCanvasElement.getContext.2d_context.options_willReadFrequently_parameter polyfill
if (!htmlcanvaselement.getContext) {
    // 在这里添加polyfill实现
    console.log('加载HTMLCanvasElement.getContext.2d_context.options_willReadFrequently_parameter polyfill');
}
```

