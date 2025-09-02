# HTMLScriptElement.fetchPriority API 兼容性数据

## 基本信息

- **API名称**: `HTMLScriptElement.fetchPriority`
- **MDN文档**: [HTMLScriptElement.fetchPriority](https://developer.mozilla.org/docs/Web/API/HTMLScriptElement/fetchPriority)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/scripting.html#dom-script-fetchpriority)
- **标签**: `web-features:fetch-priority`

## 使用示例

### 基本用法

```javascript
// HTMLScriptElement.fetchPriority 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLScriptElement.fetchPriority API');
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
// 检查HTMLScriptElement.fetchPriority是否支持
function isHTMLScriptElementFetchPrioritySupported() {
    return 'fetchPriority' in htmlscriptelement && typeof htmlscriptelement.fetchPriority === 'function';
}

if (isHTMLScriptElementFetchPrioritySupported()) {
    console.log('HTMLScriptElement.fetchPriority 支持');
    // 使用HTMLScriptElement.fetchPriority
} else {
    console.log('HTMLScriptElement.fetchPriority 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLScriptElement.fetchPriority polyfill
if (!htmlscriptelement.fetchPriority) {
    // 在这里添加polyfill实现
    console.log('加载HTMLScriptElement.fetchPriority polyfill');
}
```

