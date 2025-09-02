# HTMLTemplateElement.shadowRootMode API 兼容性数据

## 基本信息

- **API名称**: `HTMLTemplateElement.shadowRootMode`
- **MDN文档**: [HTMLTemplateElement.shadowRootMode](https://developer.mozilla.org/docs/Web/API/HTMLTemplateElement/shadowRootMode)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/scripting.html#dom-template-shadowrootmode)
- **标签**: `web-features:declarative-shadow-dom`

## 使用示例

### 基本用法

```javascript
// HTMLTemplateElement.shadowRootMode 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLTemplateElement.shadowRootMode API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 111 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 123 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 111

### Firefox

- **支持版本**: 123

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLTemplateElement.shadowRootMode是否支持
function isHTMLTemplateElementShadowRootModeSupported() {
    return 'shadowRootMode' in htmltemplateelement && typeof htmltemplateelement.shadowRootMode === 'function';
}

if (isHTMLTemplateElementShadowRootModeSupported()) {
    console.log('HTMLTemplateElement.shadowRootMode 支持');
    // 使用HTMLTemplateElement.shadowRootMode
} else {
    console.log('HTMLTemplateElement.shadowRootMode 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLTemplateElement.shadowRootMode polyfill
if (!htmltemplateelement.shadowRootMode) {
    // 在这里添加polyfill实现
    console.log('加载HTMLTemplateElement.shadowRootMode polyfill');
}
```

