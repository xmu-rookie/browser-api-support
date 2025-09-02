# HTMLInputElement.showPicker.datetime_local_input API 兼容性数据

## 基本信息

- **API名称**: `HTMLInputElement.showPicker.datetime_local_input`
- **标签**: `web-features:show-picker-input`
- **描述**: `datetime-local` input

## 使用示例

### 基本用法

```javascript
// HTMLInputElement.showPicker.datetime_local_input 使用示例
// 请查阅MDN文档了解具体用法
console.log('HTMLInputElement.showPicker.datetime_local_input API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 99 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 101 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 17.4 |  |
| Safari iOS | 不支持 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 99

### Firefox

- **支持版本**: 101

### Safari

- **支持版本**: 17.4

### Safari iOS

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查HTMLInputElement.showPicker.datetime_local_input是否支持
function isHTMLInputElementShowPickerSupported() {
    return 'showPicker' in htmlinputelement && typeof htmlinputelement.showPicker === 'function';
}

if (isHTMLInputElementShowPickerSupported()) {
    console.log('HTMLInputElement.showPicker.datetime_local_input 支持');
    // 使用HTMLInputElement.showPicker.datetime_local_input
} else {
    console.log('HTMLInputElement.showPicker.datetime_local_input 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// HTMLInputElement.showPicker.datetime_local_input polyfill
if (!htmlinputelement.showPicker) {
    // 在这里添加polyfill实现
    console.log('加载HTMLInputElement.showPicker.datetime_local_input polyfill');
}
```

