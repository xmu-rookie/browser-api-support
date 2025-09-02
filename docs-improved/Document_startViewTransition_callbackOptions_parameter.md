# Document.startViewTransition.callbackOptions_parameter API 兼容性数据

## 基本信息

- **API名称**: `Document.startViewTransition.callbackOptions_parameter`
- **规范文档**: [查看规范](https://drafts.csswg.org/css-view-transitions-2/#dom-document-startviewtransition-callbackoptions-callbackoptions)
- **标签**: `web-features:view-transitions`
- **描述**: `callbackOptions` parameter

## 使用示例

### 基本用法

```javascript
// Document.startViewTransition.callbackOptions_parameter 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.startViewTransition.callbackOptions_parameter API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 125 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 18.2 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 125

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 18.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.startViewTransition.callbackOptions_parameter是否支持
function isDocumentStartViewTransitionSupported() {
    return 'startViewTransition' in document && typeof document.startViewTransition === 'function';
}

if (isDocumentStartViewTransitionSupported()) {
    console.log('Document.startViewTransition.callbackOptions_parameter 支持');
    // 使用Document.startViewTransition.callbackOptions_parameter
} else {
    console.log('Document.startViewTransition.callbackOptions_parameter 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.startViewTransition.callbackOptions_parameter polyfill
if (!document.startViewTransition) {
    // 在这里添加polyfill实现
    console.log('加载Document.startViewTransition.callbackOptions_parameter polyfill');
}
```

