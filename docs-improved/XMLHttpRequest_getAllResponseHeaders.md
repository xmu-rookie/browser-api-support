# XMLHttpRequest.getAllResponseHeaders API 兼容性数据

## 基本信息

- **API名称**: `XMLHttpRequest.getAllResponseHeaders`
- **MDN文档**: [XMLHttpRequest.getAllResponseHeaders](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/getAllResponseHeaders)
- **规范文档**: [查看规范](https://xhr.spec.whatwg.org/#the-getallresponseheaders()-method)
- **标签**: `web-features:xhr`

## 使用示例

### 基本用法

```javascript
// XMLHttpRequest.getAllResponseHeaders 使用示例
// 请查阅MDN文档了解具体用法
console.log('XMLHttpRequest.getAllResponseHeaders API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 | Starting from Firefox 49, empty headers are returned as empty strings in case the preference `networ... |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 5 |  |
| Oculus | 同主版本 |  |
| Opera | ≤12.1 |  |
| Opera Android | ≤12.1 |  |
| Safari | 1.2 |  |
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
- **注意事项**:
  - Starting from Firefox 49, empty headers are returned as empty strings in case the preference `network.http.keep_empty_response_headers_as_empty_string` is set to `true`, defaulting to `false`. Before Firefox 49 empty headers had been ignored. Since Firefox 50 the preference defaults to `true`.

### Internet Explorer

- **支持版本**: 5

### Opera

- **支持版本**: ≤12.1

### Opera Android

- **支持版本**: ≤12.1

### Safari

- **支持版本**: 1.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查XMLHttpRequest.getAllResponseHeaders是否支持
function isXMLHttpRequestGetAllResponseHeadersSupported() {
    return 'getAllResponseHeaders' in xmlhttprequest && typeof xmlhttprequest.getAllResponseHeaders === 'function';
}

if (isXMLHttpRequestGetAllResponseHeadersSupported()) {
    console.log('XMLHttpRequest.getAllResponseHeaders 支持');
    // 使用XMLHttpRequest.getAllResponseHeaders
} else {
    console.log('XMLHttpRequest.getAllResponseHeaders 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XMLHttpRequest.getAllResponseHeaders polyfill
if (!xmlhttprequest.getAllResponseHeaders) {
    // 在这里添加polyfill实现
    console.log('加载XMLHttpRequest.getAllResponseHeaders polyfill');
}
```

## 相关子API

该API包含以下子功能：

- **header_names_lowercase**: Header names returned in all lower case

