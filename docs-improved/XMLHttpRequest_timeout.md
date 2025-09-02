# XMLHttpRequest.timeout API 兼容性数据

## 基本信息

- **API名称**: `XMLHttpRequest.timeout`
- **MDN文档**: [XMLHttpRequest.timeout](https://developer.mozilla.org/docs/Web/API/XMLHttpRequest/timeout)
- **规范文档**: [查看规范](https://xhr.spec.whatwg.org/#the-timeout-attribute)
- **标签**: `web-features:xhr`

## 使用示例

### 基本用法

```javascript
// XMLHttpRequest.timeout 使用示例
// 请查阅MDN文档了解具体用法
console.log('XMLHttpRequest.timeout API');
```

## 浏览器兼容性

| 浏览器 | 支持版本 | 说明 |
|--------|----------|------|
| Chrome | 29 |  |
| Chrome Android | 同主版本 |  |
| Edge | 12 |  |
| Firefox | 12 |  |
| Firefox Android | 同主版本 |  |
| Internet Explorer | 8 |  |
| Oculus | 同主版本 |  |
| Opera | 17 |  |
| Opera Android | 18 |  |
| Safari | 7 |  |
| Safari iOS | 同主版本 |  |
| Samsung Internet | 同主版本 |  |
| WebView Android | 同主版本 |  |
| webview_ios | 同主版本 |  |

## 详细兼容性信息

### Chrome

- **支持版本**: 29

### Edge

- **支持版本**: 12

### Firefox

- **支持版本**: 12

### Internet Explorer

- **支持版本**: 8

### Opera

- **支持版本**: 17
- **支持版本**: 12
- **移除版本**: 16

### Opera Android

- **支持版本**: 18
- **支持版本**: 12
- **移除版本**: 16

### Safari

- **支持版本**: 7

## 兼容性检查代码

### 特性检测

```javascript
// 检查XMLHttpRequest.timeout是否支持
function isXMLHttpRequestTimeoutSupported() {
    return 'timeout' in xmlhttprequest && typeof xmlhttprequest.timeout === 'function';
}

if (isXMLHttpRequestTimeoutSupported()) {
    console.log('XMLHttpRequest.timeout 支持');
    // 使用XMLHttpRequest.timeout
} else {
    console.log('XMLHttpRequest.timeout 不支持，需要polyfill');
    // 加载polyfill或使用替代方案
}
```

### Polyfill示例

```javascript
// XMLHttpRequest.timeout polyfill
if (!xmlhttprequest.timeout) {
    // 在这里添加polyfill实现
    console.log('加载XMLHttpRequest.timeout polyfill');
}
```

