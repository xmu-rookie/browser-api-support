# FormDataEvent API 兼容性数据

## 基本信息

- **API名称**: `FormDataEvent`
- **MDN文档**: [FormDataEvent](https://developer.mozilla.org/docs/Web/API/FormDataEvent)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-formdataevent-interface)
- **标签**: `web-features:form`

## 使用示例

### 基本用法

```javascript
// FormDataEvent 使用示例
// 请查阅MDN文档了解具体用法
console.log('FormDataEvent API');
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
// 检查FormDataEvent是否支持
function isFormDataEventSupported() {
    return 'FormDataEvent' in window || typeof FormDataEvent !== 'undefined';
}

if (isFormDataEventSupported()) {
    console.log('FormDataEvent 支持');
    // 使用FormDataEvent
} else {
    console.log('FormDataEvent 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// FormDataEvent polyfill
if (!window.FormDataEvent) {
    // 在这里添加polyfill实现
    console.log('加载FormDataEvent polyfill');
}
```

