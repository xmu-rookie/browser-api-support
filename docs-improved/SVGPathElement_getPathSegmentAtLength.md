# SVGPathElement.getPathSegmentAtLength API 兼容性数据

## 基本信息

- **API名称**: `SVGPathElement.getPathSegmentAtLength`
- **MDN文档**: [SVGPathElement.getPathSegmentAtLength](https://developer.mozilla.org/docs/Web/API/SVGPathElement/getPathSegmentAtLength)
- **规范文档**: [查看规范](https://svgwg.org/specs/paths/#__svg__SVGPathElement__getPathSegmentAtLength)

## 使用示例

### 基本用法

```javascript
// SVGPathElement.getPathSegmentAtLength 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGPathElement.getPathSegmentAtLength API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 137 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 137

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGPathElement.getPathSegmentAtLength是否支持
function isSVGPathElementGetPathSegmentAtLengthSupported() {
    return 'getPathSegmentAtLength' in svgpathelement && typeof svgpathelement.getPathSegmentAtLength === 'function';
}

if (isSVGPathElementGetPathSegmentAtLengthSupported()) {
    console.log('SVGPathElement.getPathSegmentAtLength 支持');
    // 使用SVGPathElement.getPathSegmentAtLength
} else {
    console.log('SVGPathElement.getPathSegmentAtLength 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGPathElement.getPathSegmentAtLength polyfill
if (!svgpathelement.getPathSegmentAtLength) {
    // 在这里添加polyfill实现
    console.log('加载SVGPathElement.getPathSegmentAtLength polyfill');
}
```

