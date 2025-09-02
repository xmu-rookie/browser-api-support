# Element.innerHTML API 兼容性数据

## 基本信息

- **API名称**: `Element.innerHTML`
- **MDN文档**: [Element.innerHTML](https://developer.mozilla.org/docs/Web/API/Element/innerHTML)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-element-innerhtml)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Element.innerHTML 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.innerHTML API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| Oculus | 同主版本 |  |
| Opera | 8 |  |
| Opera Android | 10.1 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 1 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 4

### Opera

- **支持版本**: 8

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1

### WebView Android

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.innerHTML是否支持
function isElementInnerHTMLSupported() {
    return 'innerHTML' in element && typeof element.innerHTML === 'function';
}

if (isElementInnerHTMLSupported()) {
    console.log('Element.innerHTML 支持');
    // 使用Element.innerHTML
} else {
    console.log('Element.innerHTML 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.innerHTML polyfill
if (!element.innerHTML) {
    // 在这里添加polyfill实现
    console.log('加载Element.innerHTML polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **enforces_trusted_types**: Requires `TrustedHTML` instance when trusted types are enforced
- **escapes_lt_gt_in_attributes**: Serializes `<` and `>` in attributes as `&amp;lt;` and `&amp;gt;` (see [this spec issue](https://github.com/whatwg/html/issues/6235))

