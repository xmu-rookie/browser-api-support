# Element.setAttributeNodeNS API 兼容性数据

## 基本信息

- **API名称**: `Element.setAttributeNodeNS`
- **MDN文档**: [Element.setAttributeNodeNS](https://developer.mozilla.org/docs/Web/API/Element/setAttributeNodeNS)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-element-setattributenodens)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Element.setAttributeNodeNS 使用示例
// 请查阅MDN文档了解具体用法
console.log('Element.setAttributeNodeNS API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 | Returns a `ClientRectList` with [`ClientRect`](https://docs.microsoft.com/en-us/previous-versions/hh... |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 | Returns a `ClientRectList` with [`ClientRect`](https://docs.microsoft.com/en-us/previous-versions/hh... |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
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
- **注意事项**:
  - Returns a `ClientRectList` with [`ClientRect`](https://docs.microsoft.com/en-us/previous-versions/hh826029(v=vs.85)) objects (which do not contain `x` and `y` properties) instead of [`DOMRect`](https://developer.mozilla.org/docs/Web/API/DOMRect) objects.

### Firefox

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 9
- **注意事项**:
  - Returns a `ClientRectList` with [`ClientRect`](https://docs.microsoft.com/en-us/previous-versions/hh826029(v=vs.85)) objects (which do not contain `x` and `y` properties) instead of [`DOMRect`](https://developer.mozilla.org/docs/Web/API/DOMRect) objects.

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Element.setAttributeNodeNS是否支持
function isElementSetAttributeNodeNSSupported() {
    return 'setAttributeNodeNS' in element && typeof element.setAttributeNodeNS === 'function';
}

if (isElementSetAttributeNodeNSSupported()) {
    console.log('Element.setAttributeNodeNS 支持');
    // 使用Element.setAttributeNodeNS
} else {
    console.log('Element.setAttributeNodeNS 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Element.setAttributeNodeNS polyfill
if (!element.setAttributeNodeNS) {
    // 在这里添加polyfill实现
    console.log('加载Element.setAttributeNodeNS polyfill');
}
```

