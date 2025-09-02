# HTMLTemplateElement API 兼容性数据

## 基本信息

- **API名称**: `HTMLTemplateElement`
- **MDN文档**: [HTMLTemplateElement](https://developer.mozilla.org/docs/Web/API/HTMLTemplateElement)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/scripting.html#htmltemplateelement)
- **标签**: `web-features:template`

## 使用示例

### 基本用法

```javascript
// HTMLTemplateElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLTemplateElement API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 26 |  |
| Chrome Android | 同主版本 |  |
| Edge | 13 |  |
| Firefox | 22 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 26

### Edge

- **支持版本**: 13

### Firefox

- **支持版本**: 22

### Safari

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLTemplateElement是否支持
function isHTMLTemplateElementSupported() {
    return 'HTMLTemplateElement' in window || typeof HTMLTemplateElement !== 'undefined';
}

if (isHTMLTemplateElementSupported()) {
    console.log('HTMLTemplateElement 支持');
    // 使用HTMLTemplateElement
} else {
    console.log('HTMLTemplateElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLTemplateElement polyfill
if (!window.HTMLTemplateElement) {
    // 在这里添加polyfill实现
    console.log('加载HTMLTemplateElement polyfill');
}
```

