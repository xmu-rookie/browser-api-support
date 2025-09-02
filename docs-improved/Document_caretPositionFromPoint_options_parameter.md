# Document.caretPositionFromPoint.options_parameter API 兼容性数据

## 基本信息

- **API名称**: `Document.caretPositionFromPoint.options_parameter`
- **标签**: `web-features:document-caretpositionfrompoint`
- **描述**: `options` parameter

## 使用示例

### 基本用法

```javascript
// Document.caretPositionFromPoint.options_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.caretPositionFromPoint.options_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 128 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | preview |  |
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

- **支持版本**: 128

### Firefox

- **支持版本**: preview
- **支持版本**: 131
- **移除版本**: 133

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.caretPositionFromPoint.options_parameter是否支持
function isDocumentCaretPositionFromPointSupported() {
    return 'caretPositionFromPoint' in document && typeof document.caretPositionFromPoint === 'function';
}

if (isDocumentCaretPositionFromPointSupported()) {
    console.log('Document.caretPositionFromPoint.options_parameter 支持');
    // 使用Document.caretPositionFromPoint.options_parameter
} else {
    console.log('Document.caretPositionFromPoint.options_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.caretPositionFromPoint.options_parameter polyfill
if (!document.caretPositionFromPoint) {
    // 在这里添加polyfill实现
    console.log('加载Document.caretPositionFromPoint.options_parameter polyfill');
}
```

