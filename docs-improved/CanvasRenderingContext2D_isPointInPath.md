# CanvasRenderingContext2D.isPointInPath API 兼容性数据

## 基本信息

- **API名称**: `CanvasRenderingContext2D.isPointInPath`
- **MDN文档**: [CanvasRenderingContext2D.isPointInPath](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/isPointInPath)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-ispointinpath-dev)
- **标签**: `web-features:canvas-2d`

## 使用示例

### 基本用法

```javascript
// CanvasRenderingContext2D.isPointInPath 使用示例
// 请查阅MDN文档了解具体用法
console.log('CanvasRenderingContext2D.isPointInPath API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 2 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 3.1 |  |
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

- **支持版本**: 2

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 3.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查CanvasRenderingContext2D.isPointInPath是否支持
function isCanvasRenderingContext2DIsPointInPathSupported() {
    return 'isPointInPath' in canvasrenderingcontext2d && typeof canvasrenderingcontext2d.isPointInPath === 'function';
}

if (isCanvasRenderingContext2DIsPointInPathSupported()) {
    console.log('CanvasRenderingContext2D.isPointInPath 支持');
    // 使用CanvasRenderingContext2D.isPointInPath
} else {
    console.log('CanvasRenderingContext2D.isPointInPath 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CanvasRenderingContext2D.isPointInPath polyfill
if (!canvasrenderingcontext2d.isPointInPath) {
    // 在这里添加polyfill实现
    console.log('加载CanvasRenderingContext2D.isPointInPath polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **path_parameter**: `path` parameter

