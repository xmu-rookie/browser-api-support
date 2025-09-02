# SVGLength.valueAsString API 兼容性数据

## 基本信息

- **API名称**: `SVGLength.valueAsString`
- **MDN文档**: [SVGLength.valueAsString](https://developer.mozilla.org/docs/Web/API/SVGLength/valueAsString)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/types.html#__svg__SVGLength__valueAsString)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGLength.valueAsString 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGLength.valueAsString API');
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
// 检查SVGLength.valueAsString是否支持
function isSVGLengthValueAsStringSupported() {
    return 'valueAsString' in svglength && typeof svglength.valueAsString === 'function';
}

if (isSVGLengthValueAsStringSupported()) {
    console.log('SVGLength.valueAsString 支持');
    // 使用SVGLength.valueAsString
} else {
    console.log('SVGLength.valueAsString 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGLength.valueAsString polyfill
if (!svglength.valueAsString) {
    // 在这里添加polyfill实现
    console.log('加载SVGLength.valueAsString polyfill');
}
```

