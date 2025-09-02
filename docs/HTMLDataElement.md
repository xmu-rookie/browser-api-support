# HTMLDataElement API 兼容性数据

## 基本信息

- **API名称**: `HTMLDataElement`
- **MDN文档**: [HTMLDataElement](https://developer.mozilla.org/docs/Web/API/HTMLDataElement)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/text-level-semantics.html#htmldataelement)
- **标签**: `web-features:data`

## 使用示例

### 基本用法

```javascript
// HTMLDataElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLDataElement API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 62 |  |
| Chrome Android | 同主版本 |  |
| Edge | 14 |  |
| Firefox | 22 |  |
| Firefox Android | 同主版本 |  |
| oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 62

### Edge

- **支持版本**: 14

### Firefox

- **支持版本**: 22

### Safari

- **支持版本**: 10

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLDataElement是否支持
function isHTMLDataElementSupported() {
    return typeof HTMLDataElement !== 'undefined';
}

if (isHTMLDataElementSupported()) {
    console.log('HTMLDataElement 支持');
    // 使用HTMLDataElement
} else {
    console.log('HTMLDataElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLDataElement polyfill
if (!window.HTMLDataElement) {
    // 在这里添加polyfill实现
    console.log('加载HTMLDataElement polyfill');
}
```

