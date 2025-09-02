# SVGStyleElement.sheet API 兼容性数据

## 基本信息

- **API名称**: `SVGStyleElement.sheet`
- **MDN文档**: [SVGStyleElement.sheet](https://developer.mozilla.org/docs/Web/API/SVGStyleElement/sheet)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom/#dom-linkstyle-sheet)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGStyleElement.sheet 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGStyleElement.sheet API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 38 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 25 |  |
| Opera Android | 25 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 38

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1.5

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 25
- **支持版本**: ≤12.1
- **移除版本**: 15

### Opera Android

- **支持版本**: 25
- **支持版本**: ≤12.1
- **移除版本**: 14

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGStyleElement.sheet是否支持
function isSVGStyleElementSheetSupported() {
    return 'sheet' in svgstyleelement && typeof svgstyleelement.sheet === 'function';
}

if (isSVGStyleElementSheetSupported()) {
    console.log('SVGStyleElement.sheet 支持');
    // 使用SVGStyleElement.sheet
} else {
    console.log('SVGStyleElement.sheet 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGStyleElement.sheet polyfill
if (!svgstyleelement.sheet) {
    // 在这里添加polyfill实现
    console.log('加载SVGStyleElement.sheet polyfill');
}
```

