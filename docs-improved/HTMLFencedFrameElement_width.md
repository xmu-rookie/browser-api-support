# HTMLFencedFrameElement.width API 兼容性数据

## 基本信息

- **API名称**: `HTMLFencedFrameElement.width`
- **MDN文档**: [HTMLFencedFrameElement.width](https://developer.mozilla.org/docs/Web/API/HTMLFencedFrameElement/width)
- **规范文档**: [查看规范](https://wicg.github.io/fenced-frame/#dom-htmlfencedframeelement-width)
- **标签**: `web-features:fencedframe`

## 使用示例

### 基本用法

```javascript
// HTMLFencedFrameElement.width 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLFencedFrameElement.width API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 126 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
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

- **支持版本**: 126

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLFencedFrameElement.width是否支持
function isHTMLFencedFrameElementWidthSupported() {
    return 'width' in htmlfencedframeelement && typeof htmlfencedframeelement.width === 'function';
}

if (isHTMLFencedFrameElementWidthSupported()) {
    console.log('HTMLFencedFrameElement.width 支持');
    // 使用HTMLFencedFrameElement.width
} else {
    console.log('HTMLFencedFrameElement.width 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLFencedFrameElement.width polyfill
if (!htmlfencedframeelement.width) {
    // 在这里添加polyfill实现
    console.log('加载HTMLFencedFrameElement.width polyfill');
}
```

