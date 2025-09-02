# Element.getElementsByTagNameNS API 兼容性数据

## 基本信息

- **API名称**: `Element.getElementsByTagNameNS`
- **MDN文档**: [Element.getElementsByTagNameNS](https://developer.mozilla.org/docs/Web/API/Element/getElementsByTagNameNS)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-element-getelementsbytagnamens)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Element.getElementsByTagNameNS 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.getElementsByTagNameNS API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 | Initially, this method was returning a `NodeList`; it was then changed to reflect the spec change. |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 | The behavior of `element.getElementsByTagNameNS` changed between Firefox 3.5 and Firefox 3.6. In Fir... |
| Firefox Android | 4 | Before Firefox 19, this method was returning a `NodeList`; it was then changed to reflects the spec ... |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 | Initially, this method was returning a `NodeList`; it was then changed to reflect the spec change. |
| Opera Android | ≤12.1 | Initially, this method was returning a `NodeList`; it was then changed to reflect the spec change. |
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
  - The behavior of `element.getElementsByTagNameNS` changed between Firefox 3.5 and Firefox 3.6. In Firefox 3.5 and before, this function would automatically case-fold any queries so that a search for "foo" would match "Foo" or "foo". In Firefox 3.6 and later this function is now case-sensitive so that a query for "foo" will only match "foo" and not "Foo". For more background on this, please see the [comment from Henri Sivonen about the change](https://bugzil.la/542185#c5). You can also look at the [relevant part of the standard, which states which parts of the API are case-sensitive and which parts aren't](https://developer.mozilla.org/docs/Case_Sensitivity_in_class_and_id_Names).
  - Before Firefox 19, this method was returning a `NodeList`; it was then changed to reflects the spec change.

### Firefox Android

- **支持版本**: 4
- **注意事项**:
  - Before Firefox 19, this method was returning a `NodeList`; it was then changed to reflects the spec change.

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: ≤12.1
- **注意事项**:
  - Initially, this method was returning a `NodeList`; it was then changed to reflect the spec change.

### Opera Android

- **支持版本**: ≤12.1
- **注意事项**:
  - Initially, this method was returning a `NodeList`; it was then changed to reflect the spec change.

### Safari

- **支持版本**: 1
- **注意事项**:
  - Initially, this method was returning a `NodeList`; it was then changed to reflect the spec change.

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.getElementsByTagNameNS是否支持
function isElementGetElementsByTagNameNSSupported() {
    return 'getElementsByTagNameNS' in element && typeof element.getElementsByTagNameNS === 'function';
}

if (isElementGetElementsByTagNameNSSupported()) {
    console.log('Element.getElementsByTagNameNS 支持');
    // 使用Element.getElementsByTagNameNS
} else {
    console.log('Element.getElementsByTagNameNS 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.getElementsByTagNameNS polyfill
if (!element.getElementsByTagNameNS) {
    // 在这里添加polyfill实现
    console.log('加载Element.getElementsByTagNameNS polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **all_elements_selector**: `getElementsByTagNameNS(namespaceURI, "*")`

