# SVGGeometryElement API 兼容性数据

## 基本信息

- **API名称**: `SVGGeometryElement`
- **MDN文档**: [SVGGeometryElement](https://developer.mozilla.org/docs/Web/API/SVGGeometryElement)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/types.html#InterfaceSVGGeometryElement)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGGeometryElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGGeometryElement API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 56 |  |
| Chrome Android | 同主版本 |  |
| Edge | 79 |  |
| Firefox | 53 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 | The `SVGGeometryElement` interface itself is not present, but some of its members are available on t... |
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
  - The `SVGGeometryElement` interface itself is not present, but some of its members are available on the [`SVGPathElement`](https://developer.mozilla.org/docs/Web/API/SVGPathElement) interface.

### Edge

- **支持版本**: 79
- **支持版本**: 12
- **移除版本**: 79
- **部分实现**: 是
- **注意事项**:
  - The `SVGGeometryElement` interface itself is not present, but some of its members are available on the [`SVGPathElement`](https://developer.mozilla.org/docs/Web/API/SVGPathElement) interface.

### Firefox

- **支持版本**: 53
- **支持版本**: 1.5
- **移除版本**: 53
- **部分实现**: 是
- **注意事项**:
  - The `SVGGeometryElement` interface itself is not present, but some of its members are available on the [`SVGPathElement`](https://developer.mozilla.org/docs/Web/API/SVGPathElement) interface.

### Internet Explorer

- **支持版本**: 9
- **部分实现**: 是
- **注意事项**:
  - The `SVGGeometryElement` interface itself is not present, but some of its members are available on the [`SVGPathElement`](https://developer.mozilla.org/docs/Web/API/SVGPathElement) interface.

### Opera

- **支持版本**: 43
- **支持版本**: ≤12.1
- **移除版本**: 43
- **部分实现**: 是
- **注意事项**:
  - The `SVGGeometryElement` interface itself is not present, but some of its members are available on the [`SVGPathElement`](https://developer.mozilla.org/docs/Web/API/SVGPathElement) interface.

### Opera Android

- **支持版本**: 43
- **支持版本**: ≤12.1
- **移除版本**: 43
- **部分实现**: 是
- **注意事项**:
  - The `SVGGeometryElement` interface itself is not present, but some of its members are available on the [`SVGPathElement`](https://developer.mozilla.org/docs/Web/API/SVGPathElement) interface.

### Safari

- **支持版本**: 12
- **支持版本**: 3
- **移除版本**: 12
- **部分实现**: 是
- **注意事项**:
  - The `SVGGeometryElement` interface itself is not present, but some of its members are available on the [`SVGPathElement`](https://developer.mozilla.org/docs/Web/API/SVGPathElement) interface.

### Safari iOS

- **支持版本**: 12
- **支持版本**: 1
- **移除版本**: 12
- **部分实现**: 是
- **注意事项**:
  - The `SVGGeometryElement` interface itself is not present, but some of its members are available on the [`SVGPathElement`](https://developer.mozilla.org/docs/Web/API/SVGPathElement) interface.

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGGeometryElement是否支持
function isSVGGeometryElementSupported() {
    return 'SVGGeometryElement' in window || typeof SVGGeometryElement !== 'undefined';
}

if (isSVGGeometryElementSupported()) {
    console.log('SVGGeometryElement 支持');
    // 使用SVGGeometryElement
} else {
    console.log('SVGGeometryElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGGeometryElement polyfill
if (!window.SVGGeometryElement) {
    // 在这里添加polyfill实现
    console.log('加载SVGGeometryElement polyfill');
}
```

