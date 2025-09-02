# Document.lastStyleSheetSet API 兼容性数据

## 基本信息

- **API名称**: `Document.lastStyleSheetSet`
- **MDN文档**: [Document.lastStyleSheetSet](https://developer.mozilla.org/docs/Web/API/Document/lastStyleSheetSet)

## 使用示例

### 基本用法

```javascript
// Document.lastStyleSheetSet 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.lastStyleSheetSet API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 3 |  |
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

- **支持版本**: 3

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.lastStyleSheetSet是否支持
function isDocumentLastStyleSheetSetSupported() {
    return 'lastStyleSheetSet' in document && typeof document.lastStyleSheetSet === 'function';
}

if (isDocumentLastStyleSheetSetSupported()) {
    console.log('Document.lastStyleSheetSet 支持');
    // 使用Document.lastStyleSheetSet
} else {
    console.log('Document.lastStyleSheetSet 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.lastStyleSheetSet polyfill
if (!document.lastStyleSheetSet) {
    // 在这里添加polyfill实现
    console.log('加载Document.lastStyleSheetSet polyfill');
}
```

