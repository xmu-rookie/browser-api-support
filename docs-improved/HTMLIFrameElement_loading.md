# HTMLIFrameElement.loading API 兼容性数据

## 基本信息

- **API名称**: `HTMLIFrameElement.loading`
- **MDN文档**: [HTMLIFrameElement.loading](https://developer.mozilla.org/docs/Web/API/HTMLIFrameElement/loading)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#dom-iframe-loading)
- **标签**: `web-features:loading-lazy`

## 使用示例

### 基本用法

```javascript
// HTMLIFrameElement.loading 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLIFrameElement.loading API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 77 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 121 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 60 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 77

### Firefox

- **支持版本**: 121

### Opera

- **支持版本**: 60

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLIFrameElement.loading是否支持
function isHTMLIFrameElementLoadingSupported() {
    return 'loading' in htmliframeelement && typeof htmliframeelement.loading === 'function';
}

if (isHTMLIFrameElementLoadingSupported()) {
    console.log('HTMLIFrameElement.loading 支持');
    // 使用HTMLIFrameElement.loading
} else {
    console.log('HTMLIFrameElement.loading 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLIFrameElement.loading polyfill
if (!htmliframeelement.loading) {
    // 在这里添加polyfill实现
    console.log('加载HTMLIFrameElement.loading polyfill');
}
```

