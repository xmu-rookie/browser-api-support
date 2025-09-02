# HTMLElement.translate API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.translate`
- **MDN文档**: [HTMLElement.translate](https://developer.mozilla.org/docs/Web/API/HTMLElement/translate)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dom.html#dom-translate)
- **标签**: `web-features:translate`

## 使用示例

### 基本用法

```javascript
// HTMLElement.translate 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.translate API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 19 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 111 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 19

### Firefox

- **支持版本**: 111

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.translate是否支持
function isHTMLElementTranslateSupported() {
    return 'translate' in htmlelement && typeof htmlelement.translate === 'function';
}

if (isHTMLElementTranslateSupported()) {
    console.log('HTMLElement.translate 支持');
    // 使用HTMLElement.translate
} else {
    console.log('HTMLElement.translate 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.translate polyfill
if (!htmlelement.translate) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.translate polyfill');
}
```

