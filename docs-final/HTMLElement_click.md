# HTMLElement.click API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.click`
- **MDN文档**: [HTMLElement.click](https://developer.mozilla.org/docs/Web/API/HTMLElement/click)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/interaction.html#dom-click-dev)
- **标签**: `web-features:mouse-events`

## 使用示例

### 基本用法

```javascript
// HTMLElement.click 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.click API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 9 | Before Chrome 19, `click()` is only defined on buttons and inputs. |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3 | Before Firefox 5, `click()` is only defined on buttons and inputs, and has no effect on text and fil... |
| Firefox Android | 4 | Before Firefox 5, `click()` is only defined on buttons and inputs, and has no effect on text and fil... |
| Internet Explorer | 5.5 |  |
| Oculus | 同主版本 |  |
| Opera | 10.5 |  |
| Opera Android | 11 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 9
- **注意事项**:
  - Before Chrome 19, `click()` is only defined on buttons and inputs.

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3
- **注意事项**:
  - Before Firefox 5, `click()` is only defined on buttons and inputs, and has no effect on text and file inputs.
  - Starting in Firefox 75, the `click()` function works even when the element is not attached to a DOM tree.

### Firefox Android

- **支持版本**: 4
- **注意事项**:
  - Before Firefox 5, `click()` is only defined on buttons and inputs, and has no effect on text and file inputs.
  - Starting in Firefox for Android 79, the `click()` function works even when the element is not attached to a DOM tree.

### Internet Explorer

- **支持版本**: 5.5

### Opera

- **支持版本**: 10.5

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 6

