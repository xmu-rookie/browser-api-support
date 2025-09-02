# XMLHttpRequest.status API 兼容性数据

## 基本信息

- **API名称**: `XMLHttpRequest.status`
- **MDN文档**: [XMLHttpRequest.status](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/status)
- **规范文档**: [查看规范](https://xhr.spec.whatwg.org/#the-status-attribute)
- **标签**: `web-features:xhr`

## 使用示例

### 基本用法

```javascript
// XMLHttpRequest.status 使用示例
// 请查阅MDN文档了解具体用法
console.log('XMLHttpRequest.status API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 1 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 1 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 7 | Internet Explorer version 5 and 6 supported ajax calls using `ActiveXObject()` |
| Oculus | 同主版本 |  |
| Opera | 8 |  |
| Opera Android | 10.1 |  |
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

### Internet Explorer

- **支持版本**: 7
- **注意事项**:
  - Internet Explorer version 5 and 6 supported ajax calls using `ActiveXObject()`

### Opera

- **支持版本**: 8

### Opera Android

- **支持版本**: 10.1

### Safari

- **支持版本**: 1.2

## 兼容性检查代码

### 特性检测

```javascript
// 检查XMLHttpRequest.status是否支持
function isXMLHttpRequestStatusSupported() {
    return 'status' in xmlhttprequest && typeof xmlhttprequest.status === 'function';
}

if (isXMLHttpRequestStatusSupported()) {
    console.log('XMLHttpRequest.status 支持');
    // 使用XMLHttpRequest.status
} else {
    console.log('XMLHttpRequest.status 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XMLHttpRequest.status polyfill
if (!xmlhttprequest.status) {
    // 在这里添加polyfill实现
    console.log('加载XMLHttpRequest.status polyfill');
}
```

