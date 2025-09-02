# SVGMarkerElement.orient API 兼容性数据

## 基本信息

- **API名称**: `SVGMarkerElement.orient`
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/painting.html#__svg__SVGMarkerElement__orient)
- **标签**: `web-features:svg`

## 使用示例

### 基本用法

```javascript
// SVGMarkerElement.orient 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGMarkerElement.orient API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 13.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGMarkerElement.orient是否支持
function isSVGMarkerElementOrientSupported() {
    return 'orient' in svgmarkerelement && typeof svgmarkerelement.orient === 'function';
}

if (isSVGMarkerElementOrientSupported()) {
    console.log('SVGMarkerElement.orient 支持');
    // 使用SVGMarkerElement.orient
} else {
    console.log('SVGMarkerElement.orient 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGMarkerElement.orient polyfill
if (!svgmarkerelement.orient) {
    // 在这里添加polyfill实现
    console.log('加载SVGMarkerElement.orient polyfill');
}
```

