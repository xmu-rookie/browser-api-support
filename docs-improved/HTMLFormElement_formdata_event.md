# HTMLFormElement.formdata_event API 兼容性数据

## 基本信息

- **API名称**: `HTMLFormElement.formdata_event`
- **MDN文档**: [HTMLFormElement.formdata_event](https://developer.mozilla.org/docs/Web/API/HTMLFormElement/formdata_event)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/indices.html#event-formdata)
- **标签**: `web-features:form`
- **描述**: `formdata` event

## 使用示例

### 基本用法

```javascript
// HTMLFormElement.formdata_event 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLFormElement.formdata_event API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 77 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 72 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 77

### Firefox

- **支持版本**: 72

### Safari

- **支持版本**: 15

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLFormElement.formdata_event是否支持
function isHTMLFormElementFormdata_eventSupported() {
    return 'formdata_event' in htmlformelement && typeof htmlformelement.formdata_event === 'function';
}

if (isHTMLFormElementFormdata_eventSupported()) {
    console.log('HTMLFormElement.formdata_event 支持');
    // 使用HTMLFormElement.formdata_event
} else {
    console.log('HTMLFormElement.formdata_event 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLFormElement.formdata_event polyfill
if (!htmlformelement.formdata_event) {
    // 在这里添加polyfill实现
    console.log('加载HTMLFormElement.formdata_event polyfill');
}
```

