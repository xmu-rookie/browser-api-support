# HTMLImageElement.loading API 兼容性数据

## 基本信息

- **API名称**: `HTMLImageElement.loading`
- **MDN文档**: [HTMLImageElement.loading](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/loading)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/embedded-content.html#dom-img-loading)
- **标签**: `web-features:loading-lazy`

## 使用示例

### 基本用法

```javascript
// HTMLImageElement.loading 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLImageElement.loading API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 77 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 75 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 77

### Firefox

- **支持版本**: 75

### Safari

- **支持版本**: 15.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLImageElement.loading是否支持
function isHTMLImageElementLoadingSupported() {
    return 'loading' in htmlimageelement && typeof htmlimageelement.loading === 'function';
}

if (isHTMLImageElementLoadingSupported()) {
    console.log('HTMLImageElement.loading 支持');
    // 使用HTMLImageElement.loading
} else {
    console.log('HTMLImageElement.loading 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLImageElement.loading polyfill
if (!htmlimageelement.loading) {
    // 在这里添加polyfill实现
    console.log('加载HTMLImageElement.loading polyfill');
}
```

