# SVGRenderingIntent API 兼容性数据

## 基本信息

- **API名称**: `SVGRenderingIntent`
- **MDN文档**: [SVGRenderingIntent](https://developer.mozilla.org/docs/Web/API/SVGRenderingIntent)
- **规范文档**: [查看规范](https://www.w3.org/TR/SVG11/types.html#InterfaceSVGRenderingIntent)
- **标签**: `web-features:svg-discouraged`

## 使用示例

### 基本用法

```javascript
// SVGRenderingIntent 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGRenderingIntent API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | ❌ 不支持 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 3.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1
- **移除版本**: 45

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 3.1
- **移除版本**: 17.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGRenderingIntent是否支持
function isSVGRenderingIntentSupported() {
    return typeof SVGRenderingIntent !== 'undefined';
}

if (isSVGRenderingIntentSupported()) {
    console.log('SVGRenderingIntent 支持');
    // 使用SVGRenderingIntent
} else {
    console.log('SVGRenderingIntent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGRenderingIntent polyfill
if (!window.SVGRenderingIntent) {
    // 在这里添加polyfill实现
    console.log('加载SVGRenderingIntent polyfill');
}
```

