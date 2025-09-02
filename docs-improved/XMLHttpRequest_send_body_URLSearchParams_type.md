# XMLHttpRequest.send.body_URLSearchParams_type API 兼容性数据

## 基本信息

- **API名称**: `XMLHttpRequest.send.body_URLSearchParams_type`
- **标签**: `web-features:xhr`
- **描述**: URLSearchParams as parameter to send()

## 使用示例

### 基本用法

```javascript
// XMLHttpRequest.send.body_URLSearchParams_type 使用示例
// 请查阅MDN文档了解具体用法
console.log('XMLHttpRequest.send.body_URLSearchParams_type API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 59 |  |
| Chrome Android | 同主版本 |  |
| Edge | 17 |  |
| Firefox | 44 |  |
| Firefox Android | 同主版本 |  |
| Oculus | 同主版本 |  |
| Opera | 同主版本 |  |
| Opera Android | 同主版本 |  |
| Safari | 15 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 59

### Edge

- **支持版本**: 17

### Firefox

- **支持版本**: 44

### Safari

- **支持版本**: 15
- **支持版本**: 10.1
- **移除版本**: 15
- **部分实现**: 是
- **注意事项**:
  - Doesn't send the correct `Content-Type` header by default. See [bug 227477](https://webkit.org/b/227477).

## 兼容性检查代码

### 特性检测

```javascript
// 检查XMLHttpRequest.send.body_URLSearchParams_type是否支持
function isXMLHttpRequestSendSupported() {
    return 'send' in xmlhttprequest && typeof xmlhttprequest.send === 'function';
}

if (isXMLHttpRequestSendSupported()) {
    console.log('XMLHttpRequest.send.body_URLSearchParams_type 支持');
    // 使用XMLHttpRequest.send.body_URLSearchParams_type
} else {
    console.log('XMLHttpRequest.send.body_URLSearchParams_type 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XMLHttpRequest.send.body_URLSearchParams_type polyfill
if (!xmlhttprequest.send) {
    // 在这里添加polyfill实现
    console.log('加载XMLHttpRequest.send.body_URLSearchParams_type polyfill');
}
```

