# CanvasRenderingContext2D API 兼容性数据

## 基本信息

- **API名称**: `CanvasRenderingContext2D`
- **MDN文档**: [CanvasRenderingContext2D](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#2dcontext)
- **标签**: `web-features:canvas-2d`

## 使用示例

### 基本用法

```javascript
// CanvasRenderingContext2D 使用示例
// 请查阅MDN文档了解具体用法
console.log('CanvasRenderingContext2D API');
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
// 检查CanvasRenderingContext2D是否支持
function isCanvasRenderingContext2DSupported() {
    return 'CanvasRenderingContext2D' in window || typeof CanvasRenderingContext2D !== 'undefined';
}

if (isCanvasRenderingContext2DSupported()) {
    console.log('CanvasRenderingContext2D 支持');
    // 使用CanvasRenderingContext2D
} else {
    console.log('CanvasRenderingContext2D 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CanvasRenderingContext2D polyfill
if (!window.CanvasRenderingContext2D) {
    // 在这里添加polyfill实现
    console.log('加载CanvasRenderingContext2D polyfill');
}
```

