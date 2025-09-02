# Blob.Blob API 兼容性数据

## 基本信息

- **API名称**: `Blob.Blob`
- **MDN文档**: [Blob.Blob](https://developer.mozilla.org/docs/Web/API/Blob/Blob)
- **规范文档**: [查看规范](https://w3c.github.io/FileAPI/#constructorBlob)
- **标签**: `web-features:file`
- **描述**: `Blob()` constructor

## 使用示例

### 基本用法

```javascript
// Blob.Blob 使用示例
// 请查阅MDN文档了解具体用法
console.log('Blob.Blob API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 20 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 13 | Before Firefox 16, the second parameter, when set to `null` or `undefined`, leads to an error instea... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 | IE10 throws `InvalidStateError` with a `TypedArray` argument. Consider using `MSBuilder` as an alter... |
| Node.js | 15.7.0 | Before v16.7.0, the `endings` option was not supported. |
| Oculus | 同主版本 |  |
| Opera | 12 |  |
| Opera Android | 12 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 20

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 13
- **注意事项**:
  - Before Firefox 16, the second parameter, when set to `null` or `undefined`, leads to an error instead of being handled as an empty dictionary.

### Internet Explorer

- **支持版本**: 10
- **注意事项**:
  - IE10 throws `InvalidStateError` with a `TypedArray` argument. Consider using `MSBuilder` as an alternative.

### Node.js

- **支持版本**: 15.7.0
- **注意事项**:
  - Before v16.7.0, the `endings` option was not supported.
- **支持版本**: 14.18.0
- **移除版本**: 15.0.0

### Opera

- **支持版本**: 12

### Opera Android

- **支持版本**: 12

### Safari

- **支持版本**: 6

