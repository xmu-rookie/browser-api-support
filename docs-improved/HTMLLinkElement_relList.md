# HTMLLinkElement.relList API 兼容性数据

## 基本信息

- **API名称**: `HTMLLinkElement.relList`
- **MDN文档**: [HTMLLinkElement.relList](https://developer.mozilla.org/docs/Web/API/HTMLLinkElement/relList)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/semantics.html#dom-link-rellist)
- **标签**: `web-features:link`

## 使用示例

### 基本用法

```javascript
// HTMLLinkElement.relList 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLLinkElement.relList API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 50 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 30 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 9 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 50

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 30

### Safari

- **支持版本**: 9

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLLinkElement.relList是否支持
function isHTMLLinkElementRelListSupported() {
    return 'relList' in htmllinkelement && typeof htmllinkelement.relList === 'function';
}

if (isHTMLLinkElementRelListSupported()) {
    console.log('HTMLLinkElement.relList 支持');
    // 使用HTMLLinkElement.relList
} else {
    console.log('HTMLLinkElement.relList 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLLinkElement.relList polyfill
if (!htmllinkelement.relList) {
    // 在这里添加polyfill实现
    console.log('加载HTMLLinkElement.relList polyfill');
}
```

