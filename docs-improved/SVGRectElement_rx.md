# SVGRectElement.rx API 兼容性数据

## 基本信息

- **API名称**: `SVGRectElement.rx`
- **MDN文档**: [SVGRectElement.rx](https://developer.mozilla.org/docs/Web/API/SVGRectElement/rx)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/shapes.html#__svg__SVGRectElement__rx)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGRectElement.rx 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGRectElement.rx API');
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
| Safari | 4 |  |
| Safari iOS | 同主版本 |  |
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

- **支持版本**: 4

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGRectElement.rx是否支持
function isSVGRectElementRxSupported() {
    return 'rx' in svgrectelement && typeof svgrectelement.rx === 'function';
}

if (isSVGRectElementRxSupported()) {
    console.log('SVGRectElement.rx 支持');
    // 使用SVGRectElement.rx
} else {
    console.log('SVGRectElement.rx 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGRectElement.rx polyfill
if (!svgrectelement.rx) {
    // 在这里添加polyfill实现
    console.log('加载SVGRectElement.rx polyfill');
}
```

