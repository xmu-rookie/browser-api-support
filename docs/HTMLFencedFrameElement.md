# HTMLFencedFrameElement API 兼容性数据

## 基本信息

- **API名称**: `HTMLFencedFrameElement`
- **MDN文档**: [HTMLFencedFrameElement](https://developer.mozilla.org/docs/Web/API/HTMLFencedFrameElement)
- **规范文档**: [查看规范](https://wicg.github.io/fenced-frame/#htmlfencedframeelement)
- **标签**: `web-features:fencedframe`

## 使用示例

### 基本用法

```javascript
// HTMLFencedFrameElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLFencedFrameElement API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 126 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | ❌ 不支持 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | ❌ 不支持 |  |
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
// 检查HTMLFencedFrameElement是否支持
function isHTMLFencedFrameElementSupported() {
    return typeof HTMLFencedFrameElement !== 'undefined';
}

if (isHTMLFencedFrameElementSupported()) {
    console.log('HTMLFencedFrameElement 支持');
    // 使用HTMLFencedFrameElement
} else {
    console.log('HTMLFencedFrameElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLFencedFrameElement polyfill
if (!window.HTMLFencedFrameElement) {
    // 在这里添加polyfill实现
    console.log('加载HTMLFencedFrameElement polyfill');
}
```

