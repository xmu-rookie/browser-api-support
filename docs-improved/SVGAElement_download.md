# SVGAElement.download API 兼容性数据

## 基本信息

- **API名称**: `SVGAElement.download`
- **规范文档**: [查看规范](https://svgwg.org/svg2-draft/linking.html#__svg__SVGAElement__download)
- **标签**: `web-features:download`

## 使用示例

### 基本用法

```javascript
// SVGAElement.download 使用示例
// 请查阅MDN文档了解具体用法
console.log('SVGAElement.download API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 20 |  |
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

- **支持版本**: 20

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查SVGAElement.download是否支持
function isSVGAElementDownloadSupported() {
    return 'download' in svgaelement && typeof svgaelement.download === 'function';
}

if (isSVGAElementDownloadSupported()) {
    console.log('SVGAElement.download 支持');
    // 使用SVGAElement.download
} else {
    console.log('SVGAElement.download 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// SVGAElement.download polyfill
if (!svgaelement.download) {
    // 在这里添加polyfill实现
    console.log('加载SVGAElement.download polyfill');
}
```

