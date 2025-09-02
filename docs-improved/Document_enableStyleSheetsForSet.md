# Document.enableStyleSheetsForSet API 兼容性数据

## 基本信息

- **API名称**: `Document.enableStyleSheetsForSet`
- **MDN文档**: [Document.enableStyleSheetsForSet](https://developer.mozilla.org/docs/Web/API/Document/enableStyleSheetsForSet)

## 使用示例

### 基本用法

```javascript
// Document.enableStyleSheetsForSet 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.enableStyleSheetsForSet API');
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
// 检查Document.enableStyleSheetsForSet是否支持
function isDocumentEnableStyleSheetsForSetSupported() {
    return 'enableStyleSheetsForSet' in document && typeof document.enableStyleSheetsForSet === 'function';
}

if (isDocumentEnableStyleSheetsForSetSupported()) {
    console.log('Document.enableStyleSheetsForSet 支持');
    // 使用Document.enableStyleSheetsForSet
} else {
    console.log('Document.enableStyleSheetsForSet 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.enableStyleSheetsForSet polyfill
if (!document.enableStyleSheetsForSet) {
    // 在这里添加polyfill实现
    console.log('加载Document.enableStyleSheetsForSet polyfill');
}
```

