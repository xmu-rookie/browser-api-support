# HTMLOptGroupElement.label API 兼容性数据

## 基本信息

- **API名称**: `HTMLOptGroupElement.label`
- **MDN文档**: [HTMLOptGroupElement.label](https://developer.mozilla.org/docs/Web/API/HTMLOptGroupElement/label)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-elements.html#dom-optgroup-label)
- **标签**: `web-features:select`

## 使用示例

### 基本用法

```javascript
// HTMLOptGroupElement.label 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLOptGroupElement.label API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 6 |  |
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

### Internet Explorer

- **支持版本**: 6

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 3

### Safari iOS

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLOptGroupElement.label是否支持
function isHTMLOptGroupElementLabelSupported() {
    return 'label' in htmloptgroupelement && typeof htmloptgroupelement.label === 'function';
}

if (isHTMLOptGroupElementLabelSupported()) {
    console.log('HTMLOptGroupElement.label 支持');
    // 使用HTMLOptGroupElement.label
} else {
    console.log('HTMLOptGroupElement.label 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLOptGroupElement.label polyfill
if (!htmloptgroupelement.label) {
    // 在这里添加polyfill实现
    console.log('加载HTMLOptGroupElement.label polyfill');
}
```

