# SVGRect.width API 兼容性数据

## 基本信息

- **API名称**: `SVGRect.width`
- **MDN文档**: [SVGRect.width](https://developer.mozilla.org/docs/Web/API/SVGRect/width)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGRect.width 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGRect.width API');
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
// 检查SVGRect.width是否支持
function isSVGRectWidthSupported() {
    return 'width' in svgrect && typeof svgrect.width === 'function';
}

if (isSVGRectWidthSupported()) {
    console.log('SVGRect.width 支持');
    // 使用SVGRect.width
} else {
    console.log('SVGRect.width 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGRect.width polyfill
if (!svgrect.width) {
    // 在这里添加polyfill实现
    console.log('加载SVGRect.width polyfill');
}
```

