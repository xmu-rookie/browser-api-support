# CanvasRenderingContext2D.createPattern API 兼容性数据

## 基本信息

- **API名称**: `CanvasRenderingContext2D.createPattern`
- **MDN文档**: [CanvasRenderingContext2D.createPattern](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/createPattern)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/canvas.html#dom-context-2d-createpattern-dev)
- **标签**: `web-features:canvas-2d`

## 使用示例

### 基本用法

```javascript
// CanvasRenderingContext2D.createPattern 使用示例
// 请查阅MDN文档了解具体用法
console.log('CanvasRenderingContext2D.createPattern API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1.5 | The repetition values `repeat-x` and `repeat-y` are not supported with `fill()`, only with `fillRect... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
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
- **注意事项**:
  - The repetition values `repeat-x` and `repeat-y` are not supported with `fill()`, only with `fillRect()`, see [bug 468358](https://bugzil.la/468358).

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 2

