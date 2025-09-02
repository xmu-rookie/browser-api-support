# HTMLElement.tabIndex API 兼容性数据

## 基本信息

- **API名称**: `HTMLElement.tabIndex`
- **MDN文档**: [HTMLElement.tabIndex](https://developer.mozilla.org/docs/Web/API/HTMLElement/tabIndex)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/interaction.html#dom-tabindex)
- **标签**: `web-features:tabindex`

## 使用示例

### 基本用法

```javascript
// HTMLElement.tabIndex 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLElement.tabIndex API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 18 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5.5 | Returns incorrect value for elements without an explicit tabindex attribute. See [issue 4365703](htt... |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 3.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 18
- **支持版本**: 12
- **移除版本**: 18
- **部分实现**: 是
- **注意事项**:
  - Returns incorrect value for elements without an explicit tabindex attribute. See [issue 4365703](https://developer.microsoft.com/microsoft-edge/platform/issues/4365703/) for details.

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 5.5
- **部分实现**: 是
- **注意事项**:
  - Returns incorrect value for elements without an explicit tabindex attribute. See [issue 4365703](https://developer.microsoft.com/microsoft-edge/platform/issues/4365703/) for details.

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 3.1

