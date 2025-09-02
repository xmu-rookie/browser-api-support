# Document.hidden API 兼容性数据

## 基本信息

- **API名称**: `Document.hidden`
- **MDN文档**: [Document.hidden](https://developer.mozilla.org/docs/Web/API/Document/hidden)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/interaction.html#dom-document-hidden)
- **标签**: `web-features:page-visibility`

## 使用示例

### 基本用法

```javascript
// Document.hidden 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.hidden API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 33 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 18 | Since Firefox 56 it also returns `true` on macOS when the window is completely hidden by another non... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 12.1 |  |
| Opera Android | 12.1 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 33
- **支持版本**: 13
- **前缀**: webkit

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 18
- **注意事项**:
  - Since Firefox 56 it also returns `true` on macOS when the window is completely hidden by another non-translucent application.
- **支持版本**: 10
- **移除版本**: 52
- **前缀**: moz

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: 12.1

### Opera Android

- **支持版本**: 12.1

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.hidden是否支持
function isDocumentHiddenSupported() {
    return 'hidden' in document && typeof document.hidden === 'function';
}

if (isDocumentHiddenSupported()) {
    console.log('Document.hidden 支持');
    // 使用Document.hidden
} else {
    console.log('Document.hidden 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.hidden polyfill
if (!document.hidden) {
    // 在这里添加polyfill实现
    console.log('加载Document.hidden polyfill');
}
```

