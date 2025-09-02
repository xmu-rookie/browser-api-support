# SVGDiscardElement API 兼容性数据

## 基本信息

- **API名称**: `SVGDiscardElement`
- **MDN文档**: [SVGDiscardElement](https://developer.mozilla.org/docs/Web/API/SVGDiscardElement)
- **规范文档**: [查看规范](https://svgwg.org/specs/animations/#InterfaceSVGDiscardElement)

## 使用示例

### 基本用法

```javascript
// SVGDiscardElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGDiscardElement API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 34 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 136 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 34
- **移除版本**: 81

### Firefox

- **支持版本**: 136
- **移除版本**: 139

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGDiscardElement是否支持
function isSVGDiscardElementSupported() {
    return 'SVGDiscardElement' in window || typeof SVGDiscardElement !== 'undefined';
}

if (isSVGDiscardElementSupported()) {
    console.log('SVGDiscardElement 支持');
    // 使用SVGDiscardElement
} else {
    console.log('SVGDiscardElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGDiscardElement polyfill
if (!window.SVGDiscardElement) {
    // 在这里添加polyfill实现
    console.log('加载SVGDiscardElement polyfill');
}
```

