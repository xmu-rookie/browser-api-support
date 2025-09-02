# Document.moveBefore API 兼容性数据

## 基本信息

- **API名称**: `Document.moveBefore`
- **MDN文档**: [Document.moveBefore](https://developer.mozilla.org/docs/Web/API/Document/moveBefore)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#dom-parentnode-movebefore)
- **标签**: `web-features:move-before`

## 使用示例

### 基本用法

```javascript
// Document.moveBefore 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.moveBefore API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 133 |  |
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

- **支持版本**: 133

### Firefox

- **支持版本**: 不支持

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.moveBefore是否支持
function isDocumentMoveBeforeSupported() {
    return 'moveBefore' in document && typeof document.moveBefore === 'function';
}

if (isDocumentMoveBeforeSupported()) {
    console.log('Document.moveBefore 支持');
    // 使用Document.moveBefore
} else {
    console.log('Document.moveBefore 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.moveBefore polyfill
if (!document.moveBefore) {
    // 在这里添加polyfill实现
    console.log('加载Document.moveBefore polyfill');
}
```

