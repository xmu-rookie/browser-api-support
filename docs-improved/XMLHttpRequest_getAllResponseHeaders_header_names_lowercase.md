# XMLHttpRequest.getAllResponseHeaders.header_names_lowercase API 兼容性数据

## 基本信息

- **API名称**: `XMLHttpRequest.getAllResponseHeaders.header_names_lowercase`
- **标签**: `web-features:xhr`
- **描述**: Header names returned in all lower case

## 使用示例

### 基本用法

```javascript
// XMLHttpRequest.getAllResponseHeaders.header_names_lowercase 使用示例
// 请查阅MDN文档了解具体用法
console.log('XMLHttpRequest.getAllResponseHeaders.header_names_lowercase API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 60 |  |
| Chrome Android | 同主版本 |  |
| Edge | 同主版本 |  |
| Firefox | 64 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 11 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 60

### Firefox

- **支持版本**: 64

### Safari

- **支持版本**: 11

## 兼容性检查代码

### 特性检测

```javascript
// 检查XMLHttpRequest.getAllResponseHeaders.header_names_lowercase是否支持
function isXMLHttpRequestGetAllResponseHeadersSupported() {
    return 'getAllResponseHeaders' in xmlhttprequest && typeof xmlhttprequest.getAllResponseHeaders === 'function';
}

if (isXMLHttpRequestGetAllResponseHeadersSupported()) {
    console.log('XMLHttpRequest.getAllResponseHeaders.header_names_lowercase 支持');
    // 使用XMLHttpRequest.getAllResponseHeaders.header_names_lowercase
} else {
    console.log('XMLHttpRequest.getAllResponseHeaders.header_names_lowercase 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XMLHttpRequest.getAllResponseHeaders.header_names_lowercase polyfill
if (!xmlhttprequest.getAllResponseHeaders) {
    // 在这里添加polyfill实现
    console.log('加载XMLHttpRequest.getAllResponseHeaders.header_names_lowercase polyfill');
}
```

