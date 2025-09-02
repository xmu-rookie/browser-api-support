# Document.parseHTML_static API 兼容性数据

## 基本信息

- **API名称**: `Document.parseHTML_static`
- **MDN文档**: [Document.parseHTML_static](https://developer.mozilla.org/docs/Web/API/Document/parseHTML_static)
- **规范文档**: [查看规范](https://wicg.github.io/sanitizer-api/#dom-document-parsehtml)
- **标签**: `web-features:sanitizer`
- **描述**: `parseHTML` static method

## 使用示例

### 基本用法

```javascript
// Document.parseHTML_static 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.parseHTML_static API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 139 |  |
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

- **支持版本**: 139
- **需要标志**: 
  - dom.security.sanitizer.enabled: true

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.parseHTML_static是否支持
function isDocumentParseHTML_staticSupported() {
    return 'parseHTML_static' in document && typeof document.parseHTML_static === 'function';
}

if (isDocumentParseHTML_staticSupported()) {
    console.log('Document.parseHTML_static 支持');
    // 使用Document.parseHTML_static
} else {
    console.log('Document.parseHTML_static 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.parseHTML_static polyfill
if (!document.parseHTML_static) {
    // 在这里添加polyfill实现
    console.log('加载Document.parseHTML_static polyfill');
}
```

