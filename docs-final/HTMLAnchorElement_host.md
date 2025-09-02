# HTMLAnchorElement.host API 兼容性数据

## 基本信息

- **API名称**: `HTMLAnchorElement.host`
- **MDN文档**: [HTMLAnchorElement.host](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement/host)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/links.html#dom-hyperlink-host-dev)
- **标签**: `web-features:a`

## 使用示例

### 基本用法

```javascript
// HTMLAnchorElement.host 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLAnchorElement.host API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5.5 | In Internet Explorer 9, the host of an [`<a>`](https://developer.mozilla.org/docs/Web/HTML/Reference... |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 5.5
- **注意事项**:
  - In Internet Explorer 9, the host of an [`<a>`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/a) always include the port (e.g. `developer.mozilla.org:443`), even if there is no explicit port in the `href` attribute value.

### Safari

- **支持版本**: 1

