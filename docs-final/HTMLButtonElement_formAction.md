# HTMLButtonElement.formAction API 兼容性数据

## 基本信息

- **API名称**: `HTMLButtonElement.formAction`
- **MDN文档**: [HTMLButtonElement.formAction](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement/formAction)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#dom-fs-formaction)
- **标签**: `web-features:button`

## 使用示例

### 基本用法

```javascript
// HTMLButtonElement.formAction 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLButtonElement.formAction API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 9 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 4 | In Firefox 56, the implementation has been updated so that the `formAction` property returns the cor... |
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

- **支持版本**: 4
- **注意事项**:
  - In Firefox 56, the implementation has been updated so that the `formAction` property returns the correct form submission URL, as per spec, when the associated button is being used to submit a form ([bug 1366361](https://bugzil.la/1366361)).

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

