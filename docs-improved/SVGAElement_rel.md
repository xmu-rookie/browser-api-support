# SVGAElement.rel API 兼容性数据

## 基本信息

- **API名称**: `SVGAElement.rel`
- **MDN文档**: [SVGAElement.rel](https://developer.mozilla.org/docs/Web/API/SVGAElement/rel)
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/linking.html#__svg__SVGAElement__rel)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGAElement.rel 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGAElement.rel API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 136 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 61 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 136

### Firefox

- **支持版本**: 61

### Safari

- **支持版本**: 14

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGAElement.rel是否支持
function isSVGAElementRelSupported() {
    return 'rel' in svgaelement && typeof svgaelement.rel === 'function';
}

if (isSVGAElementRelSupported()) {
    console.log('SVGAElement.rel 支持');
    // 使用SVGAElement.rel
} else {
    console.log('SVGAElement.rel 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGAElement.rel polyfill
if (!svgaelement.rel) {
    // 在这里添加polyfill实现
    console.log('加载SVGAElement.rel polyfill');
}
```

