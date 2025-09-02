# XMLHttpRequest.responseType.document_value API 兼容性数据

## 基本信息

- **API名称**: `XMLHttpRequest.responseType.document_value`
- **MDN文档**: [XMLHttpRequest.responseType.document_value](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/responseType#document)
- **标签**: `web-features:xhr`

## 使用示例

### 基本用法

```javascript
// XMLHttpRequest.responseType.document_value 使用示例
// 请查阅MDN文档了解具体用法
console.log('XMLHttpRequest.responseType.document_value API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 31 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 11 |  |
| Firefox Android | 50 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 18 |  |
| Opera Android | 18 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 31

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 11

### Firefox Android

- **支持版本**: 50

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: 18
- **支持版本**: 12
- **移除版本**: 15

### Opera Android

- **支持版本**: 18
- **支持版本**: 12
- **移除版本**: 14

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查XMLHttpRequest.responseType.document_value是否支持
function isXMLHttpRequestResponseTypeSupported() {
    return 'responseType' in xmlhttprequest && typeof xmlhttprequest.responseType === 'function';
}

if (isXMLHttpRequestResponseTypeSupported()) {
    console.log('XMLHttpRequest.responseType.document_value 支持');
    // 使用XMLHttpRequest.responseType.document_value
} else {
    console.log('XMLHttpRequest.responseType.document_value 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XMLHttpRequest.responseType.document_value polyfill
if (!xmlhttprequest.responseType) {
    // 在这里添加polyfill实现
    console.log('加载XMLHttpRequest.responseType.document_value polyfill');
}
```

