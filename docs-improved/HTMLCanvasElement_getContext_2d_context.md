# HTMLCanvasElement.getContext.2d_context API 兼容性数据

## 基本信息

- **API名称**: `HTMLCanvasElement.getContext.2d_context`
- **标签**: `web-features:canvas-2d`
- **描述**: `2d` context

## 使用示例

### 基本用法

```javascript
// HTMLCanvasElement.getContext.2d_context 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLCanvasElement.getContext.2d_context API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 9 |  |
| Opera Android | 10.1 |  |
| Safari | 2 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1.5

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 9

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 2

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLCanvasElement.getContext.2d_context是否支持
function isHTMLCanvasElementGetContextSupported() {
    return 'getContext' in htmlcanvaselement && typeof htmlcanvaselement.getContext === 'function';
}

if (isHTMLCanvasElementGetContextSupported()) {
    console.log('HTMLCanvasElement.getContext.2d_context 支持');
    // 使用HTMLCanvasElement.getContext.2d_context
} else {
    console.log('HTMLCanvasElement.getContext.2d_context 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLCanvasElement.getContext.2d_context polyfill
if (!htmlcanvaselement.getContext) {
    // 在这里添加polyfill实现
    console.log('加载HTMLCanvasElement.getContext.2d_context polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **options_alpha_parameter**: `options.alpha` parameter
- **options_colorSpace_parameter**: `options.colorSpace` parameter
- **options_desynchronized_parameter**: `options.desynchronized` parameter
- **options_willReadFrequently_parameter**: `options.willReadFrequently` parameter

