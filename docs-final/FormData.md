# FormData API 兼容性数据

## 基本信息

- **API名称**: `FormData`
- **MDN文档**: [FormData](https://developer.mozilla.org/docs/Web/API/FormData)
- **规范文档**: [查看规范](https://xhr.spec.whatwg.org/#interface-formdata)
- **标签**: `web-features:xhr`

## 使用示例

### 基本用法

```javascript
// FormData 使用示例
// 请查阅MDN文档了解具体用法
console.log('FormData API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Bun | 1.0.0 |  |
| Chrome | 5 |  |
| Chrome Android | 同主版本 |  |
| Deno | 1.0 |  |
| Edge | 12 |  |
| Firefox | 4 | Before Firefox 7, specifying a [`Blob`](https://developer.mozilla.org/docs/Web/API/Blob) as the data... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Node.js | 18.0.0 |  |
| Oculus | 同主版本 |  |
| Opera | 12 |  |
| Opera Android | 12 |  |
| Safari | 5 |  |
| Safari iOS | 5 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 3 | XHR in Android 4.0 sends empty content for `FormData` with `blob`. |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Bun

- **支持版本**: 1.0.0

### Chrome

- **支持版本**: 5

### Deno

- **支持版本**: 1.0

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 4
- **注意事项**:
  - Before Firefox 7, specifying a [`Blob`](https://developer.mozilla.org/docs/Web/API/Blob) as the data to append to the object, the filename reported in the `Content-Disposition` HTTP header was an empty string, resulting in errors on some servers. Starting with Firefox 7, the filename `blob` is sent.

### Internet Explorer

- **支持版本**: 10

### Node.js

- **支持版本**: 18.0.0

### Opera

- **支持版本**: 12

### Opera Android

- **支持版本**: 12

### Safari

- **支持版本**: 5

### Safari iOS

- **支持版本**: 5

### WebView Android

- **支持版本**: 3
- **注意事项**:
  - XHR in Android 4.0 sends empty content for `FormData` with `blob`.

