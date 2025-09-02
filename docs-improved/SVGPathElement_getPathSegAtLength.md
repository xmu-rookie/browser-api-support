# SVGPathElement.getPathSegAtLength API 兼容性数据

## 基本信息

- **API名称**: `SVGPathElement.getPathSegAtLength`
- **标签**: `web-features:svg-discouraged`

## 使用示例

### 基本用法

```javascript
// SVGPathElement.getPathSegAtLength 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGPathElement.getPathSegAtLength API');
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
- **移除版本**: 62

### Edge

- **支持版本**: 12
- **移除版本**: 79

### Firefox

- **支持版本**: 1.5
- **移除版本**: 97

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1
- **移除版本**: 49

### Opera Android

- **支持版本**: ≤12.1
- **移除版本**: 46

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGPathElement.getPathSegAtLength是否支持
function isSVGPathElementGetPathSegAtLengthSupported() {
    return 'getPathSegAtLength' in svgpathelement && typeof svgpathelement.getPathSegAtLength === 'function';
}

if (isSVGPathElementGetPathSegAtLengthSupported()) {
    console.log('SVGPathElement.getPathSegAtLength 支持');
    // 使用SVGPathElement.getPathSegAtLength
} else {
    console.log('SVGPathElement.getPathSegAtLength 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGPathElement.getPathSegAtLength polyfill
if (!svgpathelement.getPathSegAtLength) {
    // 在这里添加polyfill实现
    console.log('加载SVGPathElement.getPathSegAtLength polyfill');
}
```

