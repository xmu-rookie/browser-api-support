# HTMLImageElement.fetchPriority API 兼容性数据

## 基本信息

- **API名称**: `HTMLImageElement.fetchPriority`
- **MDN文档**: [HTMLImageElement.fetchPriority](https://developer.mozilla.org/docs/Web/API/HTMLImageElement/fetchPriority)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/embedded-content.html#dom-img-fetchpriority)
- **标签**: `web-features:fetch-priority`

## 使用示例

### 基本用法

```javascript
// HTMLImageElement.fetchPriority 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLImageElement.fetchPriority API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 102 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 132 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17.2 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 102
- **支持版本**: 101
- **移除版本**: 102

### Firefox

- **支持版本**: 132

### Safari

- **支持版本**: 17.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLImageElement.fetchPriority是否支持
function isHTMLImageElementFetchPrioritySupported() {
    return 'fetchPriority' in htmlimageelement && typeof htmlimageelement.fetchPriority === 'function';
}

if (isHTMLImageElementFetchPrioritySupported()) {
    console.log('HTMLImageElement.fetchPriority 支持');
    // 使用HTMLImageElement.fetchPriority
} else {
    console.log('HTMLImageElement.fetchPriority 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLImageElement.fetchPriority polyfill
if (!htmlimageelement.fetchPriority) {
    // 在这里添加polyfill实现
    console.log('加载HTMLImageElement.fetchPriority polyfill');
}
```

