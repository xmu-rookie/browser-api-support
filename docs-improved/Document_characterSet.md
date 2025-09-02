# Document.characterSet API 兼容性数据

## 基本信息

- **API名称**: `Document.characterSet`
- **MDN文档**: [Document.characterSet](https://developer.mozilla.org/docs/Web/API/Document/characterSet)
- **规范文档**: [查看规范](https://dom.spec.whatwg.org/#ref-for-dom-document-characterset①)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Document.characterSet 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.characterSet API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 9 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 3 |  |
| Safari iOS | 1 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 1 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 1
- **支持版本**: 1
- **注意事项**:
  - `charset` alias was made read-only in Chrome 45.
- **支持版本**: 1

### Edge

- **支持版本**: 12
- **支持版本**: 12
- **支持版本**: 12

### Firefox

- **支持版本**: 1
- **支持版本**: 44
- **支持版本**: 1.5

### Internet Explorer

- **支持版本**: 9
- **支持版本**: 9
- **支持版本**: 4

### Opera

- **支持版本**: ≤12.1
- **支持版本**: 15
- **注意事项**:
  - `charset` alias was made read-only in Opera 45.
- **支持版本**: 15

### Opera Android

- **支持版本**: ≤12.1
- **支持版本**: 14
- **注意事项**:
  - `charset` alias was made read-only in Opera 45.
- **支持版本**: 14

### Safari

- **支持版本**: 3
- **支持版本**: 3
- **支持版本**: 3

### Safari iOS

- **支持版本**: 1
- **支持版本**: 1
- **支持版本**: 1

### WebView Android

- **支持版本**: 1
- **支持版本**: 1
- **注意事项**:
  - `charset` alias was made read-only in WebView 45.
- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.characterSet是否支持
function isDocumentCharacterSetSupported() {
    return 'characterSet' in document && typeof document.characterSet === 'function';
}

if (isDocumentCharacterSetSupported()) {
    console.log('Document.characterSet 支持');
    // 使用Document.characterSet
} else {
    console.log('Document.characterSet 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.characterSet polyfill
if (!document.characterSet) {
    // 在这里添加polyfill实现
    console.log('加载Document.characterSet polyfill');
}
```

