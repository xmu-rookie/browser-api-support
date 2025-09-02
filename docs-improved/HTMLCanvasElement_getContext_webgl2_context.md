# HTMLCanvasElement.getContext.webgl2_context API 兼容性数据

## 基本信息

- **API名称**: `HTMLCanvasElement.getContext.webgl2_context`
- **标签**: `web-features:webgl2`
- **描述**: WebGL2 context

## 使用示例

### 基本用法

```javascript
// HTMLCanvasElement.getContext.webgl2_context 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLCanvasElement.getContext.webgl2_context API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 56 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 51 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 56

### Firefox

- **支持版本**: 51
- **支持版本**: 25

### Safari

- **支持版本**: 15

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLCanvasElement.getContext.webgl2_context是否支持
function isHTMLCanvasElementGetContextSupported() {
    return 'getContext' in htmlcanvaselement && typeof htmlcanvaselement.getContext === 'function';
}

if (isHTMLCanvasElementGetContextSupported()) {
    console.log('HTMLCanvasElement.getContext.webgl2_context 支持');
    // 使用HTMLCanvasElement.getContext.webgl2_context
} else {
    console.log('HTMLCanvasElement.getContext.webgl2_context 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLCanvasElement.getContext.webgl2_context polyfill
if (!htmlcanvaselement.getContext) {
    // 在这里添加polyfill实现
    console.log('加载HTMLCanvasElement.getContext.webgl2_context polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **options_alpha_parameter**: `options.alpha` parameter
- **options_desynchronized_parameter**: `options.desynchronized` parameter
- **options_failIfMajorPerformanceCaveat_parameter**: `options.failIfMajorPerformanceCaveat` parameter
- **options_powerPreference_parameter**: `options.powerPreference` parameter

