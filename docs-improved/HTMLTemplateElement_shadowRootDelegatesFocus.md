# HTMLTemplateElement.shadowRootDelegatesFocus API 兼容性数据

## 基本信息

- **API名称**: `HTMLTemplateElement.shadowRootDelegatesFocus`
- **MDN文档**: [HTMLTemplateElement.shadowRootDelegatesFocus](https://developer.mozilla.org/docs/Web/API/HTMLTemplateElement/shadowRootDelegatesFocus)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/scripting.html#dom-template-shadowrootdelegatesfocus)
- **标签**: `web-features:declarative-shadow-dom`

## 使用示例

### 基本用法

```javascript
// HTMLTemplateElement.shadowRootDelegatesFocus 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLTemplateElement.shadowRootDelegatesFocus API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 123 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 123 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 123

### Firefox

- **支持版本**: 123

### Safari

- **支持版本**: 18

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLTemplateElement.shadowRootDelegatesFocus是否支持
function isHTMLTemplateElementShadowRootDelegatesFocusSupported() {
    return 'shadowRootDelegatesFocus' in htmltemplateelement && typeof htmltemplateelement.shadowRootDelegatesFocus === 'function';
}

if (isHTMLTemplateElementShadowRootDelegatesFocusSupported()) {
    console.log('HTMLTemplateElement.shadowRootDelegatesFocus 支持');
    // 使用HTMLTemplateElement.shadowRootDelegatesFocus
} else {
    console.log('HTMLTemplateElement.shadowRootDelegatesFocus 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLTemplateElement.shadowRootDelegatesFocus polyfill
if (!htmltemplateelement.shadowRootDelegatesFocus) {
    // 在这里添加polyfill实现
    console.log('加载HTMLTemplateElement.shadowRootDelegatesFocus polyfill');
}
```

