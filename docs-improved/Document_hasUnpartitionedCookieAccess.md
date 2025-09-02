# Document.hasUnpartitionedCookieAccess API 兼容性数据

## 基本信息

- **API名称**: `Document.hasUnpartitionedCookieAccess`
- **MDN文档**: [Document.hasUnpartitionedCookieAccess](https://developer.mozilla.org/docs/Web/API/Document/hasUnpartitionedCookieAccess)
- **规范文档**: [查看规范](https://privacycg.github.io/saa-non-cookie-storage/#dom-document-hasunpartitionedcookieaccess)
- **标签**: `web-features:non-cookie-storage-access`

## 使用示例

### 基本用法

```javascript
// Document.hasUnpartitionedCookieAccess 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.hasUnpartitionedCookieAccess API');
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
| Safari | 不支持 |  |
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

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.hasUnpartitionedCookieAccess是否支持
function isDocumentHasUnpartitionedCookieAccessSupported() {
    return 'hasUnpartitionedCookieAccess' in document && typeof document.hasUnpartitionedCookieAccess === 'function';
}

if (isDocumentHasUnpartitionedCookieAccessSupported()) {
    console.log('Document.hasUnpartitionedCookieAccess 支持');
    // 使用Document.hasUnpartitionedCookieAccess
} else {
    console.log('Document.hasUnpartitionedCookieAccess 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.hasUnpartitionedCookieAccess polyfill
if (!document.hasUnpartitionedCookieAccess) {
    // 在这里添加polyfill实现
    console.log('加载Document.hasUnpartitionedCookieAccess polyfill');
}
```

