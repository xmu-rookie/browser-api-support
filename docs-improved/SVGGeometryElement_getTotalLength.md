# SVGGeometryElement.getTotalLength API 兼容性数据

## 基本信息

- **API名称**: `SVGGeometryElement.getTotalLength`
- **MDN文档**: [SVGGeometryElement.getTotalLength](https://developer.mozilla.org/docs/Web/API/SVGGeometryElement/getTotalLength)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/types.html#__svg__SVGGeometryElement__getTotalLength)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGGeometryElement.getTotalLength 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGGeometryElement.getTotalLength API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 56 |  |
| Chrome Android | 同主版本 |  |
| Edge | 79 |  |
| Firefox | 61 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 | Only supported for [`SVGPathElement`](https://developer.mozilla.org/docs/Web/API/SVGPathElement), no... |
| Oculus | 同主版本 |  |
| Opera | 43 |  |
| Opera Android | 43 |  |
| Safari | 12 |  |
| Safari iOS | 12 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 56
- **支持版本**: 1
- **移除版本**: 56
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`SVGPathElement`](https://developer.mozilla.org/docs/Web/API/SVGPathElement), not all `SVGGeometryElement` objects.

### Edge

- **支持版本**: 79
- **支持版本**: 12
- **移除版本**: 79
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`SVGPathElement`](https://developer.mozilla.org/docs/Web/API/SVGPathElement), not all `SVGGeometryElement` objects.

### Firefox

- **支持版本**: 61
- **支持版本**: 1.5
- **移除版本**: 61
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`SVGPathElement`](https://developer.mozilla.org/docs/Web/API/SVGPathElement), not all `SVGGeometryElement` objects.

### Internet Explorer

- **支持版本**: 9
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`SVGPathElement`](https://developer.mozilla.org/docs/Web/API/SVGPathElement), not all `SVGGeometryElement` objects.

### Opera

- **支持版本**: 43
- **支持版本**: ≤12.1
- **移除版本**: 43
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`SVGPathElement`](https://developer.mozilla.org/docs/Web/API/SVGPathElement), not all `SVGGeometryElement` objects.

### Opera Android

- **支持版本**: 43
- **支持版本**: ≤12.1
- **移除版本**: 43
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`SVGPathElement`](https://developer.mozilla.org/docs/Web/API/SVGPathElement), not all `SVGGeometryElement` objects.

### Safari

- **支持版本**: 12
- **支持版本**: 3
- **移除版本**: 12
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`SVGPathElement`](https://developer.mozilla.org/docs/Web/API/SVGPathElement), not all `SVGGeometryElement` objects.

### Safari iOS

- **支持版本**: 12
- **支持版本**: 1
- **移除版本**: 12
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`SVGPathElement`](https://developer.mozilla.org/docs/Web/API/SVGPathElement), not all `SVGGeometryElement` objects.

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGGeometryElement.getTotalLength是否支持
function isSVGGeometryElementGetTotalLengthSupported() {
    return 'getTotalLength' in svggeometryelement && typeof svggeometryelement.getTotalLength === 'function';
}

if (isSVGGeometryElementGetTotalLengthSupported()) {
    console.log('SVGGeometryElement.getTotalLength 支持');
    // 使用SVGGeometryElement.getTotalLength
} else {
    console.log('SVGGeometryElement.getTotalLength 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGGeometryElement.getTotalLength polyfill
if (!svggeometryelement.getTotalLength) {
    // 在这里添加polyfill实现
    console.log('加载SVGGeometryElement.getTotalLength polyfill');
}
```

