# Document.hasStorageAccess API 兼容性数据

## 基本信息

- **API名称**: `Document.hasStorageAccess`
- **MDN文档**: [Document.hasStorageAccess](https://developer.mozilla.org/docs/Web/API/Document/hasStorageAccess)
- **规范文档**: [查看规范](https://privacycg.github.io/storage-access/#dom-document-hasstorageaccess)
- **标签**: `web-features:storage-access`

## 使用示例

### 基本用法

```javascript
// Document.hasStorageAccess 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.hasStorageAccess API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 119 |  |
| Chrome Android | 120 |  |
| Edge | 85 |  |
| Firefox | 65 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 119

### Chrome Android

- **支持版本**: 120

### Edge

- **支持版本**: 85

### Firefox

- **支持版本**: 65

### Safari

- **支持版本**: 11.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.hasStorageAccess是否支持
function isDocumentHasStorageAccessSupported() {
    return 'hasStorageAccess' in document && typeof document.hasStorageAccess === 'function';
}

if (isDocumentHasStorageAccessSupported()) {
    console.log('Document.hasStorageAccess 支持');
    // 使用Document.hasStorageAccess
} else {
    console.log('Document.hasStorageAccess 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.hasStorageAccess polyfill
if (!document.hasStorageAccess) {
    // 在这里添加polyfill实现
    console.log('加载Document.hasStorageAccess polyfill');
}
```

