# LargestContentfulPaint.element API 兼容性数据

## 基本信息

- **API名称**: `LargestContentfulPaint.element`
- **MDN文档**: [LargestContentfulPaint.element](https://developer.mozilla.org/docs/Web/API/LargestContentfulPaint/element)
- **规范文档**: [查看规范](https://w3c.github.io/largest-contentful-paint/#dom-largestcontentfulpaint-element)
- **标签**: `web-features:largest-contentful-paint`

## 使用示例

### 基本用法

```javascript
// LargestContentfulPaint.element 使用示例
// 请查阅MDN文档了解具体用法
console.log('LargestContentfulPaint.element API');
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
// 检查LargestContentfulPaint.element是否支持
function isLargestContentfulPaintElementSupported() {
    return 'element' in largestcontentfulpaint && typeof largestcontentfulpaint.element === 'function';
}

if (isLargestContentfulPaintElementSupported()) {
    console.log('LargestContentfulPaint.element 支持');
    // 使用LargestContentfulPaint.element
} else {
    console.log('LargestContentfulPaint.element 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// LargestContentfulPaint.element polyfill
if (!largestcontentfulpaint.element) {
    // 在这里添加polyfill实现
    console.log('加载LargestContentfulPaint.element polyfill');
}
```

