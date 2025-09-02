# Document.getElementsByClassName API 兼容性数据

## 基本信息

- **API名称**: `Document.getElementsByClassName`
- **MDN文档**: [Document.getElementsByClassName](https://developer.mozilla.org/docs/Web/API/Document/getElementsByClassName)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-document-getelementsbyclassname①)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Document.getElementsByClassName 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.getElementsByClassName API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | 9.5 |  |
| Opera Android | 10.1 |  |
| Safari | 3.1 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3

### Internet Explorer

- **支持版本**: 9

### Opera

- **支持版本**: 9.5

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 3.1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.getElementsByClassName是否支持
function isDocumentGetElementsByClassNameSupported() {
    return 'getElementsByClassName' in document && typeof document.getElementsByClassName === 'function';
}

if (isDocumentGetElementsByClassNameSupported()) {
    console.log('Document.getElementsByClassName 支持');
    // 使用Document.getElementsByClassName
} else {
    console.log('Document.getElementsByClassName 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.getElementsByClassName polyfill
if (!document.getElementsByClassName) {
    // 在这里添加polyfill实现
    console.log('加载Document.getElementsByClassName polyfill');
}
```

