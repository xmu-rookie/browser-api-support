# XMLHttpRequest.responseXML API 兼容性数据

## 基本信息

- **API名称**: `XMLHttpRequest.responseXML`
- **MDN文档**: [XMLHttpRequest.responseXML](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/responseXML)
- **规范文档**: [查看规范](https://xhr.spec.whatwg.org/#the-responsexml-attribute)
- **标签**: `web-features:xhr`

## 使用示例

### 基本用法

```javascript
// XMLHttpRequest.responseXML 使用示例
// 请查阅MDN文档了解具体用法
console.log('XMLHttpRequest.responseXML API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 | Before Firefox 51, an error parsing the received data added a `<parsererror>` node to the top of the... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 7 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
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
- **注意事项**:
  - Before Firefox 51, an error parsing the received data added a `<parsererror>` node to the top of the `Document` and then returned the `Document` in whatever state it happens to be in. This was inconsistent with the specification. Starting with Firefox 51, this scenario now correctly returns `null` as per the spec.

### Internet Explorer

- **支持版本**: 7

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

