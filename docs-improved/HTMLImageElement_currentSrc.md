# HTMLImageElement.currentSrc API 兼容性数据

## 基本信息

- **API名称**: `HTMLImageElement.currentSrc`
- **MDN文档**: [HTMLImageElement.currentSrc](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/currentSrc)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/embedded-content.html#dom-img-currentsrc-dev)

## 使用示例

### 基本用法

```javascript
// HTMLImageElement.currentSrc 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLImageElement.currentSrc API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 38 |  |
| Chrome Android | 同主版本 |  |
| Edge | 13 |  |
| Firefox | 38 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 9.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 38

### Edge

- **支持版本**: 13

### Firefox

- **支持版本**: 38

### Safari

- **支持版本**: 9.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLImageElement.currentSrc是否支持
function isHTMLImageElementCurrentSrcSupported() {
    return 'currentSrc' in htmlimageelement && typeof htmlimageelement.currentSrc === 'function';
}

if (isHTMLImageElementCurrentSrcSupported()) {
    console.log('HTMLImageElement.currentSrc 支持');
    // 使用HTMLImageElement.currentSrc
} else {
    console.log('HTMLImageElement.currentSrc 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLImageElement.currentSrc polyfill
if (!htmlimageelement.currentSrc) {
    // 在这里添加polyfill实现
    console.log('加载HTMLImageElement.currentSrc polyfill');
}
```

