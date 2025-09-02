# HTMLElement.spellcheck API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.spellcheck`
- **MDN文档**: [HTMLElement.spellcheck](https://developer.mozilla.org/docs/Web/API/HTMLElement/spellcheck)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/interaction.html#dom-spellcheck-dev)
- **标签**: `web-features:spellcheck`

## 使用示例

### 基本用法

```javascript
// HTMLElement.spellcheck 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.spellcheck API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 9 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 2 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 5.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 9

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 2

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 5.1

### WebView Android

- **支持版本**: 3

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.spellcheck是否支持
function isHTMLElementSpellcheckSupported() {
    return 'spellcheck' in htmlelement && typeof htmlelement.spellcheck === 'function';
}

if (isHTMLElementSpellcheckSupported()) {
    console.log('HTMLElement.spellcheck 支持');
    // 使用HTMLElement.spellcheck
} else {
    console.log('HTMLElement.spellcheck 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.spellcheck polyfill
if (!htmlelement.spellcheck) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.spellcheck polyfill');
}
```

