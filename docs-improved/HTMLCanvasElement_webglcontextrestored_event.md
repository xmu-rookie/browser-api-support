# HTMLCanvasElement.webglcontextrestored_event API 兼容性数据

## 基本信息

- **API名称**: `HTMLCanvasElement.webglcontextrestored_event`
- **MDN文档**: [HTMLCanvasElement.webglcontextrestored_event](https://developer.mozilla.org/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)
- **规范文档**: [查看规范](https://registry.khronos.org/webgl/specs/latest/1.0/#5.15.3)
- **标签**: `web-features:webgl`
- **描述**: `webglcontextrestored` event

## 使用示例

### 基本用法

```javascript
// HTMLCanvasElement.webglcontextrestored_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLCanvasElement.webglcontextrestored_event API');
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
| WebView Android | 同主版本 |  |
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

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLCanvasElement.webglcontextrestored_event是否支持
function isHTMLCanvasElementWebglcontextrestored_eventSupported() {
    return 'webglcontextrestored_event' in htmlcanvaselement && typeof htmlcanvaselement.webglcontextrestored_event === 'function';
}

if (isHTMLCanvasElementWebglcontextrestored_eventSupported()) {
    console.log('HTMLCanvasElement.webglcontextrestored_event 支持');
    // 使用HTMLCanvasElement.webglcontextrestored_event
} else {
    console.log('HTMLCanvasElement.webglcontextrestored_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLCanvasElement.webglcontextrestored_event polyfill
if (!htmlcanvaselement.webglcontextrestored_event) {
    // 在这里添加polyfill实现
    console.log('加载HTMLCanvasElement.webglcontextrestored_event polyfill');
}
```

