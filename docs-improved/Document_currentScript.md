# Document.currentScript API 兼容性数据

## 基本信息

- **API名称**: `Document.currentScript`
- **MDN文档**: [Document.currentScript](https://developer.mozilla.org/docs/Web/API/Document/currentScript)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dom.html#dom-document-currentscript-dev)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Document.currentScript 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.currentScript API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 29 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 4 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 8 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 29

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 4

### Safari

- **支持版本**: 8

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.currentScript是否支持
function isDocumentCurrentScriptSupported() {
    return 'currentScript' in document && typeof document.currentScript === 'function';
}

if (isDocumentCurrentScriptSupported()) {
    console.log('Document.currentScript 支持');
    // 使用Document.currentScript
} else {
    console.log('Document.currentScript 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.currentScript polyfill
if (!document.currentScript) {
    // 在这里添加polyfill实现
    console.log('加载Document.currentScript polyfill');
}
```

