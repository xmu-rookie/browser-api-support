# XMLHttpRequest.send.body_Blob_type API 兼容性数据

## 基本信息

- **API名称**: `XMLHttpRequest.send.body_Blob_type`
- **标签**: `web-features:xhr`
- **描述**: Blob as parameter to send()

## 使用示例

### 基本用法

```javascript
// XMLHttpRequest.send.body_Blob_type 使用示例
// 请查阅MDN文档了解具体用法
console.log('XMLHttpRequest.send.body_Blob_type API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 22 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 2 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 10 |  |
| Oculus | 同主版本 |  |
| Opera | 12 |  |
| Opera Android | 12 |  |
| Safari | 6 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 22

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 2

### Internet Explorer

- **支持版本**: 10

### Opera

- **支持版本**: 12

### Opera Android

- **支持版本**: 12

### Safari

- **支持版本**: 6

## 兼容性检查代码

### 特性检测

```javascript
// 检查XMLHttpRequest.send.body_Blob_type是否支持
function isXMLHttpRequestSendSupported() {
    return 'send' in xmlhttprequest && typeof xmlhttprequest.send === 'function';
}

if (isXMLHttpRequestSendSupported()) {
    console.log('XMLHttpRequest.send.body_Blob_type 支持');
    // 使用XMLHttpRequest.send.body_Blob_type
} else {
    console.log('XMLHttpRequest.send.body_Blob_type 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XMLHttpRequest.send.body_Blob_type polyfill
if (!xmlhttprequest.send) {
    // 在这里添加polyfill实现
    console.log('加载XMLHttpRequest.send.body_Blob_type polyfill');
}
```

