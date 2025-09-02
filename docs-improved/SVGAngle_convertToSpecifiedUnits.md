# SVGAngle.convertToSpecifiedUnits API 兼容性数据

## 基本信息

- **API名称**: `SVGAngle.convertToSpecifiedUnits`
- **MDN文档**: [SVGAngle.convertToSpecifiedUnits](https://developer.mozilla.org/docs/Web/API/SVGAngle/convertToSpecifiedUnits)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/types.html#__svg__SVGAngle__convertToSpecifiedUnits)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGAngle.convertToSpecifiedUnits 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGAngle.convertToSpecifiedUnits API');
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
// 检查SVGAngle.convertToSpecifiedUnits是否支持
function isSVGAngleConvertToSpecifiedUnitsSupported() {
    return 'convertToSpecifiedUnits' in svgangle && typeof svgangle.convertToSpecifiedUnits === 'function';
}

if (isSVGAngleConvertToSpecifiedUnitsSupported()) {
    console.log('SVGAngle.convertToSpecifiedUnits 支持');
    // 使用SVGAngle.convertToSpecifiedUnits
} else {
    console.log('SVGAngle.convertToSpecifiedUnits 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGAngle.convertToSpecifiedUnits polyfill
if (!svgangle.convertToSpecifiedUnits) {
    // 在这里添加polyfill实现
    console.log('加载SVGAngle.convertToSpecifiedUnits polyfill');
}
```

