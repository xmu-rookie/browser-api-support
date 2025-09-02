# SVGPatternElement.patternContentUnits API 兼容性数据

## 基本信息

- **API名称**: `SVGPatternElement.patternContentUnits`
- **MDN文档**: [SVGPatternElement.patternContentUnits](https://developer.mozilla.org/docs/Web/API/SVGPatternElement/patternContentUnits)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/pservers.html#__svg__SVGPatternElement__patternContentUnits)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGPatternElement.patternContentUnits 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGPatternElement.patternContentUnits API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3 |  |
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

- **支持版本**: 3

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
// 检查SVGPatternElement.patternContentUnits是否支持
function isSVGPatternElementPatternContentUnitsSupported() {
    return 'patternContentUnits' in svgpatternelement && typeof svgpatternelement.patternContentUnits === 'function';
}

if (isSVGPatternElementPatternContentUnitsSupported()) {
    console.log('SVGPatternElement.patternContentUnits 支持');
    // 使用SVGPatternElement.patternContentUnits
} else {
    console.log('SVGPatternElement.patternContentUnits 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGPatternElement.patternContentUnits polyfill
if (!svgpatternelement.patternContentUnits) {
    // 在这里添加polyfill实现
    console.log('加载SVGPatternElement.patternContentUnits polyfill');
}
```

