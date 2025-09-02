# SVGTextPathElement.startOffset API 兼容性数据

## 基本信息

- **API名称**: `SVGTextPathElement.startOffset`
- **MDN文档**: [SVGTextPathElement.startOffset](https://developer.mozilla.org/docs/Web/API/SVGTextPathElement/startOffset)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/text.html#__svg__SVGTextPathElement__startOffset)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGTextPathElement.startOffset 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGTextPathElement.startOffset API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 20 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 3.1 |  |
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

- **支持版本**: 20

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 3.1

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGTextPathElement.startOffset是否支持
function isSVGTextPathElementStartOffsetSupported() {
    return 'startOffset' in svgtextpathelement && typeof svgtextpathelement.startOffset === 'function';
}

if (isSVGTextPathElementStartOffsetSupported()) {
    console.log('SVGTextPathElement.startOffset 支持');
    // 使用SVGTextPathElement.startOffset
} else {
    console.log('SVGTextPathElement.startOffset 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGTextPathElement.startOffset polyfill
if (!svgtextpathelement.startOffset) {
    // 在这里添加polyfill实现
    console.log('加载SVGTextPathElement.startOffset polyfill');
}
```

