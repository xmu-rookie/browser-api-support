# Element.insertAdjacentHTML API 兼容性数据

## 基本信息

- **API名称**: `Element.insertAdjacentHTML`
- **MDN文档**: [Element.insertAdjacentHTML](https://developer.mozilla.org/docs/Web/API/Element/insertAdjacentHTML)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#the-insertadjacenthtml()-method)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Element.insertAdjacentHTML 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.insertAdjacentHTML API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 8 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 | Before Internet Explorer 10, throws an "Invalid target element for this operation." error when calle... |
| Oculus | 同主版本 |  |
| Opera | 8 |  |
| Opera Android | 10.1 |  |
| Safari | 4 |  |
| Safari iOS | 4 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 17
- **支持版本**: 12
- **移除版本**: 17
- **部分实现**: 是
- **注意事项**:
  - Only supported for [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement), not all `Element` objects, such as [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement).

### Firefox

- **支持版本**: 8

### Internet Explorer

- **支持版本**: 4
- **部分实现**: 是
- **注意事项**:
  - Before Internet Explorer 10, throws an "Invalid target element for this operation." error when called on a `<table>`, `<tbody>`, `<thead>`, or `<tr>` element.
  - Only supported for [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement), not all `Element` objects, such as [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement).

### Opera

- **支持版本**: 8

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 4

### Safari iOS

- **支持版本**: 4

## 相关子API

该API包含以下子功能：

- **enforces_trusted_types**: Requires `TrustedHTML` instance when trusted types are enforced

