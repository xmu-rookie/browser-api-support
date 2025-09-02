# SVGPathElement.getPointAtLength API 兼容性数据

## 基本信息

- **API名称**: `SVGPathElement.getPointAtLength`
- **MDN文档**: [SVGPathElement.getPointAtLength](https://developer.mozilla.org/docs/Web/API/SVGPathElement/getPointAtLength)
- **规范文档**: [查看规范](https://svgwg.org/specs/paths/#__svg__SVGPathElement__getPointAtLength)

## 使用示例

### 基本用法

```javascript
// SVGPathElement.getPointAtLength 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGPathElement.getPointAtLength API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 1.5 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 3 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Firefox

- **支持版本**: 1.5

### Safari

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGPathElement.getPointAtLength是否支持
function isSVGPathElementGetPointAtLengthSupported() {
    return 'getPointAtLength' in svgpathelement && typeof svgpathelement.getPointAtLength === 'function';
}

if (isSVGPathElementGetPointAtLengthSupported()) {
    console.log('SVGPathElement.getPointAtLength 支持');
    // 使用SVGPathElement.getPointAtLength
} else {
    console.log('SVGPathElement.getPointAtLength 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGPathElement.getPointAtLength polyfill
if (!svgpathelement.getPointAtLength) {
    // 在这里添加polyfill实现
    console.log('加载SVGPathElement.getPointAtLength polyfill');
}
```

