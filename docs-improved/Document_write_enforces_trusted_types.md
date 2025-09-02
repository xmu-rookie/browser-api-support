# Document.write.enforces_trusted_types API 兼容性数据

## 基本信息

- **API名称**: `Document.write.enforces_trusted_types`
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#document-write-steps,https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#:~:text=if%20value%20is%20a%20trustedhtml%20object)
- **标签**: `web-features:document-write`, `web-features:trusted-types`
- **描述**: Requires `TrustedHTML` instance when trusted types are enforced

## 使用示例

### 基本用法

```javascript
// Document.write.enforces_trusted_types 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.write.enforces_trusted_types API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 86 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 133 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 26 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 86

### Firefox

- **支持版本**: 133
- **需要标志**: 
  - dom.security.trusted_types.enabled: true

### Safari

- **支持版本**: 26

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.write.enforces_trusted_types是否支持
function isDocumentWriteSupported() {
    return 'write' in document && typeof document.write === 'function';
}

if (isDocumentWriteSupported()) {
    console.log('Document.write.enforces_trusted_types 支持');
    // 使用Document.write.enforces_trusted_types
} else {
    console.log('Document.write.enforces_trusted_types 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.write.enforces_trusted_types polyfill
if (!document.write) {
    // 在这里添加polyfill实现
    console.log('加载Document.write.enforces_trusted_types polyfill');
}
```

