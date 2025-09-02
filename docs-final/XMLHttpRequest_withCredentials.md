# XMLHttpRequest.withCredentials API 兼容性数据

## 基本信息

- **API名称**: `XMLHttpRequest.withCredentials`
- **MDN文档**: [XMLHttpRequest.withCredentials](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/withCredentials)
- **规范文档**: [查看规范](https://xhr.spec.whatwg.org/#the-withcredentials-attribute)
- **标签**: `web-features:xhr`

## 使用示例

### 基本用法

```javascript
// XMLHttpRequest.withCredentials 使用示例
// 请查阅MDN文档了解具体用法
console.log('XMLHttpRequest.withCredentials API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 3 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 3.5 | Starting with Firefox 11, it's no longer supported to use the `withCredentials` attribute when perfo... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 | Internet Explorer versions 8 and 9 supported cross-domain requests (CORS) using [`XDomainRequest`](h... |
| Oculus | 同主版本 |  |
| Opera | 12 |  |
| Opera Android | 12 |  |
| Safari | 4 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 3

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 3.5
- **注意事项**:
  - Starting with Firefox 11, it's no longer supported to use the `withCredentials` attribute when performing synchronous requests. Attempting to do so throws an `NS_ERROR_DOM_INVALID_ACCESS_ERR` exception.

### Internet Explorer

- **支持版本**: 10
- **注意事项**:
  - Internet Explorer versions 8 and 9 supported cross-domain requests (CORS) using [`XDomainRequest`](https://developer.mozilla.org/docs/Web/API/XDomainRequest).

### Opera

- **支持版本**: 12

### Opera Android

- **支持版本**: 12

### Safari

- **支持版本**: 4

