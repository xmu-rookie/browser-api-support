# Document.referrer API 兼容性数据

## 基本信息

- **API名称**: `Document.referrer`
- **MDN文档**: [Document.referrer](https://developer.mozilla.org/docs/Web/API/Document/referrer)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dom.html#dom-document-referrer-dev)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Document.referrer 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.referrer API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 4 |  |
| Oculus | 同主版本 |  |
| Opera | 3 |  |
| Opera Android | 10.1 |  |
| Safari | 1 |  |
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

- **支持版本**: 1

### Internet Explorer

- **支持版本**: 4

### Opera

- **支持版本**: 3

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.referrer是否支持
function isDocumentReferrerSupported() {
    return 'referrer' in document && typeof document.referrer === 'function';
}

if (isDocumentReferrerSupported()) {
    console.log('Document.referrer 支持');
    // 使用Document.referrer
} else {
    console.log('Document.referrer 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.referrer polyfill
if (!document.referrer) {
    // 在这里添加polyfill实现
    console.log('加载Document.referrer polyfill');
}
```

