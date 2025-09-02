# SVGPathElement.getPathData API 兼容性数据

## 基本信息

- **API名称**: `SVGPathElement.getPathData`
- **MDN文档**: [SVGPathElement.getPathData](https://developer.mozilla.org/docs/Web/API/SVGPathElement/getPathData)
- **规范文档**: [查看规范](https://svgwg.org/specs/paths/#__svg__SVGPathData__getPathData)

## 使用示例

### 基本用法

```javascript
// SVGPathElement.getPathData 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGPathElement.getPathData API');
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
// 检查SVGPathElement.getPathData是否支持
function isSVGPathElementGetPathDataSupported() {
    return 'getPathData' in svgpathelement && typeof svgpathelement.getPathData === 'function';
}

if (isSVGPathElementGetPathDataSupported()) {
    console.log('SVGPathElement.getPathData 支持');
    // 使用SVGPathElement.getPathData
} else {
    console.log('SVGPathElement.getPathData 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGPathElement.getPathData polyfill
if (!svgpathelement.getPathData) {
    // 在这里添加polyfill实现
    console.log('加载SVGPathElement.getPathData polyfill');
}
```

