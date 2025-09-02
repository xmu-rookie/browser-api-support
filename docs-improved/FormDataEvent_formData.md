# FormDataEvent.formData API 兼容性数据

## 基本信息

- **API名称**: `FormDataEvent.formData`
- **MDN文档**: [FormDataEvent.formData](https://developer.mozilla.org/docs/Web/API/FormDataEvent/formData)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-formdataevent-interface:dom-formdataevent-formdata-2)
- **标签**: `web-features:form`

## 使用示例

### 基本用法

```javascript
// FormDataEvent.formData 使用示例
// 请查阅MDN文档了解具体用法
console.log('FormDataEvent.formData API');
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
// 检查FormDataEvent.formData是否支持
function isFormDataEventFormDataSupported() {
    return 'formData' in formdataevent && typeof formdataevent.formData === 'function';
}

if (isFormDataEventFormDataSupported()) {
    console.log('FormDataEvent.formData 支持');
    // 使用FormDataEvent.formData
} else {
    console.log('FormDataEvent.formData 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FormDataEvent.formData polyfill
if (!formdataevent.formData) {
    // 在这里添加polyfill实现
    console.log('加载FormDataEvent.formData polyfill');
}
```

