# Document.requestStorageAccess API 兼容性数据

## 基本信息

- **API名称**: `Document.requestStorageAccess`
- **MDN文档**: [Document.requestStorageAccess](https://developer.mozilla.org/docs/Web/API/Document/requestStorageAccess)
- **规范文档**: [查看规范](https://privacycg.github.io/storage-access/#dom-document-requeststorageaccess)
- **标签**: `web-features:storage-access`

## 使用示例

### 基本用法

```javascript
// Document.requestStorageAccess 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.requestStorageAccess API');
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
| Safari | 11.1 | Client-side storage access granted per-page ([see explanation](https://developer.mozilla.org/docs/We... |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 不支持 |  |
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
- **注意事项**:
  - Client-side storage access granted per-page ([see explanation](https://developer.mozilla.org/docs/Web/API/Storage_Access_API#how_it_works))

### WebView Android

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.requestStorageAccess是否支持
function isDocumentRequestStorageAccessSupported() {
    return 'requestStorageAccess' in document && typeof document.requestStorageAccess === 'function';
}

if (isDocumentRequestStorageAccessSupported()) {
    console.log('Document.requestStorageAccess 支持');
    // 使用Document.requestStorageAccess
} else {
    console.log('Document.requestStorageAccess 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.requestStorageAccess polyfill
if (!document.requestStorageAccess) {
    // 在这里添加polyfill实现
    console.log('加载Document.requestStorageAccess polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **types_parameter**: `types` parameter

