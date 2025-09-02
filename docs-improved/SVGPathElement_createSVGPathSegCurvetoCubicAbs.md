# SVGPathElement.createSVGPathSegCurvetoCubicAbs API 兼容性数据

## 基本信息

- **API名称**: `SVGPathElement.createSVGPathSegCurvetoCubicAbs`
- **标签**: `web-features:svg-discouraged`

## 使用示例

### 基本用法

```javascript
// SVGPathElement.createSVGPathSegCurvetoCubicAbs 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGPathElement.createSVGPathSegCurvetoCubicAbs API');
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
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1
- **移除版本**: 48

### Edge

- **支持版本**: 12
- **移除版本**: 79

### Firefox

- **支持版本**: 1.5
- **移除版本**: 59

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1
- **移除版本**: 35

### Opera Android

- **支持版本**: ≤12.1
- **移除版本**: 35

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGPathElement.createSVGPathSegCurvetoCubicAbs是否支持
function isSVGPathElementCreateSVGPathSegCurvetoCubicAbsSupported() {
    return 'createSVGPathSegCurvetoCubicAbs' in svgpathelement && typeof svgpathelement.createSVGPathSegCurvetoCubicAbs === 'function';
}

if (isSVGPathElementCreateSVGPathSegCurvetoCubicAbsSupported()) {
    console.log('SVGPathElement.createSVGPathSegCurvetoCubicAbs 支持');
    // 使用SVGPathElement.createSVGPathSegCurvetoCubicAbs
} else {
    console.log('SVGPathElement.createSVGPathSegCurvetoCubicAbs 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGPathElement.createSVGPathSegCurvetoCubicAbs polyfill
if (!svgpathelement.createSVGPathSegCurvetoCubicAbs) {
    // 在这里添加polyfill实现
    console.log('加载SVGPathElement.createSVGPathSegCurvetoCubicAbs polyfill');
}
```

