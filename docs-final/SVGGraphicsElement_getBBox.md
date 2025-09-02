# SVGGraphicsElement.getBBox API 兼容性数据

## 基本信息

- **API名称**: `SVGGraphicsElement.getBBox`
- **MDN文档**: [SVGGraphicsElement.getBBox](https://developer.mozilla.org/docs/Web/API/SVGGraphicsElement/getBBox)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/types.html#__svg__SVGGraphicsElement__getBBox)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGGraphicsElement.getBBox 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGGraphicsElement.getBBox API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1.5 | Before Firefox 128, the `getBBox()` method returned an empty `DOMRect` when there is no fill ([bug 1... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1.5
- **注意事项**:
  - Before Firefox 128, the `getBBox()` method returned an empty `DOMRect` when there is no fill ([bug 1019326](https://bugzil.la/1019326)).
  - Before Firefox 68, this method didn't work for `<textPath>` and `<tspan>` elements ([bug 937268](https://bugzil.la/937268)).

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

### WebView Android

- **支持版本**: 3

