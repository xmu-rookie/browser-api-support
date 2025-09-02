# Document.caretRangeFromPoint API 兼容性数据

## 基本信息

- **API名称**: `Document.caretRangeFromPoint`
- **MDN文档**: [Document.caretRangeFromPoint](https://developer.mozilla.org/docs/Web/API/Document/caretRangeFromPoint)

## 使用示例

### 基本用法

```javascript
// Document.caretRangeFromPoint 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.caretRangeFromPoint API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 4 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 不支持 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 5 |  |
| Safari iOS | 4 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 4

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 5

### Safari iOS

- **支持版本**: 4

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.caretRangeFromPoint是否支持
function isDocumentCaretRangeFromPointSupported() {
    return 'caretRangeFromPoint' in document && typeof document.caretRangeFromPoint === 'function';
}

if (isDocumentCaretRangeFromPointSupported()) {
    console.log('Document.caretRangeFromPoint 支持');
    // 使用Document.caretRangeFromPoint
} else {
    console.log('Document.caretRangeFromPoint 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.caretRangeFromPoint polyfill
if (!document.caretRangeFromPoint) {
    // 在这里添加polyfill实现
    console.log('加载Document.caretRangeFromPoint polyfill');
}
```

