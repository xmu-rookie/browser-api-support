# SVGNumberList API 兼容性数据

## 基本信息

- **API名称**: `SVGNumberList`
- **MDN文档**: [SVGNumberList](https://developer.mozilla.org/docs/Web/API/SVGNumberList)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/types.html#InterfaceSVGNumberList)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGNumberList 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGNumberList API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 6 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1.5 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 5 |  |
| Safari iOS | 4 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 6

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

- **支持版本**: 5

### Safari iOS

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGNumberList是否支持
function isSVGNumberListSupported() {
    return typeof SVGNumberList !== 'undefined';
}

if (isSVGNumberListSupported()) {
    console.log('SVGNumberList 支持');
    // 使用SVGNumberList
} else {
    console.log('SVGNumberList 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGNumberList polyfill
if (!window.SVGNumberList) {
    // 在这里添加polyfill实现
    console.log('加载SVGNumberList polyfill');
}
```

