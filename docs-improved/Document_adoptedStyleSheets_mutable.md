# Document.adoptedStyleSheets.mutable API 兼容性数据

## 基本信息

- **API名称**: `Document.adoptedStyleSheets.mutable`
- **规范文档**: [查看规范](https://drafts.csswg.org/cssom/#dom-documentorshadowroot-adoptedstylesheets)
- **标签**: `web-features:constructed-stylesheets`
- **描述**: Array value is mutable

## 使用示例

### 基本用法

```javascript
// Document.adoptedStyleSheets.mutable 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.adoptedStyleSheets.mutable API');
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
| Safari | 16.4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 99

### Firefox

- **支持版本**: 101

### Safari

- **支持版本**: 16.4

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.adoptedStyleSheets.mutable是否支持
function isDocumentAdoptedStyleSheetsSupported() {
    return 'adoptedStyleSheets' in document && typeof document.adoptedStyleSheets === 'function';
}

if (isDocumentAdoptedStyleSheetsSupported()) {
    console.log('Document.adoptedStyleSheets.mutable 支持');
    // 使用Document.adoptedStyleSheets.mutable
} else {
    console.log('Document.adoptedStyleSheets.mutable 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.adoptedStyleSheets.mutable polyfill
if (!document.adoptedStyleSheets) {
    // 在这里添加polyfill实现
    console.log('加载Document.adoptedStyleSheets.mutable polyfill');
}
```

