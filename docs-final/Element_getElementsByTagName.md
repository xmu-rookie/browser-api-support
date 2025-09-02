# Element.getElementsByTagName API 兼容性数据

## 基本信息

- **API名称**: `Element.getElementsByTagName`
- **MDN文档**: [Element.getElementsByTagName](https://developer.mozilla.org/docs/Web/API/Element/getElementsByTagName)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-element-getelementsbytagname)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Element.getElementsByTagName 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.getElementsByTagName API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 | Initially, this method was returning a `NodeList`; it was then changed to reflect the spec change. |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 | Before Firefox 19, this method was returning a `NodeList`; it was then changed to reflect the change... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5.5 |  |
| Oculus | 同主版本 |  |
| Opera | 8 | Initially, this method was returning a `NodeList`; it was then changed to reflect the spec change. |
| Opera Android | 10.1 |  |
| Safari | 1 | Initially, this method was returning a `NodeList`; it was then changed to reflect the spec change. |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1
- **注意事项**:
  - Initially, this method was returning a `NodeList`; it was then changed to reflect the spec change.

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 1
- **注意事项**:
  - Before Firefox 19, this method was returning a `NodeList`; it was then changed to reflect the change in the spec.

### Internet Explorer

- **支持版本**: 5.5

### Opera

- **支持版本**: 8
- **注意事项**:
  - Initially, this method was returning a `NodeList`; it was then changed to reflect the spec change.

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1
- **注意事项**:
  - Initially, this method was returning a `NodeList`; it was then changed to reflect the spec change.

## 相关子API

该API包含以下子功能：

- **all_elements_selector**: `getElementsByTagName("*")`

