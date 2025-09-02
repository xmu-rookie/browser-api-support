# FileReader.error API 兼容性数据

## 基本信息

- **API名称**: `FileReader.error`
- **MDN文档**: [FileReader.error](https://developer.mozilla.org/docs/Web/API/FileReader/error)
- **规范文档**: [查看规范](https://w3c.github.io/FileAPI/#dom-filereader-error)
- **标签**: `web-features:file`

## 使用示例

### 基本用法

```javascript
// FileReader.error 使用示例
// 请查阅MDN文档了解具体用法
console.log('FileReader.error API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 6 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.3 |  |
| Edge | 12 |  |
| Firefox | 3.6 | Before Firefox 13, the `error` property returned a `FileError` object.; From Firefox 13 to Firefox 5... |
| Firefox Android | 32 | From Firefox 32 to Firefox 58, the `error` property returned a `DOMError` object.; From Firefox 58, ... |
| Internet Explorer | 10 | The `error` property returns a `DOMError` object. |
| Oculus | 同主版本 |  |
| Opera | 11 |  |
| Opera Android | 11 |  |
| Safari | 6 | The `error` property returns a `DOMError` object. |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 6

### Deno

- **支持版本**: 1.3

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.6
- **注意事项**:
  - Before Firefox 13, the `error` property returned a `FileError` object.
  - From Firefox 13 to Firefox 58, the `error` property returned a `DOMError` object.
  - From Firefox 58, the `error` property returns a `DOMException` object.

### Firefox Android

- **支持版本**: 32
- **注意事项**:
  - From Firefox 32 to Firefox 58, the `error` property returned a `DOMError` object.
  - From Firefox 58, the `error` property returns a `DOMException` object.

### Internet Explorer

- **支持版本**: 10
- **注意事项**:
  - The `error` property returns a `DOMError` object.

### Opera

- **支持版本**: 11

### Opera Android

- **支持版本**: 11

### Safari

- **支持版本**: 6
- **注意事项**:
  - The `error` property returns a `DOMError` object.

### WebView Android

- **支持版本**: 3

