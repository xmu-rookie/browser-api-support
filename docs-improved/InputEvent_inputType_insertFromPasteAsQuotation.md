# InputEvent.inputType.insertFromPasteAsQuotation API 兼容性数据

## 基本信息

- **API名称**: `InputEvent.inputType.insertFromPasteAsQuotation`
- **标签**: `web-features:input-event`
- **描述**: `insertFromPasteAsQuotation` input type

## 使用示例

### 基本用法

```javascript
// InputEvent.inputType.insertFromPasteAsQuotation 使用示例
// 请查阅MDN文档了解具体用法
console.log('InputEvent.inputType.insertFromPasteAsQuotation API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 67 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 不支持 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 不支持

### Firefox

- **支持版本**: 67

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查InputEvent.inputType.insertFromPasteAsQuotation是否支持
function isInputEventInputTypeSupported() {
    return 'inputType' in inputevent && typeof inputevent.inputType === 'function';
}

if (isInputEventInputTypeSupported()) {
    console.log('InputEvent.inputType.insertFromPasteAsQuotation 支持');
    // 使用InputEvent.inputType.insertFromPasteAsQuotation
} else {
    console.log('InputEvent.inputType.insertFromPasteAsQuotation 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// InputEvent.inputType.insertFromPasteAsQuotation polyfill
if (!inputevent.inputType) {
    // 在这里添加polyfill实现
    console.log('加载InputEvent.inputType.insertFromPasteAsQuotation polyfill');
}
```

