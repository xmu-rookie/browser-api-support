# HTMLInputElement.selectionchange_event API 兼容性数据

## 基本信息

- **API名称**: `HTMLInputElement.selectionchange_event`
- **MDN文档**: [HTMLInputElement.selectionchange_event](https://developer.mozilla.org/docs/Web/API/HTMLInputElement/selectionchange_event)
- **规范文档**: [查看规范](https://w3c.github.io/selection-api/#selectionchange-event,https://w3c.github.io/selection-api/#dom-globaleventhandlers-onselectionchange)
- **标签**: `web-features:selection-api`
- **描述**: `selectionchange` event

## 使用示例

### 基本用法

```javascript
// HTMLInputElement.selectionchange_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLInputElement.selectionchange_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 127 | Before Chrome 127, a `selectionchange` event was fired on `Document`, see [`Document`'s `selectionch... |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 92 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18 | Before Safari 18, a `selectionchange` event was fired on `Document`, see [`Document`'s `selectioncha... |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 127
- **注意事项**:
  - Before Chrome 127, a `selectionchange` event was fired on `Document`, see [`Document`'s `selectionchange` event](https://developer.mozilla.org/docs/Web/API/Document/selectionchange_event). See [bug 40840956](https://crbug.com/40840956) for firing the event on `<input>` elements.

### Firefox

- **支持版本**: 92

### Safari

- **支持版本**: 18
- **注意事项**:
  - Before Safari 18, a `selectionchange` event was fired on `Document`, see [`Document`'s `selectionchange` event](https://developer.mozilla.org/docs/Web/API/Document/selectionchange_event). See [bug 271033](https://webkit.org/b/271033) for firing the event on `<input>` elements.

