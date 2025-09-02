# HTMLFieldSetElement.elements API 兼容性数据

## 基本信息

- **API名称**: `HTMLFieldSetElement.elements`
- **MDN文档**: [HTMLFieldSetElement.elements](https://developer.mozilla.org/docs/Web/API/HTMLFieldSetElement/elements)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-elements.html#dom-fieldset-elements-dev)
- **标签**: `web-features:fieldset`

## 使用示例

### 基本用法

```javascript
// HTMLFieldSetElement.elements 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLFieldSetElement.elements API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 21 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 4 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 1.0 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 21

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 4

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 7

### Samsung Internet

- **支持版本**: 1.0

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLFieldSetElement.elements是否支持
function isHTMLFieldSetElementElementsSupported() {
    return 'elements' in htmlfieldsetelement && typeof htmlfieldsetelement.elements === 'function';
}

if (isHTMLFieldSetElementElementsSupported()) {
    console.log('HTMLFieldSetElement.elements 支持');
    // 使用HTMLFieldSetElement.elements
} else {
    console.log('HTMLFieldSetElement.elements 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLFieldSetElement.elements polyfill
if (!htmlfieldsetelement.elements) {
    // 在这里添加polyfill实现
    console.log('加载HTMLFieldSetElement.elements polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **type_HTMLCollection**: Returns an `HTMLCollection`

