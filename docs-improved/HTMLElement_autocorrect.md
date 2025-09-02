# HTMLElement.autocorrect API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.autocorrect`
- **MDN文档**: [HTMLElement.autocorrect](https://developer.mozilla.org/docs/Web/API/HTMLElement/autocorrect)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/interaction.html#dom-autocorrect)
- **标签**: `web-features:autocorrect`

## 使用示例

### 基本用法

```javascript
// HTMLElement.autocorrect 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.autocorrect API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 136 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 14.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 136

### Safari

- **支持版本**: 14.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLElement.autocorrect是否支持
function isHTMLElementAutocorrectSupported() {
    return 'autocorrect' in htmlelement && typeof htmlelement.autocorrect === 'function';
}

if (isHTMLElementAutocorrectSupported()) {
    console.log('HTMLElement.autocorrect 支持');
    // 使用HTMLElement.autocorrect
} else {
    console.log('HTMLElement.autocorrect 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLElement.autocorrect polyfill
if (!htmlelement.autocorrect) {
    // 在这里添加polyfill实现
    console.log('加载HTMLElement.autocorrect polyfill');
}
```

