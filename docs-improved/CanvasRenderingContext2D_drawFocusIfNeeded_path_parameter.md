# CanvasRenderingContext2D.drawFocusIfNeeded.path_parameter API 兼容性数据

## 基本信息

- **API名称**: `CanvasRenderingContext2D.drawFocusIfNeeded.path_parameter`
- **标签**: `web-features:canvas-2d`
- **描述**: `path` parameter

## 使用示例

### 基本用法

```javascript
// CanvasRenderingContext2D.drawFocusIfNeeded.path_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('CanvasRenderingContext2D.drawFocusIfNeeded.path_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 37 |  |
| Chrome Android | 同主版本 |  |
| Edge | 14 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 37

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查CanvasRenderingContext2D.drawFocusIfNeeded.path_parameter是否支持
function isCanvasRenderingContext2DDrawFocusIfNeededSupported() {
    return 'drawFocusIfNeeded' in canvasrenderingcontext2d && typeof canvasrenderingcontext2d.drawFocusIfNeeded === 'function';
}

if (isCanvasRenderingContext2DDrawFocusIfNeededSupported()) {
    console.log('CanvasRenderingContext2D.drawFocusIfNeeded.path_parameter 支持');
    // 使用CanvasRenderingContext2D.drawFocusIfNeeded.path_parameter
} else {
    console.log('CanvasRenderingContext2D.drawFocusIfNeeded.path_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// CanvasRenderingContext2D.drawFocusIfNeeded.path_parameter polyfill
if (!canvasrenderingcontext2d.drawFocusIfNeeded) {
    // 在这里添加polyfill实现
    console.log('加载CanvasRenderingContext2D.drawFocusIfNeeded.path_parameter polyfill');
}
```

