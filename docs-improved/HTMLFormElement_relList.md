# HTMLFormElement.relList API 兼容性数据

## 基本信息

- **API名称**: `HTMLFormElement.relList`
- **MDN文档**: [HTMLFormElement.relList](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/relList)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/forms.html#dom-form-rellist)
- **标签**: `web-features:form`

## 使用示例

### 基本用法

```javascript
// HTMLFormElement.relList 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLFormElement.relList API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 108 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 111 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 108

### Firefox

- **支持版本**: 111

### Safari

- **支持版本**: 15.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLFormElement.relList是否支持
function isHTMLFormElementRelListSupported() {
    return 'relList' in htmlformelement && typeof htmlformelement.relList === 'function';
}

if (isHTMLFormElementRelListSupported()) {
    console.log('HTMLFormElement.relList 支持');
    // 使用HTMLFormElement.relList
} else {
    console.log('HTMLFormElement.relList 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLFormElement.relList polyfill
if (!htmlformelement.relList) {
    // 在这里添加polyfill实现
    console.log('加载HTMLFormElement.relList polyfill');
}
```

