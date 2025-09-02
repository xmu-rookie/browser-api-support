# LargestContentfulPaint.presentationTime API 兼容性数据

## 基本信息

- **API名称**: `LargestContentfulPaint.presentationTime`
- **规范文档**: [查看规范](https://w3c.github.io/paint-timing/#dom-painttimingmixin-presentationtime)

## 使用示例

### 基本用法

```javascript
// LargestContentfulPaint.presentationTime 使用示例
// 请查阅MDN文档了解具体用法
console.log('LargestContentfulPaint.presentationTime API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 140 |  |
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

- **支持版本**: 140

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查LargestContentfulPaint.presentationTime是否支持
function isLargestContentfulPaintPresentationTimeSupported() {
    return 'presentationTime' in largestcontentfulpaint && typeof largestcontentfulpaint.presentationTime === 'function';
}

if (isLargestContentfulPaintPresentationTimeSupported()) {
    console.log('LargestContentfulPaint.presentationTime 支持');
    // 使用LargestContentfulPaint.presentationTime
} else {
    console.log('LargestContentfulPaint.presentationTime 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// LargestContentfulPaint.presentationTime polyfill
if (!largestcontentfulpaint.presentationTime) {
    // 在这里添加polyfill实现
    console.log('加载LargestContentfulPaint.presentationTime polyfill');
}
```

