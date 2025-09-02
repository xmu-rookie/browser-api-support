# SVGPoint API 兼容性数据

## 基本信息

- **API名称**: `SVGPoint`
- **MDN文档**: [SVGPoint](https://developer.mozilla.org/docs/Web/API/SVGPoint)
- **规范文档**: [查看规范](https://www.w3.org/TR/SVG11/coords.html#InterfaceSVGPoint)
- **标签**: `web-features:svg-discouraged`

## 使用示例

### 基本用法

```javascript
// SVGPoint 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGPoint API');
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

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGPoint是否支持
function isSVGPointSupported() {
    return 'SVGPoint' in window || typeof SVGPoint !== 'undefined';
}

if (isSVGPointSupported()) {
    console.log('SVGPoint 支持');
    // 使用SVGPoint
} else {
    console.log('SVGPoint 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGPoint polyfill
if (!window.SVGPoint) {
    // 在这里添加polyfill实现
    console.log('加载SVGPoint polyfill');
}
```

