# SVGPolygonElement.points API 兼容性数据

## 基本信息

- **API名称**: `SVGPolygonElement.points`
- **MDN文档**: [SVGPolygonElement.points](https://developer.mozilla.org/docs/Web/API/SVGPolygonElement/points)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/shapes.html#__svg__SVGAnimatedPoints__points)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGPolygonElement.points 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGPolygonElement.points API');
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

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGPolygonElement.points是否支持
function isSVGPolygonElementPointsSupported() {
    return 'points' in svgpolygonelement && typeof svgpolygonelement.points === 'function';
}

if (isSVGPolygonElementPointsSupported()) {
    console.log('SVGPolygonElement.points 支持');
    // 使用SVGPolygonElement.points
} else {
    console.log('SVGPolygonElement.points 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGPolygonElement.points polyfill
if (!svgpolygonelement.points) {
    // 在这里添加polyfill实现
    console.log('加载SVGPolygonElement.points polyfill');
}
```

