# SVGAngle.valueAsString API 兼容性数据

## 基本信息

- **API名称**: `SVGAngle.valueAsString`
- **MDN文档**: [SVGAngle.valueAsString](https://developer.mozilla.org/docs/Web/API/SVGAngle/valueAsString)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/types.html#__svg__SVGAngle__valueAsString)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGAngle.valueAsString 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGAngle.valueAsString API');
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
// 检查SVGAngle.valueAsString是否支持
function isSVGAngleValueAsStringSupported() {
    return 'valueAsString' in svgangle && typeof svgangle.valueAsString === 'function';
}

if (isSVGAngleValueAsStringSupported()) {
    console.log('SVGAngle.valueAsString 支持');
    // 使用SVGAngle.valueAsString
} else {
    console.log('SVGAngle.valueAsString 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGAngle.valueAsString polyfill
if (!svgangle.valueAsString) {
    // 在这里添加polyfill实现
    console.log('加载SVGAngle.valueAsString polyfill');
}
```

