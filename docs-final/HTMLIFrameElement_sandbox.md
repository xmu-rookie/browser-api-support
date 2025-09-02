# HTMLIFrameElement.sandbox API 兼容性数据

## 基本信息

- **API名称**: `HTMLIFrameElement.sandbox`
- **MDN文档**: [HTMLIFrameElement.sandbox](https://developer.mozilla.org/docs/Web/API/HTMLIFrameElement/sandbox)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#dom-iframe-sandbox)
- **标签**: `web-features:iframe-sandbox`

## 使用示例

### 基本用法

```javascript
// HTMLIFrameElement.sandbox 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLIFrameElement.sandbox API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 5 | Before Chrome 50, this property returned the deprecated child `DOMSettableTokenList` instead of `DOM... |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 17 | Previously, the type of `sandbox` was a `DOMString` instead of a `DOMSettableTokenList`. This has be... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 5 |  |
| Safari iOS | 4 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 5
- **注意事项**:
  - Before Chrome 50, this property returned the deprecated child `DOMSettableTokenList` instead of `DOMTokenList`.

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 17
- **注意事项**:
  - Previously, the type of `sandbox` was a `DOMString` instead of a `DOMSettableTokenList`. This has been fixed with Firefox 29. Other browsers may still implement the property as `DOMString` since it was a late change in the specification.

### Internet Explorer

- **支持版本**: 10

### Safari

- **支持版本**: 5

### Safari iOS

- **支持版本**: 4

