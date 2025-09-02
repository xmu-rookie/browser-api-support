# LargestContentfulPaint.loadTime API 兼容性数据

## 基本信息

- **API名称**: `LargestContentfulPaint.loadTime`
- **MDN文档**: [LargestContentfulPaint.loadTime](https://developer.mozilla.org/docs/Web/API/LargestContentfulPaint/loadTime)
- **规范文档**: [查看规范](https://w3c.github.io/largest-contentful-paint/#dom-largestcontentfulpaint-loadtime)
- **标签**: `web-features:largest-contentful-paint`

## 使用示例

### 基本用法

```javascript
// LargestContentfulPaint.loadTime 使用示例
// 请查阅MDN文档了解具体用法
console.log('LargestContentfulPaint.loadTime API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 77 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 122 |  |
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

- **支持版本**: 77

### Firefox

- **支持版本**: 122

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查LargestContentfulPaint.loadTime是否支持
function isLargestContentfulPaintLoadTimeSupported() {
    return 'loadTime' in largestcontentfulpaint && typeof largestcontentfulpaint.loadTime === 'function';
}

if (isLargestContentfulPaintLoadTimeSupported()) {
    console.log('LargestContentfulPaint.loadTime 支持');
    // 使用LargestContentfulPaint.loadTime
} else {
    console.log('LargestContentfulPaint.loadTime 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// LargestContentfulPaint.loadTime polyfill
if (!largestcontentfulpaint.loadTime) {
    // 在这里添加polyfill实现
    console.log('加载LargestContentfulPaint.loadTime polyfill');
}
```

