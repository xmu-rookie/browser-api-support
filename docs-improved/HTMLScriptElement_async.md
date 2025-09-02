# HTMLScriptElement.async API 兼容性数据

## 基本信息

- **API名称**: `HTMLScriptElement.async`
- **MDN文档**: [HTMLScriptElement.async](https://developer.mozilla.org/docs/Web/API/HTMLScriptElement/async)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/scripting.html#dom-script-async)
- **标签**: `web-features:script`

## 使用示例

### 基本用法

```javascript
// HTMLScriptElement.async 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLScriptElement.async API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 6 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.6 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 5.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 6

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.6

### Internet Explorer

- **支持版本**: 10

### Safari

- **支持版本**: 5.1

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLScriptElement.async是否支持
function isHTMLScriptElementAsyncSupported() {
    return 'async' in htmlscriptelement && typeof htmlscriptelement.async === 'function';
}

if (isHTMLScriptElementAsyncSupported()) {
    console.log('HTMLScriptElement.async 支持');
    // 使用HTMLScriptElement.async
} else {
    console.log('HTMLScriptElement.async 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLScriptElement.async polyfill
if (!htmlscriptelement.async) {
    // 在这里添加polyfill实现
    console.log('加载HTMLScriptElement.async polyfill');
}
```

