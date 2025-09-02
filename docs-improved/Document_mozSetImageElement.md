# Document.mozSetImageElement API 兼容性数据

## 基本信息

- **API名称**: `Document.mozSetImageElement`
- **MDN文档**: [Document.mozSetImageElement](https://developer.mozilla.org/docs/Web/API/Document/mozSetImageElement)

## 使用示例

### 基本用法

```javascript
// Document.mozSetImageElement 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.mozSetImageElement API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 不支持 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 4 |  |
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

- **支持版本**: 4

### Safari

- **支持版本**: 不支持

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.mozSetImageElement是否支持
function isDocumentMozSetImageElementSupported() {
    return 'mozSetImageElement' in document && typeof document.mozSetImageElement === 'function';
}

if (isDocumentMozSetImageElementSupported()) {
    console.log('Document.mozSetImageElement 支持');
    // 使用Document.mozSetImageElement
} else {
    console.log('Document.mozSetImageElement 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.mozSetImageElement polyfill
if (!document.mozSetImageElement) {
    // 在这里添加polyfill实现
    console.log('加载Document.mozSetImageElement polyfill');
}
```

