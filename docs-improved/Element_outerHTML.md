# Element.outerHTML API 兼容性数据

## 基本信息

- **API名称**: `Element.outerHTML`
- **MDN文档**: [Element.outerHTML](https://developer.mozilla.org/docs/Web/API/Element/outerHTML)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-element-outerhtml)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Element.outerHTML 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.outerHTML API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 11 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| Oculus | 同主版本 |  |
| Opera | 8 |  |
| Opera Android | 10.1 |  |
| Safari | 1.3 |  |
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

- **支持版本**: 11

### Internet Explorer

- **支持版本**: 4

### Opera

- **支持版本**: 8

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1.3

### WebView Android

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.outerHTML是否支持
function isElementOuterHTMLSupported() {
    return 'outerHTML' in element && typeof element.outerHTML === 'function';
}

if (isElementOuterHTMLSupported()) {
    console.log('Element.outerHTML 支持');
    // 使用Element.outerHTML
} else {
    console.log('Element.outerHTML 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.outerHTML polyfill
if (!element.outerHTML) {
    // 在这里添加polyfill实现
    console.log('加载Element.outerHTML polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **enforces_trusted_types**: Requires `TrustedHTML` instance when trusted types are enforced
- **escapes_lt_gt_in_attributes**: Serializes `<` and `>` in attributes as `&amp;lt;` and `&amp;gt;` (see [this spec issue](https://github.com/whatwg/html/issues/6235))

