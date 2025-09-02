# Document.preferredStyleSheetSet API 兼容性数据

## 基本信息

- **API名称**: `Document.preferredStyleSheetSet`
- **MDN文档**: [Document.preferredStyleSheetSet](https://developer.mozilla.org/docs/Web/API/Document/preferredStyleSheetSet)

## 使用示例

### 基本用法

```javascript
// Document.preferredStyleSheetSet 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.preferredStyleSheetSet API');
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
// 检查Document.preferredStyleSheetSet是否支持
function isDocumentPreferredStyleSheetSetSupported() {
    return 'preferredStyleSheetSet' in document && typeof document.preferredStyleSheetSet === 'function';
}

if (isDocumentPreferredStyleSheetSetSupported()) {
    console.log('Document.preferredStyleSheetSet 支持');
    // 使用Document.preferredStyleSheetSet
} else {
    console.log('Document.preferredStyleSheetSet 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.preferredStyleSheetSet polyfill
if (!document.preferredStyleSheetSet) {
    // 在这里添加polyfill实现
    console.log('加载Document.preferredStyleSheetSet polyfill');
}
```

