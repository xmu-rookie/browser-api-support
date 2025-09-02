# InputEvent.inputType API 兼容性数据

## 基本信息

- **API名称**: `InputEvent.inputType`
- **MDN文档**: [InputEvent.inputType](https://developer.mozilla.org/docs/Web/API/InputEvent/inputType)
- **规范文档**: [查看规范](https://w3c.github.io/uievents/#dom-inputevent-inputtype)
- **标签**: `web-features:input-event`

## 使用示例

### 基本用法

```javascript
// InputEvent.inputType 使用示例
// 请查阅MDN文档了解具体用法
console.log('InputEvent.inputType API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 60 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 66 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 10.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 60

### Firefox

- **支持版本**: 66

### Safari

- **支持版本**: 10.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查InputEvent.inputType是否支持
function isInputEventInputTypeSupported() {
    return 'inputType' in inputevent && typeof inputevent.inputType === 'function';
}

if (isInputEventInputTypeSupported()) {
    console.log('InputEvent.inputType 支持');
    // 使用InputEvent.inputType
} else {
    console.log('InputEvent.inputType 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// InputEvent.inputType polyfill
if (!inputevent.inputType) {
    // 在这里添加polyfill实现
    console.log('加载InputEvent.inputType polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **insertFromPasteAsQuotation**: `insertFromPasteAsQuotation` input type

