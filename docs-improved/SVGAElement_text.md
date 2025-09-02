# SVGAElement.text API 兼容性数据

## 基本信息

- **API名称**: `SVGAElement.text`
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/linking.html#__svg__SVGAElement__text)
- **标签**: `web-features:svg-discouraged`

## 使用示例

### 基本用法

```javascript
// SVGAElement.text 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGAElement.text API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 61 |  |
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

- **支持版本**: 不支持

### Firefox

- **支持版本**: 61
- **移除版本**: 125

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGAElement.text是否支持
function isSVGAElementTextSupported() {
    return 'text' in svgaelement && typeof svgaelement.text === 'function';
}

if (isSVGAElementTextSupported()) {
    console.log('SVGAElement.text 支持');
    // 使用SVGAElement.text
} else {
    console.log('SVGAElement.text 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGAElement.text polyfill
if (!svgaelement.text) {
    // 在这里添加polyfill实现
    console.log('加载SVGAElement.text polyfill');
}
```

