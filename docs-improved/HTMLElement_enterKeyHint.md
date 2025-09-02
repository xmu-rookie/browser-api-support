# HTMLElement.enterKeyHint API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.enterKeyHint`
- **MDN文档**: [HTMLElement.enterKeyHint](https://developer.mozilla.org/docs/Web/API/HTMLElement/enterKeyHint)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/interaction.html#dom-enterkeyhint)
- **标签**: `web-features:enterkeyhint`

## 使用示例

### 基本用法

```javascript
// HTMLElement.enterKeyHint 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.enterKeyHint API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 77 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 94 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 13.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 77

### Firefox

- **支持版本**: 94

### Safari

- **支持版本**: 13.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.enterKeyHint是否支持
function isHTMLElementEnterKeyHintSupported() {
    return 'enterKeyHint' in htmlelement && typeof htmlelement.enterKeyHint === 'function';
}

if (isHTMLElementEnterKeyHintSupported()) {
    console.log('HTMLElement.enterKeyHint 支持');
    // 使用HTMLElement.enterKeyHint
} else {
    console.log('HTMLElement.enterKeyHint 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.enterKeyHint polyfill
if (!htmlelement.enterKeyHint) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.enterKeyHint polyfill');
}
```

