# Document.readyState API 兼容性数据

## 基本信息

- **API名称**: `Document.readyState`
- **MDN文档**: [Document.readyState](https://developer.mozilla.org/docs/Web/API/Document/readyState)
- **规范文档**: [查看规范](https://html.spec.whatwg.org/multipage/dom.html#current-document-readiness)
- **标签**: `web-features:dom`

## 使用示例

### 基本用法

```javascript
// Document.readyState 使用示例
// 请查阅MDN文档了解具体用法
console.log('Document.readyState API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.6 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 11 |  |
| Oculus | 同主版本 |  |
| Opera | 11 | Opera Presto fires 'complete' late after the 'load' event (in an incorrect order as per HTML5 standa... |
| Opera Android | 11 | Opera Presto fires 'complete' late after the 'load' event (in an incorrect order as per HTML5 standa... |
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

- **支持版本**: 3.6

### Internet Explorer

- **支持版本**: 11
- **支持版本**: 9
- **移除版本**: 11
- **注意事项**:
  - Internet Explorer 9 and 10 have bugs where the 'interactive' state can be fired too early before the document has finished parsing.
- **支持版本**: 4
- **移除版本**: 9
- **部分实现**: 是
- **注意事项**:
  - Only supports 'complete'.

### Opera

- **支持版本**: 11
- **注意事项**:
  - Opera Presto fires 'complete' late after the 'load' event (in an incorrect order as per HTML5 standard specification).

### Opera Android

- **支持版本**: 11
- **注意事项**:
  - Opera Presto fires 'complete' late after the 'load' event (in an incorrect order as per HTML5 standard specification).

### Safari

- **支持版本**: 1

## 兼容性检查代码

### 特性检测

```javascript
// 检查Document.readyState是否支持
function isDocumentReadyStateSupported() {
    return 'readyState' in document && typeof document.readyState === 'function';
}

if (isDocumentReadyStateSupported()) {
    console.log('Document.readyState 支持');
    // 使用Document.readyState
} else {
    console.log('Document.readyState 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// Document.readyState polyfill
if (!document.readyState) {
    // 在这里添加polyfill实现
    console.log('加载Document.readyState polyfill');
}
```

