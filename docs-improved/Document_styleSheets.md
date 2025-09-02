# Document.styleSheets API 兼容性数据

## 基本信息

- **API名称**: `Document.styleSheets`
- **MDN文档**: [Document.styleSheets](https://developer.mozilla.org/docs/Web/API/Document/styleSheets)
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom/#dom-documentorshadowroot-stylesheets)
- **标签**: `web-features:css-object-model`

## 使用示例

### 基本用法

```javascript
// Document.styleSheets 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.styleSheets API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 4 |  |
| Safari iOS | 同主版本 |  |
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

- **支持版本**: 4

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.styleSheets是否支持
function isDocumentStyleSheetsSupported() {
    return 'styleSheets' in document && typeof document.styleSheets === 'function';
}

if (isDocumentStyleSheetsSupported()) {
    console.log('Document.styleSheets 支持');
    // 使用Document.styleSheets
} else {
    console.log('Document.styleSheets 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.styleSheets polyfill
if (!document.styleSheets) {
    // 在这里添加polyfill实现
    console.log('加载Document.styleSheets polyfill');
}
```

