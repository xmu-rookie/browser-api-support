# HTMLCanvasElement.getContext.webgl_context API 兼容性数据

## 基本信息

- **API名称**: `HTMLCanvasElement.getContext.webgl_context`
- **标签**: `web-features:webgl`
- **描述**: WebGL context

## 使用示例

### 基本用法

```javascript
// HTMLCanvasElement.getContext.webgl_context 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLCanvasElement.getContext.webgl_context API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 33 |  |
| Chrome Android | 同主版本 |  |
| Edge | 79 |  |
| Firefox | 24 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Oculus | 同主版本 |  |
| Opera | 15 |  |
| Opera Android | 14 |  |
| Safari | 8 |  |
| Safari iOS | 8 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 37 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 33
- **支持版本**: 9

### Edge

- **支持版本**: 79
- **支持版本**: 12

### Firefox

- **支持版本**: 24
- **支持版本**: 3.6

### Internet Explorer

- **支持版本**: 11

### Opera

- **支持版本**: 15
- **支持版本**: 9

### Opera Android

- **支持版本**: 14
- **支持版本**: 10.1

### Safari

- **支持版本**: 8
- **支持版本**: 5.1

### Safari iOS

- **支持版本**: 8
- **支持版本**: 8

### WebView Android

- **支持版本**: 37
- **支持版本**: 37

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLCanvasElement.getContext.webgl_context是否支持
function isHTMLCanvasElementGetContextSupported() {
    return 'getContext' in htmlcanvaselement && typeof htmlcanvaselement.getContext === 'function';
}

if (isHTMLCanvasElementGetContextSupported()) {
    console.log('HTMLCanvasElement.getContext.webgl_context 支持');
    // 使用HTMLCanvasElement.getContext.webgl_context
} else {
    console.log('HTMLCanvasElement.getContext.webgl_context 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLCanvasElement.getContext.webgl_context polyfill
if (!htmlcanvaselement.getContext) {
    // 在这里添加polyfill实现
    console.log('加载HTMLCanvasElement.getContext.webgl_context polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **options_alpha_parameter**: `options.alpha` parameter
- **options_desynchronized_parameter**: `options.desynchronized` parameter
- **options_failIfMajorPerformanceCaveat_parameter**: `options.failIfMajorPerformanceCaveat` parameter
- **options_powerPreference_parameter**: `options.powerPreference` parameter

